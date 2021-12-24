import React from "react";
import HomeLayout from "../components/HomeLayout";

import { NextComponentType } from "next";
import CustomErrorPage from "../components/ErrorPage";

const Custom404 = () => {
  return (
    <CustomErrorPage
      heading="Sorry! Nothing to see here"
      text="Let's get you back to the home page"
    />
  );
};

Custom404.getLayout = (page: NextComponentType) => (
  <HomeLayout>{page}</HomeLayout>
);

export default Custom404;
