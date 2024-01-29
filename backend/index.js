const express = require("express");
const { PORT } = require("./config/config");
const cors = require("cors");
const router = require("./routes/index-routes");
const { MYConnection } = require("./connection/connection");

const app = express();
app.use(express.json());
app.use(cors());
MYConnection();
app.use(router);

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
