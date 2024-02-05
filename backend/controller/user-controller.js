const { SECRET } = require("../config/config");
const jwt = require("jsonwebtoken");
const { User } = require("../model/user-model");

const Signup = async (req, res) => {
  const { name, email, password, role, trial } = req.body;

  const data = User({
    name: name,
    email: email,
    password: password,
    role: role,
    trial: trial,
  });

  let checkEmail = false;

  try {
    const user = await User.find();

    for (let i = 0; i < user.length; i++) {
      if (user[i].email === email) {
        checkEmail = true;
      }
    }

    if (checkEmail) {
      res.json("Email Already Register");
    } else {
      await data.save();
      res.json("Signup Successfully");
    }
  } catch (error) {
    res.json(error);
  }
};

const Login = async (req, res) => {
  const { email, password, role } = req.body;

  const filter = { email: email, password: password, role: role };

  try {
    const result = await User.findOne(filter);
    if (result === null) {
      res.json("User not found");
    } else {
      const secretKey = SECRET;
      const payload = {
        email: result.email,
        password: result.password,
      };
      /* Create JWT */
      const token = jwt.sign(payload, secretKey, { expiresIn: "5d" });

      res.json({
        n: result.name,
        e: result.email,
        tokenID: token,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

const Test = (req, res) => {
  res.json("Test Done");
};

module.exports = {
  Signup,
  Login,
  Test,
};
