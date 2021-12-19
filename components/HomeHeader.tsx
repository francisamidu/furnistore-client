import React from "react";
import DealBar from "./DealBar";

const HomeHeader = () => {
  return (
    <header className="home-header flex flex-row justify-center items-center relative">
      <DealBar />
      <div className="home-overlay p-8 text-white text-center">
        <h1 className="font-bold text-2xl uppercase">In Stores & Online</h1>
        <h2 className="text-9xl uppercase py-4">
          Mega <span className="font-bold">Sale</span>
        </h2>
        <h3 className="font-bold text-2xl uppercase text-orange-500">
          Up to 50% Off
          <span className="pl-2 font-normal text-white">+ Free Delivery</span>
        </h3>
      </div>
    </header>
  );
};

export default HomeHeader;
