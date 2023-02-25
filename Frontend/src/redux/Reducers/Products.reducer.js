import { createSlice } from "@reduxjs/toolkit";

//PRODUCT SLIDE
export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {
    // STATE BY DEFAULT HAVE THE CURRENT STATE OF REDUCER
    // {
    //     products: []
    // }
    // ACTION BY DEFAULT HAVE THIS
    // {
    //     type: 'product/saveAllProducts',
    //     payload: []
    // }
    saveProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// EXPORTINGA CTIONS
export const { saveProducts } = ProductSlice.actions;
// EXPORTIMG WHOLE REDUCER
export default ProductSlice.reducer;
