import React, { useState } from "react";
import { generateId } from "../helpers";
import Feature from "./Feature";

const Features = () => {
  const [features, setFeatures] = useState([
    {
      id: generateId(),
      title: "Affordable Prices",
      icon: "Value",
      description:
        "With the best prices in wide range of products you just can't go wrong with Furnistore.",
    },
    {
      id: generateId(),
      title: "Internation Delivery",
      icon: "Delivery",
      description:
        "Are you in Europe,North America or Africa? We'll deliver your products very fast wherever you're.",
    },
    {
      id: generateId(),
      title: "Safe Transactions",
      icon: "Safety",
      description:
        "The safety of your money is our top priority, that's why we work tirelessly to keep your transactions secure.",
    },
    {
      id: generateId(),
      title: "24 hour Support",
      icon: "Support",
      description:
        "With 24/7 assistance from our staff you will have the best online shopping experience.",
    },
    {
      id: generateId(),
      title: "High Ratings",
      icon: "Reviews",
      description:
        "With 5 star ratings from our valued customers know you're in good hands if you shop with us.",
    },
  ]);
  return (
    <section className="py-8 px-4 bg-white">
      <div className="flex flex-row justfiy-center feature flex-wrap items-center py-4">
        {features.map((feature: any) => (
          <Feature feature={feature} key={feature.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
