import React, { useState, useEffect } from "react";
import Image from "next/image";
import router from "next/router";
import {
  AiOutlineDown,
  AiOutlineArrowLeft,
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

import type { ProductRequest as IProduct } from "../interfaces";
import Button from "./Button";
import Link from "next/link";

import Numeral from "../helpers/formatCurrency";

type ProductProps = {
  product: IProduct;
};
const Product = (props: ProductProps) => {
  const {
    product: { categories, description, image, name, price, quantity, sizes },
  } = props;
  const [product, setProduct] = useState<IProduct>({
    categories: [""],
    colors: [""],
    description: "",
    image: "",
    name: "",
    price: 0,
    quantity: 0,
    sizes: [""],
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const setTotalPriceState = () => {
    const quantity: any = product.quantity;
    if (quantity) {
      setTotalPrice(quantity * price);
      return;
    }
    setTotalPrice(0);
  };
  const goHome = () => router.push("/");

  useEffect(() => {
    setProduct({
      ...props.product,
      quantity: 0,
    });
  }, [props.product]);

  const getTotalPrice = () => {
    const number = totalPrice || 0;
    return Numeral.formatCurrency(number);
  };

  const addToQuantity = () => {
    if (quantity == product.quantity) {
      return;
    }
    let itemQuantity: any = product.quantity;
    setProduct({
      ...product,
      quantity: itemQuantity ? itemQuantity + 1 : 1,
    });
  };

  const removeFromQuantity = () => {
    const quantity: any = product.quantity;
    setProduct({
      ...product,
      quantity: quantity ? quantity - 1 : 0,
    });
  };
  useEffect(() => {
    setTotalPriceState();
  }, [product.quantity]);

  return (
    <section className="py-4 grid grid-cols-2 sm:max-w-screen-lg sm:m-auto">
      <AiOutlineArrowLeft
        className="text-gray-800 text-2xl col-start-1 col-end-2 mb-4 cursor-pointer"
        onClick={goHome}
      />
      <div className="col-start-1 col-end-2 mr-4">
        <Image src={image} width="500" height="500" className="rounded" />
      </div>
      <div className="col-start-2 col-end-3 px-4">
        <div className="mb-4 flex flex-row items-center">
          {categories.map((category: string) => (
            <Link href={encodeURI(`/products?q=${categories}`)} key={category}>
              <a className="bg-green-500 text-white text-xs uppercase mr-4 py-1 px-2 rounded font-bold">
                {category}
              </a>
            </Link>
          ))}
        </div>
        <h1 className="text-3xl">{name}</h1>
        <div className="flex flex-col mt-4">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h2 className="text-1xl font-bold">Price</h2>
              <p className="text-green-500 uppercase font-bold">
                {Numeral.formatCurrency(price)}
              </p>
            </div>
            <div>
              <h2 className="text-1xl font-bold text-center">Quantity</h2>
              <div className="quantity flex flex-row items-center justify-center">
                <AiOutlineMinus
                  className={
                    quantity > 0
                      ? "cursor-pointer text-black"
                      : "cursor-pointer text-gray-400"
                  }
                  onClick={() => removeFromQuantity()}
                />
                <span className="font-bold mx-4">{product.quantity}</span>
                <AiOutlinePlus
                  className={
                    quantity === product.quantity
                      ? "disabled cursor-pointer text-gray-400"
                      : "cursor-pointer text-black"
                  }
                  onClick={() => addToQuantity()}
                />
              </div>
            </div>
            <div className="custom-selector flex flex-row items-center relative text-md">
              <span className="font-bold w-1/2">Choose size</span>
              <select className="bg-white rounded w-1/2 cursor-pointer uppercase">
                {sizes.map((size: string, index: number) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
            </div>
          </div>
          <div className="my-4">
            <h3 className="border-b-2 border-gray-200 text-1xl font-bold font-bold py-2">
              Details
            </h3>
            <p className="text-gray-500 py-4">{description}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="mr-2">
              <p className="font-bold text-1xl font-bold">Total Price</p>
              <p className="font-bold text-1xl text-green-500">
                {getTotalPrice()}
              </p>
            </div>
            <Button
              text="Add to Cart"
              className="cart-button"
              icon={<AiOutlineShoppingCart className="text-gray-500" />}
            />
            <Button
              text="Checkout"
              icon={<AiOutlineShoppingCart className="text-white" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
