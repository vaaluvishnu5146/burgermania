const router = require("express").Router();
const FoodModel = require("../models/Food.model");

// HELPS TO GET ALL FOOD DATA FROM THE DATABASE
// PARAMS
// HTTP METHOD GET
// ROUTE http://localhost:5000/food/
// req {   }

router.get("/", (req, res, next) => {
  FoodModel.find().then((response) => {
    if (response.length > 0) {
      return res.status(200).json({
        message: "Success fetching food!!!",
        data: response,
      });
    } else {
      return res.status(200).json({
        message: "Sorry we ran out of groceries!!!",
        data: response,
      });
    }
  });
});

// HELPS TO GET ALL FOOD DATA FROM THE DATABASE
// PARAMS
// HTTP METHOD GET
// ROUTE http://localhost:5000/food/
// req {   }

router.get("/:category", (req, res, next) => {
  const { category = "" } = req.params;
  FoodModel.find({ category: category }).then((response) => {
    if (response.length > 0) {
      return res.status(200).json({
        message: "Success fetching food!!!",
        data: response,
      });
    } else {
      return res.status(200).json({
        message: "Sorry we ran out of groceries!!!",
        data: response,
      });
    }
  });
});

// HELPS TO POST A FOOD DATA TO THE DATABASE
// PARAMS NEW FOODMODEL
// HTTP METHOD POST
// ROUTE http://localhost:5000/food/

router.post("/", (req, res, next) => {
  const Food = new FoodModel({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    cuisine: req.body.cuisine,
    foodType: req.body.foodType,
    price: req.body.price,
    tags: req.body.tags,
    discount: req.body.discount,
    discountType: req.body.discountType,
    sellerId: req.body.sellerId,
    namespace: req.body.namespace,
  });
  Food.save()
    .then((response) => {
      return res.status(200).json({
        message: "Successfull",
        data: response,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Couldnt add food",
        error: err,
      });
    });
});

// HELPS TO UPDATE A FOOD DATA TO THE DATABASE
// PARAMS NEW FOODMODEL
// HTTP METHOD PUT
// ROUTE http://localhost:5000/food/

router.put("/:productId", (req, res, next) => {
  const { productId = "" } = req.params;

  if (!productId) {
    return res.status(400).json({
      message: "Item cant be updated without item id",
      error: err,
    });
  }
  FoodModel.findByIdAndUpdate(productId, { ...req.body }, { new: true })
    .then((response) => {
      return res.status(200).json({
        message: "Successfull updated the food item",
        data: response,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Couldnt update food",
        error: err,
      });
    });
});

// HELPS TO DELETE A FOOD FROM THE DATABASE
// PARAMS ID
// HTTP METHOD DELETE
// ROUTE http://localhost:5000/food/

router.delete("/:productId", (req, res, next) => {
  const { productId = "" } = req.params;

  if (!productId) {
    return res.status(400).json({
      message: "Item cant be deleted without item id",
      error: err,
    });
  }
  FoodModel.findByIdAndDelete(productId)
    .then((response) => {
      return res.status(200).json({
        message: "Successfull deleted the food item",
        data: response,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        message: "Couldnt update food",
        error: err,
      });
    });
});

module.exports = router;
