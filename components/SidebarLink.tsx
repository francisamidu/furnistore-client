import React from "react";

import Link from "next/link";
import router from "next/router";

import {
  AiOutlineHome,
  AiOutlineWallet,
  AiOutlineBarChart,
} from "react-icons/ai";

import {
  MdOutlineReport,
  MdOutlineTrendingUp,
  MdOutlineShoppingBag,
  MdOutlineMessage,
  MdOutlineAccountCircle,
  MdOutlineMail,
  MdOutlineFeedback,
  MdOutlineManageAccounts,
} from "react-icons/md";

const SidebarLink = (props: any) => {
  const { links, link, setLinks } = props;
  const { text, active, id } = link;
  const renderIcon = (name: string) => {
    switch (name) {
      case "Analytics":
        return <AiOutlineBarChart className="mr-4" />;
      case "Sales":
        return <MdOutlineTrendingUp className="mr-4" />;
      case "Transactions":
        return <AiOutlineWallet className="mr-4" />;
      case "Products":
        return <MdOutlineShoppingBag className="mr-4" />;
      case "Reports":
        return <MdOutlineReport className="mr-4" />;
      case "Messages":
        return <MdOutlineMessage className="mr-4" />;
      case "Mail":
        return <MdOutlineMail className="mr-4" />;
      case "Feedback":
        return <MdOutlineFeedback className="mr-4" />;
      case "Staff":
        return <MdOutlineAccountCircle className="mr-4" />;
      case "Customers":
        return <MdOutlineManageAccounts className="mr-4" />;
      default:
        return <AiOutlineHome className="mr-4" />;
    }
  };
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
    router.push(`/${text?.toLowerCase()}`);
  };
  return (
    <Link href={text === "Home" ? `/dashboard` : `/${text?.toLowerCase()}`}>
      <a
        className={
          active
            ? "mb-2 rounded-md transition duration-400 bg-blue-100 color-blue py-2 px-4 flex flex-row items-center"
            : "mb-2 rounded-md transition duration-400 hover:bg-blue-100 py-2 px-4 flex flex-row items-center"
        }
        onClick={(event: any) => redirectLink(event, text, id)}
      >
        {renderIcon(text)}
        <span className="text-gray-900">{text}</span>
      </a>
    </Link>
  );
};

export default SidebarLink;
