import React, { useState } from "react";
import FeaturedItem from "./FeaturedItem";

import generateId from "../helpers/generateId";
import FeaturedInfo from "../interfaces/FeaturedInfo";

const FeatureInfo = () => {
  const [items, setItems] = useState<Array<FeaturedInfo>>([
    {
      id: generateId(),
      title: "Revenue",
      number: 2500,
      percentile: 11.4,
      trending: true,
    },
    {
      id: generateId(),
      title: "Sales",
      number: 400,
      percentile: 11.4,
      trending: false,
    },
    {
      id: generateId(),
      title: "Users",
      number: 800,
      percentile: 8.2,
      trending: true,
    },
    {
      id: generateId(),
      title: "Feedback",
      number: 120,
      percentile: 1.5,
      trending: false,
    },
  ]);
  return (
    <div className="flex flex-row p-4 justify-between items-center">
      {items.map((item: any) => (
        <FeaturedItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeatureInfo;
