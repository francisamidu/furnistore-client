import React from "react";

import Link from "next/link";
import router from "next/router";
import { Icon } from ".";

const SidebarLink = (props: any) => {
  const { links, link, setLinks } = props;
  const { text, active, id } = link;

  const redirectLink = (event: Event, text: string, id: string) => {
    event.preventDefault();
    setLinks(() => {
      return links.map((link: any) => {
        if (link.id === id) {
          link.active = true;
          return link;
        }
        link.active = false;
        return link;
      });
    });
    if (text === "Home") {
      router.push("/dashboard");
      return;
    }
    router.push(`/dashboard/${text?.toLowerCase()}`);
  };
  return (
    <Link
      href={
        text === "Home" ? `/dashboard` : `/dashboard/${text?.toLowerCase()}`
      }
    >
      <a
        className={
          active
            ? "mb-2 rounded-md transition duration-400 bg-blue-100 color-blue py-2 px-4 flex flex-row items-center"
            : "mb-2 rounded-md transition duration-400 hover:bg-blue-100 py-2 px-4 flex flex-row items-center"
        }
        onClick={(event: any) => redirectLink(event, text, id)}
      >
        <Icon icon={text} />
        <span className="text-gray-900">{text}</span>
      </a>
    </Link>
  );
};

export default SidebarLink;
