import { createSlice } from "@reduxjs/toolkit";
const cartdataSlice = createSlice({
  name: 'cartdata',
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
        const existingItem = state.cartItems.find((item)=>item.id===action.payload.id)
        if(existingItem){
          existingItem.quantity = existingItem.quantity + action.payload.quantity
          existingItem.amount = existingItem.amount + action.payload.amount
        }
        else{
          state.cartItems.push(action.payload)
        }
        state.totalQuantity = state.cartItems.length
        state.totalAmount = state.totalAmount + action.payload.amount
        
        
    },
    removeItem(state, action) {
        const existingItem = state.cartItems.find((item)=>item.id===action.payload.id)
        if(parseInt(existingItem.quantity)===1){
          state.cartItems = state.cartItems.filter((item)=>item.id!==action.payload.id)
          console.log("entering")

        }
        else{
          existingItem.quantity--
          existingItem.amount = existingItem.amount - action.payload.price
        }
        state.totalQuantity = state.cartItems.length
        state.totalAmount = state.totalAmount - action.payload.price
    },
  },
});

export default cartdataSlice;
export const cartdataActions = cartdataSlice.actions
