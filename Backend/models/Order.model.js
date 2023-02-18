const mongoose = require("mongoose");

const ItemsSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const OrderSchema = mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  items: {
    type: [ItemsSchema],
    required: true,
  },
  cartTotal: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  couponApplied: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  timeToDeliver: {
    type: Date,
    required: false,
  },
  deliveryType: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
