import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "cart/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:3001/products");
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getShoppingCartItems = createAsyncThunk(
  "cart/getShoppingCartItems",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:3001/ShoppingCartItems");
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addShoppingCartItem = createAsyncThunk(
  "cart/addShoppingCartItem",
  async ({item}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(`http://localhost:3001/ShoppingCartItems/`, {
        ...item,
        quantity: 1,
        total: +item.price
      });
      const data = await res.data;
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteShoppingCartItem = createAsyncThunk(
  "cart/deleteShoppingCartItem",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(
        `http://localhost:3001/ShoppingCartItems/${+id}`
      );
      const data = await res.data;
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateShoppingCartItemQty = createAsyncThunk(
  "cart/updateShoppingCartItemQty",
  async ({ item, newVal }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.patch(
        `http://localhost:3001/ShoppingCartItems/${item.id}`,
        { ...item, quantity: +newVal, total: +newVal * +item.price }
      );
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  *********************** #############  #############  ***********************
// Handle data configuration {Stringify Or Parsing} easily.
const configureData = () => {
  return {
    jsonStr: (data) => {
      return JSON.stringify(data);
    },
    jsonPar: (data) => {
      return JSON.parse(data);
    },
    jsonStrPars: (data) => {
      return jsonPar(jsonStr(data));
    },
  };
};
const { jsonStr, jsonPar, jsonStrPars } = configureData();
//  *********************** #############  #############  ***********************

//  *********************** #############  #############  ***********************

const initialState = {
  allProducts: [],
  shCartItems: [],
  cartLength: 0,
  isError: false,
  errStatus: 'Rejected request'
};

//  *********************** #############  #############  ***********************
//  *********************** #############  #############  ***********************

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  *************************************** //
  },

  // Extra Reducers
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    }),
      builder.addCase(getProducts.rejected, (state, action) => {
        state.isError = true;
      }),
      // // // ****************   **********************   **********************   **********************
      // // // **********************  ********## getShoppingCartItems  ##******** **********************
      // // // ****************   **********************   **********************   **********************

      builder.addCase(getShoppingCartItems.fulfilled, (state, action) => {
        state.shCartItems = action.payload;
        state.cartLength = action.payload.length;
      }),
      builder.addCase(getShoppingCartItems.rejected, (state, action) => {
        state.isError = true;
      }),
      // // // ****************   **********************   **********************   **********************
      // // // **********************  ********## addShoppingCartItem  ##******** **********************
      // // // ****************   **********************   **********************   **********************
      builder.addCase(addShoppingCartItem.fulfilled, (state, action) => {
        // Increase Cart length on Add click.
        state.cartLength = +state.cartLength + 1;
        // Add The new Item to the cart.
        state.shCartItems.push(action.payload);
      }),
      builder.addCase(addShoppingCartItem.rejected, (state, action) => {
        console.log(action.payload);
        state.isError =true;
      }),
      // // // ****************   **********************   **********************   **********************
      // // // **********************  ********## deleteShoppingCartItem  ##******** **********************
      // // // ****************   **********************   **********************   **********************

      builder.addCase(deleteShoppingCartItem.fulfilled, (state, action) => {
        let newShCart = state.shCartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        state.shCartItems = newShCart;
        state.cartLength = newShCart.length;
      }),
      builder.addCase(deleteShoppingCartItem.rejected, (state, action) => {
        console.log(action.payload);
        state.isError = true;
      }),
      // // // ****************   **********************   **********************   **********************
      // // // **********************  ********## updateShoppingCartItemQty  ##******** **********************
      // // // ****************   **********************   **********************   **********************

      builder.addCase(updateShoppingCartItemQty.fulfilled, (state, action) => {
        /*  Here we're gonna update the shopping cart according to the last quantity update happend to it, so the shCart itself 
       will be syncrhonously updated.  */

        //  get currentShoppingCart state.
        const currentShoppingCart = state.shCartItems;
        const configureShoppingCart = jsonStrPars(currentShoppingCart);
        const getUpdatedItem = state.shCartItems.findIndex(
          (el) => el.id == action.payload.id
        );
        // Update the shopping Cart according to the last update.
        if (getUpdatedItem > -1) {
          configureShoppingCart[getUpdatedItem] = action.payload;
          state.shCartItems = configureShoppingCart;
        } else {
          state.shCartItems = configureShoppingCart;
        }
      }),
      builder.addCase(updateShoppingCartItemQty.rejected, (state, action) => {
        state.isError = true;
      });
  },

  //
});

export default cartSlice.reducer;
