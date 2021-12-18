import React from "react";

import Link from "next/link";
import Image from "next/image";

import {
  AiOutlineDown,
  AiOutlineSetting,
  AiOutlineNotification,
} from "react-icons/ai";

const AppBar = () => {
  return (
    <div className="app-bar bg-white py-4 px-6 flex sticky top-0 w-full flex-row justify-between items-center">
      <div className="brand">
        <Link href="/">
          <a className="font-bold text-2xl color-blue">Furnistore</a>
        </Link>
      </div>
      <div className="bar-icons flex flex-row items-center">
        <div className="mr-6 flex flex-row items-center relative cursor-pointer">
          <div className="badge bg-red-500 text-white flex flex-row items-center justify-center rounded-full">
            2
          </div>
          <Link href="/notifications">
            <a>
              <AiOutlineNotification className="text-gray-700 text-2xl" />
            </a>
          </Link>
        </div>
        <Link href="/settings">
          <a className="mr-6">
            <AiOutlineSetting className="text-gray-700 cursor-pointer text-2xl" />
          </a>
        </Link>
        <div className="flex flex-row items-center">
          <Image
            src="/avatar2.png"
            height="35"
            width="35"
            className="rounded-full cursor-pointer"
          />
          <span className="ml-4 text-md">Francis</span>
          <AiOutlineDown className="ml-4 text-gray-700 cursor-pointer text-1xl" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
