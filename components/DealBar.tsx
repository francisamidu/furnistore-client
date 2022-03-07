import React from "react";

import { AiFillClockCircle } from "react-icons/ai";

const DealBar = () => {
  return (
    <div className="flex flex-row justify-center items-center py-4 bg-black w-full uppercase font-bold text-1xl absolute deal-bar">
      <span className="text-white mr-4">{"Don't"} miss out! sale ends in:</span>
      <div className="font-normal text-white flex flex-row items-center">
        <AiFillClockCircle className="font-normal mr-2" />
        <span>17h: 10m: 20s</span>
      </div>
    </div>
  );
};

export default DealBar;
