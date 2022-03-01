import { NextComponentType } from "next";
import React from "react";
import { ComingSoon, HomeLayout } from "../components";

const Accounts = () => {
  return (
    <section>
      <ComingSoon heading="Accounts" />
    </section>
  );
};

Accounts.getLayout = (page: NextComponentType) => (
  <HomeLayout>{page}</HomeLayout>
);

export default Accounts;
