const { Resturant } = require("../model/resturant-model");
const { User } = require("../model/user-model");

const GetRestaurants = async (req, res) => {
  try {
    const data = await Resturant.find();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

const GetUsers = async (req, res) => {
  try {
    const data = await User.find({ role: "user" });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  GetRestaurants,
  GetUsers,
};
