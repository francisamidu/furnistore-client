import React from "react";
import Link from "next/link";

type ColumnLinkProps = {
  link: {
    id: string;
    path: string;
    text: string;
  };
};
const ColumnLink = (props: ColumnLinkProps) => {
  const {
    link: { id, path, text },
  } = props;
  return id && path && text ? (
    <Link href={`/${encodeURI(path)}`} key={id}>
      <a className="text-gray-800 transition duration-400 hover:color-purplish font-bold capitalize mb-4">
        {text}
      </a>
    </Link>
  ) : null;
};

export default ColumnLink;
