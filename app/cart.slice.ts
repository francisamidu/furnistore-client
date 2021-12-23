import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const name = "cart";

const initialState = {};

const reducers = {
  addProductToCart: (
    state: typeof initialState,
    action: PayloadAction<any>
  ) => {},
  removeProductFromCart: (
    state: typeof initialState,
    action: PayloadAction<any>
  ) => {},
};

export const cartSlice = createSlice({
  initialState,
  name,
  reducers,
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
