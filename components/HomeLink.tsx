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
      <a className="font-bold text-sm uppercase color-blue mr-6">{link.text}</a>
    </Link>
  );
};

export default HomeLink;
