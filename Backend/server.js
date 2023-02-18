const express = require("express");
const server = express();

// CONFIGURING DOTENV
const dotenv = require("dotenv");
dotenv.config();
// REGSITERING OUR EXPRESS APPLICATION TO THE SERVER
const app = require("./index");
const port = 5000;
server.use("/", app);
require("./config/dbconfig");
server.listen(port, () => {
  console.log("Server started");
});
