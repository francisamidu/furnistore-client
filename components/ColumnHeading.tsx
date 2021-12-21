import React from "react";

type ColumnHeadingProps = {
  heading: string;
};
const ColumnHeading = (props: ColumnHeadingProps) => {
  const { heading } = props;
  return heading ? (
    <h1 className="text-md font-bold uppercase text-gray-400 mb-8">
      {heading}
    </h1>
  ) : null;
};

export default ColumnHeading;
