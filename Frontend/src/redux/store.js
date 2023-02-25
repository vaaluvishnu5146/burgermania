import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Reducers/Products.reducer";

// CREATING A REDUX STORE
const store = configureStore({
  // REDUCERS
  reducer: {
    product: ProductsReducer,
  },
});

export default store;
