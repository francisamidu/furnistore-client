import { NextComponentType } from "next";
import React from "react";
import { Home, HomeLayout } from "../components";

const Index = () => {
  return <Home />;
};
Index.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Index;
