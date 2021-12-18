import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../app/store";

import "../styles/globals.css";
import "../styles/dashboard.css";
import "../node_modules/tailwindcss/tailwind.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout): unknown => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </PersistGate>
  );
};

export default App;
