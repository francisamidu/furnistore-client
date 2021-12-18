import React from "react";

import Link from "next/link";

type PageProps = {
  page: string;
  pageName: string;
};

const AuthTopBar = (props: PageProps) => {
  const { page } = props;
  const getLink = (page: string) => {
    switch (page) {
      case "Login":
        return (
          <Link href="/login">
            <a className="text-1xl font-bold capitalize">{page}</a>
          </Link>
        );
      case "Signup":
        return (
          <Link href="/signup">
            <a className="text-1xl font-bold capitalize">{page}</a>
          </Link>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-row items-center justify-between bg-white py-4 px-10 sticky top-0 w-full">
      <div className="brand">
        <Link href="/">
          <a className="font-bold text-2xl color-blue">Furnistore</a>
        </Link>
      </div>
      {getLink(page)}
    </div>
  );
};

export default AuthTopBar;
