import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Furnistore - You one stop furniture store</title>
        <meta
          name="description"
          content="Furniture store for all your furniture needs"
        />
        <meta name="site-name" content="Furnistore" />
        <meta name="author" content="Francis Amidu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
