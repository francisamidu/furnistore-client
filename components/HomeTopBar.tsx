import React, { useState } from "react";

import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdOutlineShoppingBasket } from "react-icons/md";
import generateId from "../helpers/generateId";
import ILink from "../interfaces/HomeLink";
import HomeLink from "./HomeLink";

const HomeTopBar = () => {
  const [links, setLinks] = useState<Array<ILink>>([
    {
      id: generateId(),
      text: "New",
      path: "new",
    },
    {
      id: generateId(),
      text: "Bestsellers",
      path: "bestsellers",
    },
    {
      id: generateId(),
      text: "Dining & Kitchen",
      path: "dining  kitchen",
    },
    {
      id: generateId(),
      text: "Lighting",
      path: "lighting",
    },
    {
      id: generateId(),
      text: "Decors & Living Room",
      path: "decors living room",
    },
    {
      id: generateId(),
      text: "Rugs & Carpets",
      path: "rugs carpets",
    },
    {
      id: generateId(),
      text: "Workstations",
      path: "workstations",
    },
  ]);
  return (
    <section className="bg-white sticky top-0 w-full px-8">
      <nav className="border-b-2 border-gray-20">
        <div className="flex flex-row justify-between items-center py-4 md:max-w-screen-xl md:m-auto">
          <Link href="/">
            <a className="font-bold uppercase text-2xl color-blue">
              Furnistore
            </a>
          </Link>
          <div className="flex flex-row items-center justify-between">
            <AiOutlineUser className="text-gray-700 cursor-pointer text-2xl mr-4" />
            <div className="mr-6 flex flex-row items-center relative cursor-pointer">
              <div className="badge bg-red-500 text-white flex flex-row items-center justify-center rounded-full">
                2
              </div>
              <AiOutlineShoppingCart className="text-gray-700 cursor-pointer text-2xl" />
            </div>
            <div className="flex flex-row items-center relative cursor-pointer">
              <div className="badge bg-red-500 text-white flex flex-row items-center justify-center rounded-full">
                3
              </div>
              <MdOutlineShoppingBasket className="text-gray-700 cursor-pointer text-2xl" />
            </div>
          </div>
        </div>
      </nav>
      <div className="p-2">
        <div className="md:max-w-screen-xl md:m-auto flex flex-row items-center justify-between">
          <div className="flex flex-row items-center md:w-9/12">
            {links.map((link: ILink) => (
              <HomeLink link={link} key={link.id} />
            ))}
          </div>
          <div className="flex flex-row items-center md:w-3/12 pl-8">
            <form className="home-search-form relative h-10 w-full">
              <input
                type="text"
                id="username"
                placeholder="Search"
                className="w-full py-2 px-2 h-full border-b-2 border-gray-200"
              />
              <AiOutlineSearch className="home-search absolute text-gray-500 text-2xl" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopBar;
