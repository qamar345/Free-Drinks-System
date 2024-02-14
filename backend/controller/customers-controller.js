const { Customers } = require("../model/customers-model");

const CustomerResponse = async (req, res) => {
  const { username, email, drinks } = req.body.response;

  const data = Customers({
    username: username,
    email: email,
    drinks: drinks,
  });

  let flag = false;
  let storeDrinks = [];

  try {
    const check = await Customers.find();

    for (let i = 0; i < check.length; i++) {
      if (check[i].email === email) {
        flag = true;
        storeDrinks = check[i].drinks.map((res) => res);
      }
    }

    if (flag) {
      storeDrinks.push(drinks);
      const filter = { email: email };
      const update = { drinks: storeDrinks };

      await Customers.findOneAndUpdate(filter, update);
      res.json("Your Response Update Successfuly");
    } else {
      await data.save();
      res.json("Your Response Submitted Successfuly");
    }
  } catch (error) {
    res.json(error);
  }
};

const GetResponse = async (req, res) => {
  try {
    const response = await Customers.find();
    res.json(response);
  } catch (error) {}
};

module.exports = { CustomerResponse, GetResponse };
