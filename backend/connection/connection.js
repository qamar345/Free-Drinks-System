const mysql = require("mysql");
const { HOST, USER, PASSWORD, DATABASE } = require("../config/config");

const conn = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

const MYConnection = () => {
  conn.connect((err) => {
    if (err) throw err;
    console.log("Server Connected with SQL Successfully");
  });
};

module.exports = { MYConnection, conn };
