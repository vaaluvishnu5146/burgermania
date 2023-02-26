import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducers/Cart.reducer";
import ProductsReducer from "./Reducers/Products.reducer";

// CREATING A REDUX STORE
const store = configureStore({
  // REDUCERS
  reducer: {
    product: ProductsReducer,
    cart: CartReducer,
  },
});

export default store;
