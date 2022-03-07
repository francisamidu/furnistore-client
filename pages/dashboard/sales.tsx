import { NextComponentType } from "next";
import React from "react";
import { DashboardLayout } from "../../components";
import Image from "next/image";
import {
  IoCart as Cart,
  IoPieChart as Chart,
  IoCard as Card,
  IoArrowUp as ArrowUp,
  IoArrowDown as ArrowDown,
} from "react-icons/io5";
import { CgUserList as Users } from "react-icons/cg";

import {
  formatDate,
  generateId as uid,
  millify,
  generateRandomNumber as randomNumber,
} from "../../helpers";

const sales = [
  {
    id: uid(),
    isTrending: true,
    icon: <Cart className="text-2xl text-blue-500" />,
    amount: millify(22_045),
    percentile: 30,
    title: "Total Sales",
  },
  {
    id: uid(),
    isTrending: false,
    icon: <Chart className="text-2xl text-red-500" />,
    amount: millify(42_045),
    percentile: 20,
    title: "Total Expenses",
  },
  {
    id: uid(),
    isTrending: true,
    icon: <Users className="text-2xl text-orange-500" />,
    amount: millify(25_000),
    percentile: 12,
    title: "Total Visitors",
  },
  {
    id: uid(),
    isTrending: true,
    icon: <Card className="text-2xl text-purple-500" />,
    amount: millify(105_000),
    percentile: 18,
    title: "Total Revenue",
  },
];
const saleItems = [
  {
    image: "/121668.jpg",
    productName: "Bed Linen",
    customer: "Adrianne",
    date: formatDate(new Date(10, 5, 10)),
    productId: randomNumber(7),
    price: millify(100_000),
    status: "DELIVERED",
  },
  {
    image: "/154161.jpg",
    productName: "Wooden Table",
    customer: "John Mervin",
    date: formatDate(new Date(10, 5, 12)),
    productId: randomNumber(7),
    price: millify(10_000),
    status: "PENDING",
  },
  {
    image: "/189333.jpg",
    productName: "Living Room Set",
    customer: "Kevin Darth",
    date: formatDate(new Date(10, 5, 10)),
    productId: randomNumber(7),
    price: millify(250_000),
    status: "DELIVERED",
  },
  {
    image: "/280471.jpg",
    productName: "Notes Table",
    customer: "Aliyah Reynolds",
    date: formatDate(new Date(11, 5, 10)),
    productId: randomNumber(7),
    price: millify(75_000),
    status: "DELIVERED",
  },
  {
    image: "/1669799.jpg",
    productName: "Living Room Set",
    customer: "Adrianne",
    date: formatDate(new Date(10, 5, 22)),
    productId: randomNumber(7),
    price: millify(350_000),
    status: "PENDING",
  },
  {
    image: "/1866149.jpg",
    productName: "Leather Couch",
    customer: "John Mervin",
    date: formatDate(new Date(10, 5, 12)),
    productId: randomNumber(7),
    price: millify(67_000),
    status: "DELIVERED",
  },
  {
    image: "/2440471.jpg",
    productName: "Morden Couch",
    customer: "Kevin Darth",
    date: formatDate(new Date(10, 5, 10)),
    productId: randomNumber(7),
    price: millify(250_000),
    status: "DELIVERED",
  },
  {
    image: "/3797991.jpg",
    productName: "Interior Dec",
    customer: "Aliyah Reynolds",
    date: formatDate(new Date(11, 5, 10)),
    productId: randomNumber(7),
    price: millify(395_000),
    status: "PENDING",
  },
];
const headers = [
  "Image",
  "Product Name",
  "Customer",
  "Date",
  "Product ID",
  "Price",
  "Status",
];
const Sales = () => {
  return (
    <section className="dashboard-content bg-blue-50 p-5 min-h-screen h-full">
      <h1 className="font-bold text-2xl text-dark-blue">
        Welcome Back, <span className="font-normal">Neilah</span>
      </h1>
      <h2 className="mt-4 text-dark-blue">
        Check {"what's"} happening in your store update
      </h2>
      <div className="grid sales-cards mt-4">
        {sales.map((item) => (
          <div
            className="rounded-md bg-white shadow flex flex-col p-5"
            key={item.id}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="rounded-full border-[1.5px] border-gray-200 p-3">
                {item.icon}
              </div>
              {item.isTrending && (
                <div className="flex flex-row items-center text-green-600">
                  <span>+{item.percentile}%</span>
                  <ArrowUp className="text-inherit ml-1" />
                </div>
              )}
              {!item.isTrending && (
                <div className="flex flex-row items-center text-red-600">
                  <span>-{item.percentile}%</span>
                  <ArrowDown className="text-inherit ml-1" />
                </div>
              )}
            </div>
            <h2 className="font-bold text-1xl tex-dark-blue mt-2">
              {item.amount}
            </h2>
            <p className="text-[#777]">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded py-3 mt-4">
        <div className="flex flex-row items-center justify-between py-2 px-4">
          <h1 className="font-bold text-[1.2em]">Recent Sale Orders</h1>
          <span className="text-blue-500 cursor-pointer">See All</span>
        </div>
        <div className={`grid sales-order-headers bg-blue-50 py-2 px-4`}>
          {headers.map((header, index) => (
            <span
              className={`text-gray-400 uppercase text-xs font-bold col-start-${
                index === 0 ? 1 : ++index
              } col-end-${index === 0 ? 2 : ++index}`}
              key={index}
            >
              {header}
            </span>
          ))}
        </div>
        <div className="flex flex-col">
          {saleItems.map((item) => {
            const {
              date,
              productName,
              customer,
              productId,
              price,
              image,
              status,
            } = item;
            const statusColor = {
              text:
                status === "PENDING"
                  ? "text-red-600"
                  : status === "DELIVERED"
                  ? "text-green-600"
                  : "text-blue-600",
              bg:
                status === "PENDING"
                  ? "bg-red-50"
                  : status === "DELIVERED"
                  ? "bg-green-50"
                  : "bg-blue-50",
            };
            return (
              <div
                className="p-4 grid border-b-[1px] border-gray-100 bg-white sales-order-item"
                key={productId}
              >
                <div className="col-start-1 col-end-2">
                  <Image
                    src={image}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <p className="col-start-2 col-end-3">{productName}</p>
                <p className="col-start-3 col-end-4">{customer}</p>
                <p className="col-start-4 col-end-5">{date}</p>
                <p className="col-start-5 col-end-6">#{productId}</p>
                <p className="col-start-6 col-end-7">{price}</p>
                <p
                  className={`col-start-7 col-end-8 py-2 px-2 ${statusColor.bg} ${statusColor.text} text-sm text-center rounded-sm h-fit w-3/4 font-bold capitalize`}
                >
                  {status.toLocaleLowerCase()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Sales.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Sales;
