const mongoose = require("mongoose");
const { MONGO } = require("../config/config");

const MYConnection = async () => {
  try {
    await mongoose.connect(MONGO);
    console.log("Server Connected with Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { MYConnection };
