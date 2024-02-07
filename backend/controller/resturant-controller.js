const { Resturant, Menu } = require("../model/resturant-model");

const RegisterResturant = async (req, res) => {
  const { name, email, password, location, address, role } = req.body;

  const data = Resturant({
    name: name,
    email: email,
    password: password,
    location: location,
    address: address,
    role: role,
  });

  try {
    await data.save();
    res.json("Resturant Registered Successfully");
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

const GetMenu = async (req, res) => {
  const long = req.body.lo;
  const lati = req.body.la;
  try {
    // const result = await Resturant.find(
    //   {
    //     location: {
    //       $near: {
    //         $geometry: {
    //           type: "Point",
    //           coordinates: [parseFloat(long), parseFloat(lati)],
    //         },
    //       },
    //     },
    //   },

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

    // );

    // console.log(result);

    res.json(result[1].Menu);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  RegisterResturant,
  AddMenu,
  GetMenu,
};
