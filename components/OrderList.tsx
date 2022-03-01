import React from "react";

import {
  IoMdBookmark as BookMark,
  IoIosCalendar as Calendar,
  IoIosClipboard as Clipboard,
  IoIosCash as Cash,
  IoIosStats as Stats,
} from "react-icons/io";
import { OrderItem } from ".";
import { OrderListProps } from "../types";

const headers = [
  {
    icon: <BookMark className="text-md" />,
    className: "p-2 rounded-md text-purple-700 bg-purple-50",
    text: "Order ID",
  },
  {
    icon: <Calendar className="text-md" />,
    className: "p-2 rounded-md text-orange-700 bg-orange-50",
    text: "Order Date",
  },
  {
    icon: <Clipboard className="text-md" />,
    className: "p-2 rounded-md text-blue-700 bg-blue-50",
    text: "Product Name",
  },
  {
    icon: <Cash className="text-md" />,
    className: "p-2 rounded-md text-green-700 bg-green-50",
    text: "Product Price",
  },
  {
    icon: <Stats className="text-md" />,
    className: "p-2 rounded-md text-red-700 bg-red-50",
    text: "Status",
  },
];
const OrderList = ({ orders }: OrderListProps) => {
  return (
    <section>
      <div className={`grid grid-cols-5 px-4`}>
        {headers.map((header, index) => {
          const { className, icon, text } = header;
          return (
            <div
              className={`py-4 rounded-md flex flex-row items-center col-start-${
                index == 0 ? 1 : ++index
              } col-end-${index == 0 ? 2 : ++index}`}
              key={`${text}-${index}`}
            >
              <div className={className}>{icon}</div>
              <span className="font-bold text-sm ml-4">{text}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        {orders.map((order) => {
          return (
            <OrderItem key={order.id} order={order} length={orders.length} />
          );
        })}
      </div>
    </section>
  );
};

export default OrderList;
