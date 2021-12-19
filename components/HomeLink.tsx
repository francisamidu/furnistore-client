import React from "react";

import ILink from "../interfaces/HomeLink";
import Link from "next/link";
type HomeProps = {
  link: ILink;
};
const HomeLink = (props: HomeProps) => {
  const { link } = props;
  return (
    <Link href={`/products?query=${encodeURI(link.path)}`}>
      <a className="font-bold text-sm uppercase text-gray-800 mr-6 transition duration-400 hover:color-purplish">
        {link.text}
      </a>
    </Link>
  );
};

export default HomeLink;
