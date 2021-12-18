import { configureStore, combineReducers, Store } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi } from "../services/authApi";
import rootReducer from "./rootReducer";
import { authPageSlice } from "./authPage.slice";

export const mainReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});
const combinedReducer = combineReducers({
  ...mainReducer,
  root: rootReducer,
  authPage: authPageSlice.reducer,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);
export const store: Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
