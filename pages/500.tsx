import React from "react";

import { NextComponentType } from "next";
import HomeLayout from "../components/HomeLayout";
import CustomErrorPage from "../components/ErrorPage";

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
