import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      console.log(findProduct);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
        console.log(findProduct);
      }
    },
    removeFromCart: (state, action) => {
      return (state = state.filter((pro) => pro.id !== action.payload.id));
    },
    incrementQuantity: (state, action) => {
      const findItem = state.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.quantity += 1;
      }
      return;
    },
    decrementQuantity: (state, action) => {
      const findItem = state.find((item) => item.id === action.payload.id);
       if(findItem) {
        findItem.quantity -= 1;
      }
      return;
    },
    clearAll: (state, action) => {
      return (state = []);
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearAll,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
