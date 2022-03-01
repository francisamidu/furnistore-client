import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { NextComponentType } from "next";
import { DashboardLayout, OrderList } from "../../components";
import { IoIosCalendar as Calendar } from "react-icons/io";
import {
  formatDate,
  generateId as uid,
  generateRandomNumber as random,
} from "../../helpers";
import { useOrders } from "../../contexts";

type TabType = {
  active: boolean;
  text: string;
};
type OrderTabType = {
  id: string;
  active: boolean;
  text: string;
  tab: string;
};
const orderHeaders = [
  {
    id: uid(),
    orderId: random(6),
  },
];

const Orders = () => {
  const date = new Date();
  const orderList = useOrders();
  const [tabs, setTabs] = useState([
    {
      active: true,
      text: "Daily",
    },
    {
      active: false,
      text: "Monthly",
    },
  ]);
  const [orders, setOrders] = useState([
    { id: uid(), name: "All Orders", amount: 145, percentile: 20 },
    { id: uid(), name: "Pending Orders", amount: 123, percentile: 11 },
    { id: uid(), name: "Delivered Orders", amount: 150, percentile: 18 },
  ]);
  const [orderTabs, setOrderTabs] = useState([
    {
      id: uid(),
      active: true,
      text: "All Orders",
      tab: "all_orders",
    },
    {
      id: uid(),
      active: false,
      text: "Pending Orders",
      tab: "pending_orders",
    },
    {
      id: uid(),
      active: false,
      text: "Delivered Orders",
      tab: "delivered_orders",
    },
    {
      id: uid(),
      active: false,
      text: "Cancelled Orders",
      tab: "cancelled_orders",
    },
  ]);
  const handleClick = (
    event: MouseEvent<HTMLSpanElement>,
    tabs: any[],
    setTabs:
      | Dispatch<SetStateAction<TabType[]>>
      | Dispatch<React.SetStateAction<OrderTabType[]>>
  ) => {
    const target: any = event.target;
    const {
      dataset: { name },
    } = target;
    setTabs(
      tabs.map((tab) => {
        if (tab.text === name) {
          return {
            ...tab,
            active: true,
          };
        }
        return {
          ...tab,
          active: false,
        };
      })
    );
  };
  return (
    <section className="dashboard-content bg-white py-4 px-4">
      <div className="flex flex-row items-center">
        <Calendar className="text-purplish mr-3" />
        <span className="font-bold text-1xl">{formatDate(date)}</span>
      </div>
      <div className="flex flex-row items-center my-4">
        <h1 className="text-2xl font-bold mr-6">Orders</h1>
        <div className="bg-gray-100 py-1 px-1 rounded flex flex-row items-center">
          {tabs.map((tab, index) => (
            <span
              className={`py-[.30rem] px-2 ${
                tab.active && "bg-white"
              } text-center cursor-pointer ${
                index == 0 ? "mr-1" : "ml-1"
              } transition-colors duration-300 rounded text-sm font-bold`}
              key={index}
              onClick={(event) => handleClick(event, tabs, setTabs)}
              data-name={tab.text}
            >
              {tab.text}
            </span>
          ))}
        </div>
      </div>
      <div className={`grid grid-cols-${orders.length} max-w-full`}>
        {orders.map((order, index) => {
          const { amount, name, percentile } = order;
          const statusColor = {
            text:
              name === "Pending Orders"
                ? "text-purple-600"
                : name === "Delivered Orders"
                ? "text-orange-600"
                : "text-blue-600",
            bg:
              name === "Pending Orders"
                ? "bg-purple-100"
                : name === "Delivered Orders"
                ? "bg-orange-100"
                : "bg-blue-100",
          };
          return (
            <div
              className={`flex flex-1 flex-col mr-2 ${
                statusColor.bg
              } py-4 px-4 rounded-md shadow col-start-${
                index == 0 ? 1 : ++index
              } col-end-${index == 0 ? 2 : ++index}`}
            >
              <h1 className="font-bold text-[1.3em] mb-4">{name}</h1>
              <div className="flex flex-row items-center">
                <span
                  className={`font-bold ${statusColor.text} text-[1.1em] impression relative`}
                >
                  {amount}
                </span>
                <div className={`ml-4 font-bold ${statusColor.text}`}>|</div>
                <span className="ml-4">Impression - {percentile}%</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-tabs mt-6">
        <div className="flex flex-row items-center justify-center min-w-[50%] border-b-[1px] border-b-gray-100">
          {orderTabs.map((order) => (
            <span
              className={`py-2 relative order-tab ${
                order.active ? "active" : ""
              } cursor-pointer transition-colors duration-300 font-bold mr-20`}
              key={order.id}
              data-name={order.text}
              onClick={(event) => handleClick(event, orderTabs, setOrderTabs)}
            >
              {order.text}
            </span>
          ))}
        </div>
      </div>
      <OrderList orders={orderList} />
    </section>
  );
};

Orders.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Orders;
