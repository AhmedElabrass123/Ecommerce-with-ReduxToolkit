import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  data: [],
};
export const fetchProduct = createAsyncThunk("products/fetchProduct", () => {
  return axios.get("https://fakestoreapi.com/products").then((res) => res.data);
});
const getProducts = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
      state.data = [];
    });
  },
});
// export const {} = counterSlice.actions

export default getProducts.reducer;
