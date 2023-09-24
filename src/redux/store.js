import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/products-slice"
import cartSlice from "./slices/cart-slice";
export const store=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice
    }
})