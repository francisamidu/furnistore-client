import React, { useEffect, useState } from "react";

import Image from "next/image";
import Quantity from "./Quantity";

import CartProductProps from "../types/CartProductProps";
import { Product } from "../interfaces";
import { formatCurrency } from "../helpers";

const CartProduct = (props: CartProductProps) => {
  const {
    product: { name, id, image, color = "yellow", size = "M", quantity, price },
  } = props;
  const [product, setProduct] = useState<Product>({
    id: "",
    isDeleted: false,
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

  useEffect(() => {
    setProduct({
      ...props.product,
      description: "",
      colors: [""],
      categories: [""],
      sizes: [""],
      isDeleted: false,
    });
  }, [props.product]);

  const getTotalPrice = () => {
    const number = totalPrice || 0;
    return formatCurrency(number);
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
    <div className="cart-product grid py-2 border-gray-200 ">
      <div className="relative">
        <Image src={image} layout="fill" className="col-start-1 col-end-2" />
      </div>
      <div className="content col-start-2 col-end-3 p-2 pl-4">
        <p>
          <span className="font-bold mr-2">Product Name</span>
          <span className="capitalize">: {name}</span>
        </p>
        <p>
          <span className="font-bold mr-2">Product ID</span>
          <span>: {id}</span>
        </p>
        <p>
          <span className="font-bold mr-2">Product Size</span>
          <span className="capitalize">: {size}</span>
        </p>
        <p>
          <span className="font-bold mr-2">Product Color</span>
          <span className="capitalize">: {color}</span>
        </p>
      </div>
      <div className="details col-start-3 col-end-4 flex flex-col items-end">
        <Quantity
          quantity={quantity || 1}
          productQuantity={product.quantity || 1}
          addToQuantity={addToQuantity}
          removeFromQuantity={removeFromQuantity}
        />
        <span className="font-bold text-1xl mt-4">
          {formatCurrency(product.price)}
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
