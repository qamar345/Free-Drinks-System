const { Resturant } = require("../model/resturant-model");

const RegisterResturant = async (req, res) => {
  const { name, email, password, coord, address, role } = req.body;

  const data = Resturant({
    name: name,
    email: email,
    password: password,
    coord: coord,
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

module.exports = {
    RegisterResturant
}
