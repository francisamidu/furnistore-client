import { NextComponentType } from "next";
import React from "react";
import { AnalyticsWidget, Chart, DashboardLayout } from "../../components";
import { CgChevronDown as Dropdown } from "react-icons/cg";
import { AiOutlineDownload as Download } from "react-icons/ai";

import {
  generateId as uid,
  formatNumber,
  millify,
  formatCurrency,
} from "../../helpers";
import { useOrders } from "../../contexts";

const analytics = [
  {
    id: uid(),
    amount: formatNumber(2278),
    className: "bg-orange-50 text-orange-600",
    percentile: 3,
    title: "New Customers",
  },
  {
    id: uid(),
    amount: formatNumber(1135),
    className: "bg-blue-50 text-blue-600",
    percentile: 14,
    title: "New Orders",
  },
  {
    id: uid(),
    amount: formatCurrency(1250),
    className: "bg-green-50 text-green-600",
    percentile: 3.27,
    title: "Average Sale",
  },
  {
    id: uid(),
    amount: formatCurrency(12500),
    className: "bg-red-50 text-red-600",
    percentile: 17,
    title: "Gross Profit",
  },
];
const revenue = [
  {
    id: uid(),
    month: "Jan",
    total: millify(1000),
  },
  {
    id: uid(),
    month: "Feb",
    total: millify(2000),
  },
  {
    id: uid(),
    month: "March",
    total: millify(30000),
  },
  {
    id: uid(),
    month: "April",
    total: millify(600000),
  },
  {
    id: uid(),
    month: "May",
    total: millify(3200000),
  },
  {
    id: uid(),
    month: "June",
    total: millify(6500000),
  },
  {
    id: uid(),
    month: "July",
    total: millify(1502000),
  },
  {
    id: uid(),
    month: "Aug",
    total: millify(2040500),
  },
  {
    id: uid(),
    month: "Sept",
    total: millify(3230000),
  },
  {
    id: uid(),
    month: "Oct",
    total: millify(3500000),
  },
  {
    id: uid(),
    month: "Nov",
    total: millify(3200000),
  },
  {
    id: uid(),
    month: "Dec",
    total: millify(6500000),
  },
];
const headers = ["Date", "Product Name", "Amount", "Status", "Invoice"];
const Analytics = () => {
  const orders = useOrders();
  return (
    <section className="dashboard-content py-4 px-6 bg-white">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold text-3xl mb-4">Analytics</h1>
        <div className="flex flex-row items-center mr-1 cursor-pointer border-[1px] border-gray-200 py-1 px-3 rounded-md">
          <span className="text-gray-400 mr-1">This Week</span>
          <Dropdown className="text-sm text-gray-400" />
        </div>
      </div>
      <div className="flex flex-row items-center">
        {analytics.map((analytic) => (
          <AnalyticsWidget
            amount={analytic.amount}
            percentile={analytic.percentile}
            title={analytic.title}
            className={analytic.className}
            key={analytic.id}
          />
        ))}
      </div>
      <Chart
        data={revenue}
        xDataKey="month"
        yDataKey="total"
        title="Revenue"
        grid
      />
      <div className="py-2 px-4">
        <div className="flex flex-row items-center justify-between my-3">
          <h1 className="font-bold text-2xl mb-4">Analytics</h1>
          <span className="font-bold cursor-pointer">View All Orders</span>
        </div>
        <div className={`grid analytic-order-headers`}>
          {headers.map((header, index) => (
            <span
              className={`text-gray-400 col-start-${
                index === 0 ? 1 : ++index
              } col-end-${index === 0 ? 2 : ++index}`}
              key={index}
            >
              {header}
            </span>
          ))}
        </div>
        <div className="flex flex-col">
          {orders.map((order, index) => {
            const { orderId, date, productName, productPrice, status } = order;
            const statusColor = {
              text:
                status === "CANCELLED"
                  ? "text-red-600"
                  : status === "DELIVERED"
                  ? "text-green-600"
                  : "text-blue-600",
              bg:
                status === "CANCELLED"
                  ? "bg-red-50"
                  : status === "DELIVERED"
                  ? "bg-green-50"
                  : "bg-blue-50",
            };
            return (
              <div
                key={orderId}
                className="py-4 grid border-b-[1px] border-gray-300 bg-white analytic-order-item"
              >
                <p className="col-start-1 col-end-2">{date}</p>
                <p className="col-start-2 col-end-3">{productName}</p>
                <p className="col-start-3 col-end-4">{productPrice}</p>
                <p
                  className={`col-start-4 col-end-5 py-2 px-2 ${statusColor.bg} ${statusColor.text} text-sm rounded-sm flex flex-row items-center justify-center h-fit w-3/4 font-bold capitalize`}
                >
                  {status.toLocaleLowerCase()}
                </p>
                <p className="col-start-5 col-end-6 pl-4">
                  <Download className="text-gray-500 cursor-pointer text-2xl" />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Analytics.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Analytics;
