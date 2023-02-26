import { createSlice } from "@reduxjs/toolkit";

//PRODUCT SLIDE
export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // STATE BY DEFAULT HAVE THE CURRENT STATE OF REDUCER
    // {
    //     cart: []
    // }
    // ACTION BY DEFAULT HAVE THIS
    // {
    //     type: 'cart/addItemToCart',
    //     payload: []
    // }
    addItemToCart: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
    },
    handleQuantity: (state, action) => {
      let itemsCopy = [...state.items];
      const item = itemsCopy.find((d) => d._id == action.payload.id);
      if (item) {
        if (action.payload.type == "0") {
          item.quantity += 1;
        } else {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            itemsCopy = itemsCopy.filter((d) => d._id != action.payload.id);
          }
        }
      }
      state.items = itemsCopy;
    },
  },
});

// EXPORTINGA CTIONS
export const { addItemToCart, handleQuantity } = CartSlice.actions;
// EXPORTIMG WHOLE REDUCER
export default CartSlice.reducer;
