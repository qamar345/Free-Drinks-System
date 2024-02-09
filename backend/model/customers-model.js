const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    drinks: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Customers = mongoose.model("customers", CustomerSchema);
module.exports = {
  Customers,
};
