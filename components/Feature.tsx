import React from "react";
import Icon from "./Icon";

type FeatureProps = {
  feature: {
    icon: string;
    description: string;
    title: string;
  };
};
const Feature = (props: FeatureProps) => {
  const {
    feature: { description, icon, title },
  } = props;
  return (
    <div className="flex-1 border-r-2 border-gray-200 p-4 text-center flex flex-col items-center feature min-w-320">
      <Icon icon={icon} />
      <h1 className="text-2xl my-2">{title}</h1>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Feature;
