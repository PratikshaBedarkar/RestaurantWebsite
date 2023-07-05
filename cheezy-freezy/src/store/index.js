import cartSlice from "./cart-slice";
import cartdataSlice from "./cartdata-slice";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({ reducer: {cart: cartSlice.reducer, cartdata: cartdataSlice.reducer} });


export default store;
