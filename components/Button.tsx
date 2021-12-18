import React, { MouseEventHandler, ReactElement } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: Partial<ReactElement>;
};

const Button = ({ text, onClick, icon }: ButtonProps) => {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  return (
    <button
      className="w-max h-12 px-6 mt-4 rounded-md text-white bg-purplish flex flex-row items-center justify-between hover:bg-purplish-var transition duration-500"
      onClick={handleClick}
    >
      <span className="mr-4">{text}</span>
      {icon}
    </button>
  );
};

export default Button;
