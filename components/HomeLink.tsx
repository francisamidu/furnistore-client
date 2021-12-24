import React from "react";

import ILink from "../interfaces/HomeLink";
import Link from "next/link";
type HomeProps = {
  link: ILink;
};
const HomeLink = (props: HomeProps) => {
  const { link } = props;
  return (
    <Link href={`/products?category=${encodeURI(link.path)}`}>
      <a className="font-bold text-base mr-0 sm:text-sm sm:uppercase text-black sm:mr-6 transition duration-400 hover:text-gray-500 mb-4 sm:mb-0 normal-case">
        {link.text}
      </a>
    </Link>
  );
};

export default HomeLink;
