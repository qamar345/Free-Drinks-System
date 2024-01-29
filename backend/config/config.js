const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

module.exports = {
  PORT,
  SECRET,
  HOST,
  USER,
  PASSWORD,
  DATABASE,
};
