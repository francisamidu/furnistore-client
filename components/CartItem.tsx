import React from "react";
import { formatCurrency } from "../helpers";

type CartItemProps = {
  productName: string;
  productQuantity: number;
  productPrice: number;
};
const CartItem = (props: CartItemProps) => {
  const { productName, productPrice, productQuantity } = props;
  return (
    <div className="py-2 mb-2 border-b-2 border-b-gray-200 cart-item flex flex-row items-center justify-between">
      <span className="font-bold text-md capitalize">{productName}</span>
      <p>
        <span className="mr-2">{productQuantity || 1} x </span>
        <span>{formatCurrency(productPrice)}</span>
      </p>
    </div>
  );
};

export default CartItem;
