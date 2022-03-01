import React, { PropsWithChildren } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { HomeTopBar, Footer } from ".";

const HomeLayout = (props: Partial<PropsWithChildren<AppProps>>) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Furnistore - Luxury Furniture to your liking</title>
        <meta
          name="description"
          content="Furniture store for all your furniture needs"
        />
        <meta name="site-name" content="Furnistore" />
        <meta name="author" content="Francis Amidu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTopBar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
