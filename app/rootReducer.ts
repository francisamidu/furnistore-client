import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import storage from "./storage";

import { RootState } from "./store";

//Clears persisted storage
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    }
    case "CLEAR": {
      storage.removeItem("persist:root");
      state = {} as RootState;
      return state;
    }
    default: {
      state = {} as RootState;
      return state;
    }
  }
  return state;
};

export default rootReducer;
