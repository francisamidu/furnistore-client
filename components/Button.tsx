import React, { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: Partial<ReactElement>;
  className?: string;
};

const Button = ({ text, onClick, icon, className }: ButtonProps) => {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  const getClasses = () => {
    if (className) {
      return `w-max h-12 px-6 mt-4 rounded-md text-white bg-purplish flex flex-row items-center justify-between cursor-pointer hover:bg-purplish-var transition duration-500 ${className}`;
    }
    return "w-max h-12 px-6 mt-4 rounded-md text-white bg-purplish flex flex-row items-center justify-between cursor-pointer hover:bg-purplish-var transition duration-500";
  };
  return (
    <button className={getClasses()} onClick={handleClick}>
      <span className={`${icon && "mr-4"}`}>{text}</span>
      {icon}
    </button>
  );
};

export default Button;
