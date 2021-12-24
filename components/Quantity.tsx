import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type QuantityProps = {
  quantity: number;
  productQuantity: number;
  addToQuantity: () => void;
  removeFromQuantity: () => void;
};
const Quantity = (props: QuantityProps) => {
  const { addToQuantity, productQuantity, quantity, removeFromQuantity } =
    props;
  return (
    <div className="quantity flex flex-row items-center justify-center">
      <AiOutlineMinus
        className={
          quantity > 0
            ? "cursor-pointer text-black"
            : "cursor-pointer text-gray-400"
        }
        onClick={() => removeFromQuantity()}
      />
      <span className="font-bold mx-4">{productQuantity}</span>
      <AiOutlinePlus
        className={
          quantity === productQuantity
            ? "disabled cursor-pointer text-gray-400"
            : "cursor-pointer text-black"
        }
        onClick={() => addToQuantity()}
      />
    </div>
  );
};

export default Quantity;
