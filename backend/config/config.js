const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const MONGO = process.env.CONNECTION;

module.exports = {
  PORT,
  SECRET,
  MONGO,
};
