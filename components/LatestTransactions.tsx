import React from "react";

import { TransactionWidget } from ".";
import { CgChevronDown as Dropdown } from "react-icons/cg";
import { generateId as uid, formatDate, formatCurrency } from "../helpers";

const transactions = [
  {
    amount: formatCurrency(2500),
    avatar: "/avatar2.png",
    id: uid(),
    name: "Anna Keller",
    date: formatDate(new Date()),
    status: "COMPLETE",
  },
  {
    amount: formatCurrency(2500),
    avatar: "/avatar2.png",
    id: uid(),
    name: "Keliz Chapman",
    date: formatDate(new Date()),
    status: "PENDING",
  },
  {
    amount: formatCurrency(2500),
    avatar: "/avatar2.png",
    id: uid(),
    name: "Tracy Chapman",
    date: formatDate(new Date()),
    status: "PENDING",
  },
  {
    amount: formatCurrency(2500),
    avatar: "/avatar2.png",
    id: uid(),
    name: "Anna Keller",
    date: formatDate(new Date()),
    status: "CANCELLED",
  },
  {
    amount: formatCurrency(2500),
    avatar: "/avatar2.png",
    id: uid(),
    name: "Keliz Chapman",
    date: formatDate(new Date()),
    status: "CANCELLED",
  },
  {
    amount: formatCurrency(2500),
    avatar: "/avatar2.png",
    id: uid(),
    name: "Tracy Chapman",
    date: formatDate(new Date()),
    status: "PENDING",
  },
];
const LatestTransactions = () => {
  return (
    <div className="min-w-[60%] ml-2 shadow rounded-md pt-2 px-3 bg-white flex flex-col justify-between">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl">Latest Transactions</h2>
        <div className="flex flex-row items-center mr-8 cursor-pointer border-[1px] border-gray-200 py-1 px-3 rounded-md">
          <span className="font-bold text-gray-400 mr-1">Recent</span>
          <Dropdown className="text-sm text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col my-4">
        <div className="grid trans-widget-header">
          <span className="font-bold">Customer</span>
          <span className="font-bold">Date</span>
          <span className="font-bold">Amount</span>
          <span className="font-bold">Status</span>
        </div>
        {transactions.map((trans) => (
          <TransactionWidget trans={trans} key={trans.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestTransactions;
