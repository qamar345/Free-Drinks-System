const { Resturant, Menu } = require("../model/resturant-model");

const RegisterResturant = async (req, res) => {
  const { name, email, longitude, latitude, address } = req.body.data;

  const data = Resturant({
    name: name,
    email: email,
    location: {
      type: "Point",
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
    },
    address: address,
  });

  let flag = false;

  try {
    const getRestaurants = await Resturant.find();

    for (let i = 0; i < getRestaurants.length; i++) {
      if (getRestaurants[i].email === email) {
        flag = true;
      }
    }

    if (flag) {
      res.json({
        flag,
        msg1: "Email already registered! Please choose another one",
      });
    } else {
      await data.save();
      res.json({ flag, msg2: "Resturant Registered Successfully" });
    }
  } catch (error) {
    res.json(error);
  }
};

const AddMenu = async (req, res) => {
  const { email, image, title } = req.body;

  const data = Menu({
    email: email,

    imgURL: image,
    title: title,
  });

  try {
    await data.save();
    res.json("Menu Added Successfully");
  } catch (error) {
    res.json(error);
  }
};

const GetMenu = async (req, res, next) => {
  const long = req.body.long;
  const lati = req.body.lati;

  // console.log(long, lati);

  try {
    const result = await Resturant.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(long), parseFloat(lati)],
          },
          distanceField: "dist.calculated",
          includeLocs: "dist.location",
          maxDistance: parseFloat(200) * 1609,
          spherical: true,
        },
      },

      {
        $lookup: {
          from: "menus",
          localField: "email",
          foreignField: "email",
          as: "Menu",
        },
      },
    ]);

    res.json(result);
  } catch (error) {
    console.log("");
  }
};

const getSelectedMenu = async (req, res) => {
  const { email } = req.body;

  try {
    const data = await Menu.find({ email: email });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  RegisterResturant,
  AddMenu,
  GetMenu,
  getSelectedMenu,
};
