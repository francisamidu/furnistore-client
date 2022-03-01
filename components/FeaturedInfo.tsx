import React, { useState } from "react";
import FeaturedItem from "./FeaturedItem";

import { formatCurrency, generateId } from "../helpers";
import FeaturedInfo from "../interfaces/FeaturedInfo";

const FeatureInfo = () => {
  const [items, setItems] = useState<FeaturedInfo[]>([
    {
      id: generateId(),
      title: "Revenue",
      amount: formatCurrency(2500),
      percentile: 11.4,
      trending: true,
    },
    {
      id: generateId(),
      title: "Sales",
      amount: formatCurrency(400),
      percentile: 11.4,
      trending: false,
    },
    {
      id: generateId(),
      title: "Users",
      amount: 800,
      percentile: 8.2,
      trending: true,
    },
    {
      id: generateId(),
      title: "Feedback",
      amount: 120,
      percentile: 1.5,
      trending: false,
    },
  ]);
  return (
    <div className={`grid grid-cols-${items.length - 1} max-w-full`}>
      {items.map((item: any, index: number) => (
        <FeaturedItem
          item={item}
          key={item.id}
          className={`col-start-${index} col-end-${++index}`}
        />
      ))}
    </div>
  );
};

export default FeatureInfo;
