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

    location: {
      type: {
        type: String,
        required: true,
      },

      coordinates: {
        type: Array,
        required: true,
      },
    },

    address: {
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
    email: {
      type: String,
      required: true,
    },

    menuId: {
      type: Number,
      required: true,
    },

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

const Menu = mongoose.model("menus", MenuShcema);

module.exports = { Resturant, Menu };
