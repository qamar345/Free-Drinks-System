const { Customers } = require("../model/customers-model");

const CustomerResponse = async (req, res) => {
  const { username, email, drinks } = req.body;

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
      res.json("Your Response Update Succssfuly");
    } else {
      await data.save();
      res.json("Your Response Submitted Succssfuly");
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = { CustomerResponse };
