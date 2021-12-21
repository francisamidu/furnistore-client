import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Image from "next/image";
import AuthIllustration from "../public/authentication.svg";
import AuthTopBar from "./AuthTopBar";

import { AppProps } from "next/app";
type AuthLayoutProps = {
  pageName: string;
  page: string;
};

const AuthLayout = (
  props: Partial<PropsWithChildren<AppProps>> & AuthLayoutProps
) => {
  const { children, pageName, page } = props;
  return (
    <>
      <Head>
        <title>{pageName} - Furnistore Authentication</title>
        <meta content={pageName} name="page-name"></meta>
      </Head>
      <AuthTopBar pageName={pageName} page={page} />
      <section>
        <div className="signup-content max-w-screen-md m-auto sm:justify-center  grid grid-cols-4 py-8 px-12 content-center">
          <Image
            src={AuthIllustration}
            height="200"
            width="200"
            className="col-start-2 col-end-3"
          />
          {children}
        </div>
      </section>
    </>
  );
};

export default AuthLayout;