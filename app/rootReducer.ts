import { AnyAction, Reducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { RootState } from "./store";

//Clears persisted storage
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (state === undefined || action.type === "root/clearStorage") {
    storage.removeItem("persist:root");
    state = {} as RootState;
  }
  return state;
};

export default rootReducer;
