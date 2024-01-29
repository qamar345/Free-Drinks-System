const express = require("express");
const { Test, Signup, Login } = require("../controller/user-controller");
const { SECRET } = require("../config/config");
const jwt = require("jsonwebtoken");
const { conn } = require("../connection/connection");

const router = express.Router();

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const secretKey = SECRET;

  try {
    const verify = jwt.verify(token, secretKey);
    const userEmail = verify.email;

    const verifyEmail = "SELECT `email` FROM `users` WHERE `email` =?";

    conn.query(verifyEmail, [userEmail], (err, data) => {
      if (err) {
        res.json(err);
      } else {
        next();

      }
    });
  } catch (error) {
    res.json("Invalid Token!!!");
  }
};

/* Endpoints */

router.get("/test", verifyToken, Test);

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
