const express = require("express");
const { SECRET } = require("../config/config");
const jwt = require("jsonwebtoken");
const { User } = require("../model/user-model");
const { Test, Signup, Login } = require("../controller/user-controller");
const {
  RegisterResturant,
  AddMenu,
  GetMenu,
} = require("../controller/resturant-controller");
const { CustomerResponse } = require("../controller/customers-controller");


const router = express.Router();

/* Token Verification */
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const secretKey = SECRET;

  try {
    const verify = jwt.verify(token, secretKey);
    const userEmail = verify.email;
    const verifyEmail = await User.findOne({ email: userEmail });

    if (verifyEmail !== null) {
      next();
    } else {
      res.json("Invalid Token!!!");
    }
  } catch (error) {
    res.json("Invalid Token!!!");
  }
};

/* Endpoints */

router.get("/test", verifyToken, Test);
router.post("/signup", Signup);
router.post("/login", Login);

router.post("/register-resturant", RegisterResturant);
router.post("/add-menu", AddMenu);
router.post("/get-menu", GetMenu);
router.post("/customer-response", CustomerResponse);

module.exports = router;
