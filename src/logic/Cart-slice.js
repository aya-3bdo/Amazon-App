import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products.json";

let cartItems = localStorage.getItem('cartProducts') ? (JSON.parse(localStorage.getItem('cartProducts'))): [];
const initialState = {
  itemsList: products,
  cartItems,
  displayState: '',
  initialTxt: "add to cart",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const tempitem = { ...action.payload, quantity: 1 }
      const increaseQuantity = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (increaseQuantity >= 0) {
        state.cartItems[increaseQuantity].quantity += 1;
      } else {
        state.cartItems.push(tempitem);
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartItems));

    },

    changeQty: (state, action)=>{
      let getCartItems = JSON.parse(localStorage.getItem('cartProducts'));
      const cartItemIndx = getCartItems.findIndex(ind => ind.id == action.payload.item.id);
      if (cartItemIndx >= 0) {
        getCartItems[cartItemIndx].quantity = (+action.payload.newVal);
        state.cartItems = getCartItems
        localStorage.setItem('cartProducts', JSON.stringify(state.cartItems))
      }
    },

    deleteItem: (state, action) => {
      let getCartItems = JSON.parse(localStorage.getItem('cartProducts'));
      let NewCartItems = getCartItems.filter(cartItem => cartItem.id !== action.payload.id);
      state.cartItems = NewCartItems;
        localStorage.setItem('cartProducts', JSON.stringify(state.cartItems))

    }
    



    //  *************************************** // 
  }
});

export default cartSlice.reducer;
export const { addToCart, changeQty, deleteItem } = cartSlice.actions;
