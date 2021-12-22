import React, { MouseEventHandler } from "react";
import { AiFillHome } from "react-icons/ai";
import Button from "./Button";

type NotFoundProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const NotFound = ({ text, onClick }: NotFoundProps) => {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  return (
    <div className="flex flex-col justify-center items-center py-4 my-4 item-not-found">
      <h1 className="text-2xl text-center">{text}</h1>
      <Button
        text="Go Home"
        className="mt-4"
        onClick={handleClick}
        icon={<AiFillHome className="text-white text-1xl" />}
      />
    </div>
  );
};

export default NotFound;
