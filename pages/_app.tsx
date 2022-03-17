import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { wrapper } from "../app/store";

import "../styles/globals.css";
import "../styles/dashboard.css";
import "../node_modules/tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

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
  return (
    <ProductsProvider>
      <UsersProvider>
        <OrdersProvider>
          <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
        </OrdersProvider>
      </UsersProvider>
    </ProductsProvider>
  );
};

export default wrapper.withRedux(App);
