import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import { OrderListProps } from "../types";

import {
  formatCurrency,
  formatDate,
  generateId as uid,
  generateRandomNumber as random,
} from "../helpers";

const OrdersContext = createContext<OrderListProps["orders"] | any[]>([]);
const OrdersProvider = ({
  children,
}: PropsWithChildren<Partial<ReactNode>>) => {
  const [orders, setOrders] = useState<OrderListProps["orders"]>([
    {
      date: formatDate(new Date(), true),
      id: uid(),
      orderId: random(5),
      productName: "Decorative Box",
      productPrice: formatCurrency(1200),
      status: "PENDING",
    },
    {
      date: formatDate(new Date(), true),
      id: uid(),
      orderId: random(5),
      productName: "Plantation Box",
      productPrice: formatCurrency(2000),
      status: "DELIVERED",
    },
    {
      date: formatDate(new Date(), true),
      id: uid(),
      orderId: random(5),
      productName: "Visual Lace",
      productPrice: formatCurrency(21000),
      status: "DELIVERED",
    },
    {
      date: formatDate(new Date(), true),
      id: uid(),
      orderId: random(5),
      productName: "Visual Lace",
      productPrice: formatCurrency(2000),
      status: "CANCELLED",
    },
  ]);
  return (
    <OrdersContext.Provider value={orders}>{children}</OrdersContext.Provider>
  );
};
const useOrders = () => useContext(OrdersContext);
export { OrdersProvider, useOrders };
