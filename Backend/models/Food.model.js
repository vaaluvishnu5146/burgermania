const mongoose = require("mongoose");

// CREATE A SCHEMA
// CONVERT THE SCHEMA TO MODEL
// USING MODEL TRY TO MANIPULATE DATA

// 1. Name
// 2. Category
// 3. Cuisine
// 4. Food Type
// 5. Price
// 6. Tags - Spicy, Sweet, Salty
// 7. Discount - 10%, 10INR
// 8. Description
// 9. Namespace - Cafe or restaurant
const FoodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    default: "veg",
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  discount: {
    type: Number,
    required: false,
  },
  discountType: {
    type: String,
    required: false,
  },
  sellerId: {
    type: String,
    required: false,
  },
  namespace: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Food", FoodSchema);
