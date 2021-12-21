import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../app/store";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  Operation,
  NextLink,
} from "@apollo/client";

import "../styles/globals.css";
import "../styles/dashboard.css";
import "../node_modules/tailwindcss/tailwind.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const linkMiddleware = new ApolloLink(
  (operation: Operation, forward: NextLink) => {
    operation.setContext({
      headers: {},
    });
    return forward(operation);
  }
);
const link = new HttpLink({
  uri: "http://localhost:5000/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: linkMiddleware.concat(link),
});
const App = ({ Component, pageProps }: AppPropsWithLayout): unknown => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </Provider>
    </PersistGate>
  );
};

export default App;
