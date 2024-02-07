const mongoose = require("mongoose");

const ResturantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    coord: {
      type: Array,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Resturant = mongoose.model("resturants", ResturantSchema);

const MenuShcema = new mongoose.Schema(
  {
    imgURL: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { Resturant, MenuShcema };
