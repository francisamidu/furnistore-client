import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../app/store";

import "../styles/globals.css";
import "../styles/dashboard.css";
import "../node_modules/tailwindcss/tailwind.css";
import {
  AppProvider,
  OrdersProvider,
  ProductsProvider,
  UsersProvider,
} from "../contexts";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout): unknown => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const ISSET = typeof window !== "undefined";
  useEffect(() => {
    persistor.pause();
    if (ISSET) {
      persistor.persist();
    }
  }, [ISSET]);
  return (
    <ProductsProvider>
      <UsersProvider>
        <OrdersProvider>
          <AppProvider>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {getLayout(<Component {...pageProps} />)}
              </PersistGate>
            </Provider>
          </AppProvider>
        </OrdersProvider>
      </UsersProvider>
    </ProductsProvider>
  );
};

export default App;
