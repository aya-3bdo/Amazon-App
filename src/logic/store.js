import { configureStore } from "@reduxjs/toolkit";
import  cart  from './Cart-slice';

export const store = configureStore({
  reducer: {
    shoppingCart: cart,
  
  }
});