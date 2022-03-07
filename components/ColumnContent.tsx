import React from "react";
import ColumnHeading from "./ColumnHeading";
import Image from "next/image";

type ColumnContentProps = {
  heading: string;
  description: string;
  icon: string;
};
const ColumnContent = (props: ColumnContentProps) => {
  const { description, heading, icon } = props;
  return (
    <div className="px-2">
      <ColumnHeading heading={heading} />
      <p className="text-gray-800 my-4">{description}</p>
      <a
        href="http://play.google.com/com.app.furnistore"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        <Image src={icon} width="200" height="70" alt="Icon" />
      </a>
    </div>
  );
};

export default ColumnContent;
