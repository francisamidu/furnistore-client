import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { CartItem } from "../interfaces";

const name = "cart";

const initialState: any[] | CartItem = [];

const reducers = {
  addProductToCart: (
    state: typeof initialState,
    action: PayloadAction<CartItem>
  ) => {
    const newState = JSON.parse(JSON.stringify(state));
    let productInCart = newState.find(
      (product: CartItem) => product.id === action.payload.id
    );
    if (productInCart) {
      return [
        ...newState.map((product: CartItem) => {
          if (product.id === action.payload.id) {
            return {
              ...productInCart,
              quantity: productInCart.quantity + 1,
            };
          }
          return {
            ...action.payload,
          };
        }),
      ];
    } else {
      return [...newState, action.payload];
    }
  },
  removeProductFromCart: (
    state: typeof initialState,
    action: PayloadAction<any>
  ) => {
    const newState = JSON.parse(JSON.stringify(state));
    return [
      ...newState.filter(
        (product: CartItem) => product.id !== action.payload.id
      ),
    ];
  },
};

export const cartSlice = createSlice({
  initialState,
  name,
  reducers,
});

export const cartMiddleware =
  (store: any) => (next: Dispatch) => (action: PayloadAction<CartItem>) => {
    console.log("Middleware triggered:", action);
    next(action);
  };

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
