import React from "react";

import Image from "next/image";

type TransactionWidgetProps = {
  trans: {
    amount: string | number;
    avatar: string;
    id: string;
    name: string;
    date: string;
    status: string;
  };
};
const TransactionWidget = ({
  trans: { amount, avatar, name, date, status },
}: TransactionWidgetProps) => {
  const statusColor = {
    text:
      status === "CANCELLED"
        ? "text-red-600"
        : status === "COMPLETE"
        ? "text-green-600"
        : "text-blue-600",
    bg:
      status === "CANCELLED"
        ? "bg-red-50"
        : status === "COMPLETE"
        ? "bg-green-50"
        : "bg-blue-50",
  };

  return (
    <div className="grid trans-widget py-1 mb-2">
      <div className="flex flex-row items-center col-start-1 col-end-2">
        <Image width="45" height="45" className="rounded-full" src={avatar} />
        <span className="capitalize ml-2">{name}</span>
      </div>
      <span className="col-start-2 col-end-3 flex flex-row items-center">
        {date}
      </span>
      <span className="col-start-3 col-end-4 flex flex-row items-center">
        {amount}
      </span>
      <span
        className={`py-2 px-2 ${statusColor.bg} ${statusColor.text} text-sm rounded-sm flex flex-row items-center justify-center col-start-4 col-end-5 h-fit w-3/4 font-bold`}
      >
        {status.toLocaleLowerCase()}
      </span>
    </div>
  );
};

export default TransactionWidget;
