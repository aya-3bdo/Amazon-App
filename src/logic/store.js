import { configureStore } from "@reduxjs/toolkit";
import cart from './Cart-slice';
import { cartItemsSlice } from "./cartItemsApi";

export const store = configureStore({
  reducer: {
    shoppingCart: cart,
    [cartItemsSlice.reducerPath]: cartItemsSlice.reducer
  },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cartItemsSlice.middleware)
});