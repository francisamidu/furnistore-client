import { NextComponentType } from "next";
import React from "react";
import { DashboardLayout } from ".";

type AnalyticsWidgetProps = {
  title: string;
  amount: string;
  percentile: number;
  className?: string;
};
const AnalyticsWidget = ({
  amount,
  className,
  percentile,
  title,
}: AnalyticsWidgetProps) => {
  return (
    <div
      className={`flex flex-1 flex-col mr-2 bg-white py-4 px-4 rounded-md shadow ${className}`}
    >
      <h1 className="text-1xl text-dark-blue mb-4">{title}</h1>
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-bold text-2xl text-dark-blue">{amount}</h2>
        <span className="font-bold">+{percentile}%</span>
      </div>
    </div>
  );
};
AnalyticsWidget.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default AnalyticsWidget;
