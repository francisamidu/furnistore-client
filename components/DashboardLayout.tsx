import React, { PropsWithChildren } from "react";

import Head from "next/head";
import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";
import { AppProps } from "next/app";

const Dashboard = (props: Partial<PropsWithChildren<AppProps>>) => {
  const { children } = props;
  return (
    <main>
      <Head>
        <title>Furnistore - Your favorite furniture e-store</title>
        <meta
          name="description"
          content="Furnistore is an e-commerce store that brings you high-end luxury furniture"
        ></meta>
        <meta name="author" content="Francis Amidu"></meta>
        <meta name="site-name" content="furnistore.netlify.app"></meta>
      </Head>
      <AppBar />
      <section className="flex flex-row items-center">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default Dashboard;
