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
import storage from "./storage";
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
import rtkQueryErrorLogger from "./rtk-error-logger";

const combinedReducer = combineReducers({
  [errorSlice.name]: errorSlice.reducer,
  [authPageSlice.name]: authPageSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  root: rootReducer,
});
const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage,
  },
  combinedReducer
);
export const store: Store = configureStore({
  reducer: {
    ...persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [imageUploadApi.reducerPath]: imageUploadApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [productSlice.name]: productSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [salesApi.reducerPath]: salesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(rtkQueryErrorLogger),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer & AnyAction>;
