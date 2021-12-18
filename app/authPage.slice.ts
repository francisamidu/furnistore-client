import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authPage = {
  email?: string;
  otp?: string;
  page?: string;
};
const initialState: authPage = {
  email: "",
  otp: "",
  page: "",
};
const name = "authPage";

const reducers = {
  addEmail: (state: authPage, action: PayloadAction<authPage>) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      email: action.payload.email,
    };
  },
  addOTP: (state: authPage, action: PayloadAction<any>) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      otp: action.payload.otp,
    };
  },
  addPage: (state: authPage, action: PayloadAction<any>) => {
    const newState = JSON.parse(JSON.stringify(state));
    return {
      ...newState,
      page: action.payload.page,
    };
  },
  resetState: (state: authPage, action: PayloadAction<any>) => {
    return {
      email: "",
      otp: "",
      page: "",
    };
  },
};

export const authPageSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { resetState, addEmail, addOTP, addPage } = authPageSlice.actions;
