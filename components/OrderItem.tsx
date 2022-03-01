import React from "react";

import {
  IoMdCheckmarkCircleOutline as Check,
  IoMdCloseCircleOutline as Close,
  IoIosRefreshCircle as Refresh,
} from "react-icons/io";

type OrderItemProps = {
  length: number;
  order: {
    id: string;
    orderId: string | number;
    date: string | Date;
    productName: string;
    productPrice: string | number;
    status: string;
  };
};
const OrderItem = ({
  length,
  order: { date, orderId, productName, productPrice, status },
}: OrderItemProps) => {
  const itemStatus = {
    icon:
      status === "CANCELLED" ? (
        <Close className="text-red-500" />
      ) : status === "DELIVERED" ? (
        <Check className="text-green-500" />
      ) : (
        <Refresh className="text-blue-500" />
      ),
    text:
      status === "CANCELLED"
        ? "text-red-500"
        : status === "DELIVERED"
        ? "text-green-500"
        : "text-blue-500",
  };

  return (
    <div className="py-4 px-4 grid grid-cols-5 bg-gray-100 border-b-[1px] border-gray-300 hover:bg-white transition-all hover:scale-[1.02] duration-300">
      <p className="col-start-1 col-end-2">#{orderId}</p>
      <p className="col-start-2 col-end-3">{date}</p>
      <p className="col-start-3 col-end-4">{productName}</p>
      <p className="col-start-4 col-end-5">{productPrice}</p>
      <p
        className={`col-start-5 col-end-6 flex flex-row items-center ${itemStatus.text}`}
      >
        {itemStatus.icon}{" "}
        <span className="ml-2 capitalize">{status.toLocaleLowerCase()}</span>
      </p>
    </div>
  );
};

export default OrderItem;
