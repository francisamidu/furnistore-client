import React from "react";
import DealBar from "./DealBar";

const HomeHeader = () => {
  return (
    <header className="home-header flex flex-row justify-center items-center relative">
      <DealBar />
      <div className="home-overlay max-w-480 sm:max-w-full p-8 mt-8 sm:mt-0 text-white text-center">
        <h1 className="font-bold text-1xl text-2xl uppercase">
          In Stores & Online
        </h1>
        <h2 className="sm:text-9xl text-4xl uppercase py-4">
          Mega <span className="font-bold">Sale</span>
        </h2>
        <h3 className="font-bold text-1xl text-2xl uppercase text-orange-500">
          Up to 50% Off
          <span className="pl-2 font-normal text-white">+ Free Delivery*</span>
        </h3>
      </div>
    </header>
  );
};

export default HomeHeader;
