import React, { ChangeEventHandler } from "react";
import { BiChevronDown } from "react-icons/bi";

type CustomSelectProps = {
  items: any[];
  text: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};
const CustomSelect = (props: CustomSelectProps) => {
  const { items, text, onChange } = props;
  return (
    <div className="custom-selector flex flex-row items-center relative text-md">
      <span className="font-bold w-1/2">{text}</span>
      <select
        className="bg-white rounded cursor-pointer uppercase"
        onChange={onChange}
      >
        {items.map((size: any, index: number) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
      <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
    </div>
  );
};

export default CustomSelect;
