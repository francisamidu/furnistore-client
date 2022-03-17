import {
  createStore,
  combineReducers,
  Store,
  AnyAction,
  applyMiddleware,
} from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore, Persistor } from "redux-persist";
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
import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducer = combineReducers({
  [errorSlice.name]: errorSlice.reducer,
  [authPageSlice.name]: authPageSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [imageUploadApi.reducerPath]: imageUploadApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [productSlice.name]: productSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [salesApi.reducerPath]: salesApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  root: rootReducer,
});
// BINDING MIDDLEWARE
const bindMiddleware = (
  middleware: ((api: any) => (next: any) => (action: any) => any)[]
) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }: any) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(
      combinedReducer
      // , bindMiddleware([rtkQueryErrorLogger])
    );
  } else {
    const persistConfig = {
      key: "nextjs",
      whitelist: [
        errorSlice.name,
        authPageSlice.name,
        cartSlice.name,
        authApi.reducerPath,
        cartApi.reducerPath,
        imageUploadApi.reducerPath,
        ordersApi.reducerPath,
        productSlice.name,
        productsApi.reducerPath,
        salesApi.reducerPath,
        usersApi.reducerPath,
      ],
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

    const store: Store & { __persistor?: Persistor } = createStore(
      persistedReducer
      // bindMiddleware([rtkQueryErrorLogger])
    ); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore);

export type AppDispatch = typeof combineReducers;
export type RootState = ReturnType<typeof combinedReducer & AnyAction>;
