const { SECRET } = require("../config/config");
const { conn } = require("../connection/connection");
const jwt = require("jsonwebtoken");

const Signup = (req, res) => {
  const { name, email, password, role, trial } = req.body;
  const data = [name, email, password, role, trial];

  const signup_query =
    "INSERT INTO `users`(`name`, `email`, `password`, `role`, `trial`) VALUES (?)";

  conn.query(signup_query, [data], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};

const Login = (req, res) => {
  const { email, password, role } = req.body;

  const login_query =
    "SELECT `email`, `password`, `role` FROM `users` WHERE `email` =? AND `password` =? AND `role`=?";
  conn.query(login_query, [email, password, role], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      const secretKey = SECRET;

      const payload = {
        email: data[0].email,
        password: data[0].password,
      };

      /* Create JWT */

      const token = jwt.sign(payload, secretKey, { expiresIn: "5d" });

      res.json({
        message: "Login Successfully",
        tokenId: token,
      });
    }
  });
};

const Test = (req, res) => {
  res.json("Test Done");
};

module.exports = {
  Signup,
  Login,
  Test,
};
