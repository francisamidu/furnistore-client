import React from "react";

import Image from "next/image";
import { IoMdEye } from "react-icons/io";

type UserWidgetProps = {
  user: {
    avatar: string;
    id: string;
    name: string;
    role: string;
  };
};
const UserWidget = ({ user: { avatar, name, role } }: UserWidgetProps) => {
  return (
    <div className="grid user-widget mb-2 place-content-center">
      <div className="col-start-1 col-end-2">
        <Image
          width="45"
          height="45"
          alt="Avatar Illustration"
          className="rounded-full"
          src={avatar}
        />
      </div>
      <p className="flex flex-col col-start-2 col-end-3">
        <span className="font-bold">{name}</span>
        <span>{role}</span>
      </p>
      <p className="bg-gray-100 rounded-md h-fit px-3 py-1 flex flex-row items-center justify-center cursor-pointer col-start-3 col-end-4">
        <IoMdEye className="mr-2" />
        <span className="font-bold">Show</span>
      </p>
    </div>
  );
};

export default UserWidget;
