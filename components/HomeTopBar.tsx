import React, { useState } from "react";

import Link from "next/link";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlineShoppingBasket } from "react-icons/md";
import generateId from "../helpers/generateId";
import ILink from "../interfaces/HomeLink";
import HomeLink from "./HomeLink";
import { useAppSelector } from "../hooks/useSelector";

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
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  const cart = useAppSelector((state) => state.cart);
  const { length } = cart;
  return (
    <section className="bg-white sticky z-10 top-0 w-full px-4 sm:px-8 shadow-md">
      <nav className="sm:border-b-2 sm:border-gray-200 border-0">
        <div className="flex flex-row justify-between items-center py-4 md:max-w-screen-xl md:m-auto">
          <Link href="/">
            <a className="font-bold text-2xl uppercase text-gray-800 transition duration-400 hover:color-purplish">
              Furnistore
            </a>
          </Link>
          <div className="flex flex-row items-center justify-between">
            <AiOutlineUser className="transition duration-400 hover:color-purplish cursor-pointer text-2xl mr-4" />
            <div className="mr-6 flex flex-row items-center relative cursor-pointer">
              {length > 0 ? (
                <div className="badge bg-red-500 text-white flex flex-row items-center justify-center rounded-full">
                  {length}
                </div>
              ) : null}
              <Link href="/tag?page=cart">
                <a>
                  <AiOutlineShoppingCart className="transition duration-400 hover:color-purplish cursor-pointer text-2xl" />
                </a>
              </Link>
            </div>
            <div className="flex flex-row items-center relative cursor-pointer">
              <div className="badge bg-red-500 text-white flex flex-row items-center justify-center rounded-full">
                3
              </div>
              <MdOutlineShoppingBasket className="transition duration-400 hover:color-purplish cursor-pointer text-2xl" />
            </div>
            <div className="flex flex-row items-center justify-end ml-4 sm:hidden">
              <AiOutlineMenu
                className="text-3xl cursor-pointer"
                onClick={showMenuHandler}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="p-0 sm:p-2">
        <div className="md:max-w-screen-xl md:m-auto sm:flex flex-row items-center justify-between hidden relative">
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

        <div
          id="transition"
          className={
            showMenu
              ? "flex shadow flex-col px-4 absolute top-1/2 right-10  bg-white py-2 rounded-md"
              : "hidden"
          }
        >
          {links.map((link: ILink) => (
            <HomeLink link={link} key={link.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTopBar;
