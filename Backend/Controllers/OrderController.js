const router = require("express").Router();
const OrderModel = require("../models/Order.model");

// HELPS TO POST A FOOD DATA TO THE DATABASE
// PARAMS NEW FOODMODEL
// HTTP METHOD POST
// ROUTE http://localhost:5000/food/

router.post("/", (req, res, next) => {
  const Order = new OrderModel({
    userId: req.body.userId,
    items: req.body.items,
    cartTotal: req.body.cartTotal,
    discount: req.body.discount,
    couponApplied: req.body.couponApplied,
    address: req.body.address,
    message: req.body.message,
    timeToDeliver: req.body.timeToDeliver,
    deliveryType: req.body.timeToDeliver,
    orderStatus: req.body.orderStatus,
  });
  Order.save()
    .then((response) => {
      return res.status(200).json({
        message: "Successfull",
        data: response,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Couldnt create order",
        error: err.message,
      });
    });
});

module.exports = router;
