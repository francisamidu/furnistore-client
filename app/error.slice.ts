import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateId } from "../helpers";

type Error = {
  id: string;
  message: string;
};

const initialState: Array<Error> = [];

const name = "errors";

const reducers = {
  addError: (state: Array<Error>, action: PayloadAction<string>) => {
    const newState = JSON.parse(JSON.stringify(state));
    const error = {
      id: generateId(),
      message: action.payload,
    };
    return [...newState, error];
  },
  clearErrors: (state: Array<Error>) => {
    return [];
  },
};

export const errorSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { addError, clearErrors } = errorSlice.actions;
