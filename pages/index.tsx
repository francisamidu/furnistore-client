import React from "react";
import Head from "next/head";
import HomeTopBar from "../components/HomeTopBar";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
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
      <HomeHeader />
    </>
  );
}
