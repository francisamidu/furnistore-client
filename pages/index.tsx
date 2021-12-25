import { NextComponentType } from "next";
import React from "react";
import Index from "../components/Index";
import HomeLayout from "../components/HomeLayout";

const Home = () => {
  return <Index />;
};
Home.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;
