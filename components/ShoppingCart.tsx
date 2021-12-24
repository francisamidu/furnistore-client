import router from "next/router";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import CartItem from "./CartItem";
import CartProduct from "./CartProduct";
import NotFound from "./NotFound";
import { AiOutlineArrowRight } from "react-icons/ai";

import { formatCurrency, formatDateAndTime } from "../helpers";
import { useAppSelector } from "../hooks/useSelector";
import { CartProduct as CartProductType } from "../interfaces";

const ShoppingCart = () => {
  const products: any[] = useAppSelector((state) => state.cart);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotalState] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [vat, setVat] = useState(0);
  const [tax, setTax] = useState(20);

  const setTotal = () => {
    const total = products
      .map((product: any) => product.price * product.quantity)
      .reduce(
        (previousValue: number, currentValue: number) =>
          previousValue + currentValue,
        0
      );
    setSubTotal(total);
    setTax(((total > 10000 ? 0.0525 : 0.5) * total) / products.length);
    setShippingPrice(subTotal > 10000 ? 0 : 10);
    if (shippingPrice) {
      setTotalState(total + tax + shippingPrice);
    } else {
      setTotalState(total + tax);
    }
  };
  useEffect(() => {
    setTotal();
  }, [products]);

  useEffect(() => {
    setVat(total > 10000 ? 0.5 : 20);
  }, [total]);
  return (
    <section className="py-4 grid shopping-cart md:max-w-screen-xl m-auto">
      {products?.length < 1 ? (
        <section className="col-start-1 col-end-3">
          <NotFound
            text="Your cart is empty. Head over to the products page and add some to cart to view them here"
            onClick={() => router.push("/products")}
          />
        </section>
      ) : (
        <>
          <div className="col-start-1 col-end-1 sm:col-start-1 sm:col-end-2 product-column px-2 md:px-0">
            <h1 className="text-2xl font-bold">My products</h1>
            <div className="flex flex-col mt-4">
              {products?.map((product: CartProductType) => (
                <CartProduct product={product} key={product.id} />
              ))}
            </div>
          </div>
          <div className="col-start-1 col-end-1 sm:col-start-2 sm:col-end-3 px-2 md:px-0">
            <h2 className="text-2xl font-bold text-center">Your Order</h2>
            <div className="flex flex-row items-center justify-center mt-4">
              <p className="font-bold">
                Status: <span className="font-normal ml-2">Pending</span>
              </p>
              <p className="font-bold ml-4">
                Date:{" "}
                <span className="font-normal ml-2">
                  {formatDateAndTime(new Date())}
                </span>
              </p>
            </div>
            <div className="py-4">
              <h3 className="text-1xl font-bold capitalize my-4 py-2 px-4 bg-gray-200 rounded-md">
                Order Summary
              </h3>
              <div className="flex flex-col px-4">
                {products?.map((product: any) => (
                  <CartItem
                    productName={product.name}
                    productPrice={product.price}
                    productQuantity={product.quantity}
                    key={product.id}
                  />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-1xl font-bold capitalize my-4 py-2 px-4 bg-gray-200 rounded-md">
                Order costs
              </h3>
              <div className="px-4">
                <p className="py-2 mb-2 flex flex-row item-center justify-between border-b-2 border-b-gray-200">
                  <span>Subtotal</span>
                  <span className="font-bold">{formatCurrency(subTotal)}</span>
                </p>
                <p className="py-2 mb-2 flex flex-row item-center border-b-2 border-b-gray-200 justify-between">
                  <span>Shipping</span>
                  <span className="font-bold">
                    {shippingPrice ? formatCurrency(shippingPrice) : "Free"}
                  </span>
                </p>
                <p className="py-2 mb-2 flex flex-row item-center justify-between">
                  <span>VAT({vat}%)</span>
                  <span className="font-bold">{formatCurrency(tax)}</span>
                </p>
              </div>
              <p className="py-2 px-4 flex flex-row item-center justify-between font-bold bg-gray-200 rounded-md">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </p>
              <div className="flex flex-row items-center justify-center">
                <Button
                  text={`Pay ${formatCurrency(total)}`}
                  className="mt-4"
                  onClick={() => {}}
                  icon={<AiOutlineArrowRight className="text-white" />}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCart;
