import React from "react";

import type ColumnType from "../types/ColumnProps";
import Link from "next/link";
import ColumnContent from "./ColumnContent";
import ColumnHeading from "./ColumnHeading";
import ColumnLink from "./ColumnLink";
type ColumnProps = {
  column: ColumnType;
  index: number;
};
const Column = (props: ColumnProps) => {
  const {
    column: {
      title,
      description,
      email,
      helpDesk,
      icon,
      links,
      openDays,
      openTime,
      phone,
    },
  } = props;

  const renderContent = () => {
    if (description && icon) {
      return (
        <ColumnContent description={description} icon={icon} heading={title} />
      );
    }
    if (email || phone || openDays) {
      return (
        <div className="px-2">
          <ColumnHeading heading={title} />
          <ColumnLink
            link={{ id: "contact-id", path: "contact", text: "Contact" }}
          />
          <div>
            <p className="my-4">
              Call us on <span className="mb-2 color-purplish">{phone}</span>
            </p>
            <p className="my-2">
              Email us
              <a className="mb-2 ml-2 color-purplish" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
            <p className="my-2">{openDays}</p>
            <p className="my-2">{openTime}</p>
            <div className="flex flex-row items-center justify-between text-white">
              <span>Visit our</span>
              <Link href={`/${helpDesk}`}>
                <a>Help Desk</a>
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="px-2">
        <ColumnHeading heading={title || ""} />
        <div className="flex flex-col">
          {links?.map((link: any) => {
            if (link.text) {
              return (
                <a
                  href="http://blog.furnistore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 transition duration-400 hover:color-purplish font-bold capitalize mb-4"
                >
                  {link.text}
                </a>
              );
            }
            return <ColumnLink link={link} key={link.id} />;
          })}
        </div>
      </div>
    );
  };
  return (
    <div className={`mb-4 sm:md-0 col-start-1 col-end-2 sm:flex-1 px-4`}>
      {renderContent()}
    </div>
  );
};

export default Column;
