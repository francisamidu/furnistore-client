import React, { PropsWithChildren } from "react";

import { AppProps } from "next/app";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "./Button";
import { useAppSelector } from "../hooks/useSelector";

type TabWrapperProps = {
  onClick: (path: string) => void;
  tab: string;
};
const TabWrapper = (
  props: Partial<PropsWithChildren<AppProps>> & TabWrapperProps
) => {
  const { children, onClick, tab } = props;
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase my-4">
        Shopping Cart
      </h1>
      <div className="flex flex-row items-center justify-between md:max-w-screen-md m-auto">
        <Button
          text="Continue shopping"
          className="mt-4 cart-button-home hover:bg-transparent bg-transparent transition duration-200"
          onClick={() => onClick("/tag?page=cart")}
          icon={
            <AiOutlineArrowLeft className="text-black text-1xl order-first" />
          }
        />
        <div className="cart-tabs ml-8 border-b-2 border-b-gray-300 flex flex-row items-center">
          <p
            className={
              tab === "cart"
                ? "cart-tab relative mr-4 cursor-pointer py-2 active-tab"
                : "cart-tab relative mr-4 cursor-pointer py-2"
            }
            onClick={() => onClick("/tag?page=cart")}
          >
            Cart({cart.length})
          </p>
          <p
            className={
              tab === "wishlist"
                ? "cart-tab relative mr-4 cursor-pointer py-2 active-tab"
                : "cart-tab relative mr-4 cursor-pointer py-2"
            }
            onClick={() => onClick("/tag?page=wishlist")}
          >
            Wishlist(0)
          </p>
        </div>
      </div>
      {children}
    </>
  );
};

export default TabWrapper;
