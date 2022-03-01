import React from "react";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ChartProps = {
  data: any[];
  xDataKey: string;
  yDataKey: string;
  grid: boolean;
  title: string;
};
const Chart = ({ data, xDataKey, yDataKey, grid, title }: ChartProps) => {
  return (
    <section className="mt-4 shadow-md py-4 px-4 rounded-md bg-white w-full">
      <h3 className="font-bold">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={xDataKey} stroke="#423d9c" />
          <Line
            type="natural"
            data={data}
            dataKey={yDataKey}
            legendType="rect"
            stroke="#423d9c"
          />
          <YAxis dataKey={yDataKey} stroke="#423d9c" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#423d9cb7" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;
