import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../interfaces";

const initialState = {
  products: [] as Array<Product>,
  product: null as unknown as Product,
  productId: "" as string,
};

const name = "products";

const reducers = {
  addProductState: (state: typeof initialState, action: PayloadAction<any>) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      products: [
        ...newState?.products,
        {
          ...action.payload,
        },
      ],
    };
  },
  removeProductState: (
    state: typeof initialState,
    action: PayloadAction<any>
  ) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      products: newState?.products?.map(
        (product: Product) => product.id !== action.payload
      ),
    };
  },
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
  updateProductState: (
    state: typeof initialState,
    action: PayloadAction<any>
  ) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      products: newState?.products?.map((product: Product) => {
        if (product.id !== action.payload) {
          product = action.payload;
        }
        return product;
      }),
    };
  },
};

export const productSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  addProductState,
  removeProductState,
  setProductIdState,
  setProductState,
  updateProductState,
} = productSlice.actions;
