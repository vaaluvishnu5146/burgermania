// APP CONFIGURATIONS GOES HERE
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

// CONFIGURE CORS
app.use(cors());
// CONFIGURE BODY_PARSER
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// IMPORT CONTROLLER AND REGISTED WITH OUR APP
const FoodController = require("./Controllers/FoodController");
const OrderController = require("./Controllers/OrderController");

app.use("/food", FoodController);
app.use("/order", OrderController);

module.exports = app;
