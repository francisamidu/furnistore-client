import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../interfaces";

const initialState = {
  product: null as unknown as Product,
  productId: "" as string,
};

const name = "products";

const reducers = {
  setProductState: (state: typeof initialState, action: PayloadAction<any>) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      product: action.payload,
    };
  },
  setProductIdState: (
    state: typeof initialState,
    action: PayloadAction<any>
  ) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      productId: action.payload,
    };
  },
};

export const productSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { setProductIdState, setProductState } = productSlice.actions;
