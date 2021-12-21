import React, { PropsWithChildren, SyntheticEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";

import Product from "../interfaces/Product";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";

type ProductItemProps = {
  product: Product;
};

const ProductItem = (props: PropsWithChildren<ProductItemProps>) => {
  const { product } = props;
  const { id, image, name, price, quantity } = product;
  const renderBadge = () => {
    if (quantity) {
      return (
        <div className="featured-product-badge bg-green-600 absolute text-white flex flex-row items-center justify-center uppercase px-1 text-sm font-bold">
          <Link href={`/products?query=${encodeURI("in stock")}`}>
            <a>In Stock</a>
          </Link>
        </div>
      );
    }
    return (
      <div className="featured-product-badge bg-red-600 sold-out absolute text-white flex flex-row items-center justify-center uppercase px-1 text-sm font-bold">
        <Link href={`/products?query=${encodeURI("sold out")}`}>
          <a>Sold Out</a>
        </Link>
      </div>
    );
  };
  const renderContent = () => {
    if (quantity) {
      return (
        <>
          <h1 className="text-md capitalize mt-2">{name}</h1>
          <span className="text-gray-800 text-md font-bold py-2">${price}</span>
        </>
      );
    }
    return (
      <>
        <h1 className="text-gray-400 text-md capitalize strike-through mt-2">
          {name}
        </h1>
        <span className="text-gray-400 text-md strike-through py-2">
          ${price}
        </span>
      </>
    );
  };
  const clickHandler = () => {
    router.push(`/product/${id}`);
  };
  return (
    <div className="flex-1 min-w-320 sm:my-4 sm:mr-4 my-0 mr-0 product-item">
      <div className="bg-white rounded">
        <div className="featured-image relative">
          <Image src={image} width="300" height="200" className="rounded" />
          {renderBadge()}
        </div>
        <div className="px-2 pb-2">
          {renderContent()}
          <Button
            text="View Item"
            className="bg-orange-500 rounded-none hover:bg-orange-300"
            icon={<AiOutlineArrowRight className="text-white" />}
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
