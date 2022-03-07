import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import router from "next/router";
import Link from "next/link";

import { AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import type { CartItem, Product as IProduct } from "../interfaces";
import { extractColors, extractSizes, formatCurrency } from "../helpers";
import { ProductProps } from "../types";
import { useAppDispatch } from "../hooks/useDispatch";
import { addProductToCart } from "../app/cart.slice";
import { Quantity, Button } from ".";

const Product = (props: ProductProps) => {
  //Local state
  const {
    product: { categories, description, image, name, price, quantity },
    product: tempProduct,
  } = props;
  const sizes = extractSizes([tempProduct]);
  const colors = extractColors([tempProduct]);
  const [product, setProduct] = useState<IProduct>({
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
  const [cartProduct, setCartProduct] = useState<CartItem>({
    categories: [""],
    color: "",
    description: "",
    id: "",
    image: "",
    name: "",
    price: 0,
    quantity: 0,
    size: "",
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

  // For dispatching actions to the store
  const dispatch = useAppDispatch();

  //Add to cart button click handler
  const addToCart = () => {
    dispatch(
      addProductToCart({
        ...cartProduct,
        id: product.id,
        color: cartProduct.color || product.colors[0],
        size: cartProduct.size || product.sizes[0],
      })
    );
    setCartProductAndProduct();
  };

  const setCartProductAndProduct = () => {
    setProduct({
      ...props.product,
      quantity: 0,
    });
    setCartProduct({
      categories: props.product.categories,
      color: "",
      description: props.product.description,
      id: props.product.id,
      image: props.product.image,
      name: props.product.name,
      price: props.product.price,
      quantity: 0,
      size: "",
    });
  };

  useEffect(() => {
    setCartProductAndProduct();
  }, [props.product, setCartProductAndProduct]);

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
    setCartProduct({
      ...cartProduct,
      quantity: itemQuantity ? itemQuantity + 1 : 1,
    });
  };

  const removeFromQuantity = () => {
    const quantity: any = product.quantity;
    setProduct({
      ...product,
      quantity: quantity ? quantity - 1 : 0,
    });
    setCartProduct({
      ...cartProduct,
      quantity: quantity ? quantity - 1 : 0,
    });
  };

  const setValue = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { name, value },
    } = event;
    setCartProduct({
      ...cartProduct,
      [name]: value,
    });
  };
  useEffect(() => {
    setTotalPriceState();
  }, [product.quantity, setTotalPriceState]);

  return (
    <section className="py-4 grid grid-cols-2 sm:max-w-screen-lg sm:m-auto">
      <AiOutlineArrowLeft
        className="text-gray-800 text-2xl col-start-1 col-end-2 mb-4 cursor-pointer"
        onClick={goHome}
      />
      <div className="col-start-1 col-end-2 mr-4">
        <Image
          src={image}
          width="500"
          height="500"
          alt="Product Illustration"
          className="rounded"
        />
      </div>
      <div className="col-start-2 col-end-3 px-4">
        <div className="mb-4 flex flex-row items-center">
          {categories.map((category: string) => (
            <Link
              href={encodeURI(`/products?category=${category}`)}
              key={category}
            >
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
                {formatCurrency(price)}
              </p>
            </div>
            <div>
              <h2 className="text-1xl font-bold text-center">Quantity</h2>
              <Quantity
                addToQuantity={addToQuantity}
                productQuantity={product.quantity}
                quantity={quantity}
                removeFromQuantity={removeFromQuantity}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="custom-selector flex flex-row items-center relative text-md mr-2">
              <select
                className="bg-white rounded w-full cursor-pointer uppercase"
                name="size"
                onChange={setValue}
              >
                <option value="" className="font-bold">
                  Choose size
                </option>
                {sizes.map((size: string, index: number) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
            </div>
            <div className="custom-selector flex flex-row items-center relative text-md ml-2">
              <select
                className="bg-white rounded w-full cursor-pointer uppercase"
                name="color"
                onChange={setValue}
              >
                <option value="" className="font-bold">
                  Choose Color
                </option>
                {colors.map((color: string, index: number) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
            </div>
          </div>
          <div className="my-4">
            <h3 className="border-b-2 border-gray-200 text-1xl font-bold py-2">
              Details
            </h3>
            <p className="text-gray-500 py-4">{description}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="mr-2">
              <p className="text-1xl font-bold">Total Price</p>
              <p className="font-bold text-1xl text-green-500">
                {getTotalPrice()}
              </p>
            </div>
            <Button
              text="Add to Cart"
              className="cart-button"
              onClick={() => addToCart()}
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
