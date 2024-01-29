const { json } = require("body-parser");
const express = require("express");

const app = express(json());

app.listen(8000, () => {
  console.log("Server Running on 8000");
});
