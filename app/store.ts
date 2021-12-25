import {
  configureStore,
  combineReducers,
  Store,
  AnyAction,
} from "@reduxjs/toolkit";
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

import { authApi, imageUploadApi, productsApi } from "../services";
import middlewares from "../middlewares";

import {
  errorSlice,
  authPageSlice,
  cartSlice,
  productSlice,
  rootReducer,
} from "./index";

const mainReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});
const combinedReducer = combineReducers({
  ...mainReducer,
  [cartSlice.name]: cartSlice.reducer,
  [errorSlice.name]: errorSlice.reducer,
  [imageUploadApi.reducerPath]: imageUploadApi.reducer,
  [productSlice.name]: productSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [authPageSlice.name]: authPageSlice.reducer,
  root: rootReducer,
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
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer & AnyAction>;
