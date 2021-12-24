import React from "react";
import { AiFillHome } from "react-icons/ai";
import Button from "../components/Button";

import { AppProps } from "next/app";
import Image from "next/image";
import router from "next/router";

type CustomErrorPageProps = {
  heading: string;
  text: string;
};
const CustomErrorPage = (props: Partial<AppProps> & CustomErrorPageProps) => {
  const { heading, text } = props;
  const handleClick = () => router.push("/");
  return (
    <div className="grid sm:relative sm:grid-cols-2 grid-cols-1 m-auto md:max-w-screen-lg max-w-sm">
      <div className="relative error-image sm:col-start-1 sm:col-end-2 col-span-1">
        <Image
          src={"/usability-testing-concept-illustration_114360-1571.jpg"}
          width="500"
          height="500"
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-center items-center sm:items-start sm:py-4 sm:my-4 item-not-found sm:min-h-70 sm:col-start-2 sm:col-end-3 col-span-1 text-center sm:text-left">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <h2 className="text-2xl mt-2 mb-8">{text}</h2>
        <Button
          text="Go Home"
          className="mt-4"
          onClick={handleClick}
          icon={<AiFillHome className="text-white text-1xl" />}
        />
      </div>
    </div>
  );
};

export default CustomErrorPage;
