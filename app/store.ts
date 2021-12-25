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

import {
  authApi,
  cartApi,
  imageUploadApi,
  ordersApi,
  productsApi,
  salesApi,
  usersApi,
} from "../services";

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
  [authPageSlice.name]: authPageSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [errorSlice.name]: errorSlice.reducer,
  [imageUploadApi.reducerPath]: imageUploadApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [productSlice.name]: productSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [salesApi.reducerPath]: salesApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
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
