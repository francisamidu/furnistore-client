import React from "react";

import { NextComponentType } from "next";
import { HomeLayout, ErrorPage as CustomErrorPage } from "../components";

const Custom500 = () => {
  return (
    <CustomErrorPage
      heading="Something awful happened here"
      text="Let's get you somewhere safe!"
    />
  );
};

Custom500.getLayout = (page: NextComponentType) => (
  <HomeLayout>{page}</HomeLayout>
);

export default Custom500;
