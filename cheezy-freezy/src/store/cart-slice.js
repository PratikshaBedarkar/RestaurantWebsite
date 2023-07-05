import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { showCart: false },
    reducers: {
      openCart(state) {
        state.showCart = true;
      },
      closeCart(state) {
        state.showCart = false
      },
    },
  });

export default cartSlice;
export const cartActions = cartSlice.actions;