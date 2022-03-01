import React from "react";

type ComingSoonProps = {
  heading: string;
};
const ComingSoon = ({ heading }: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">{heading}</h1>
      <h2 className="text-2xl mt-4">Content coming soon!!!</h2>
    </div>
  );
};

export default ComingSoon;
