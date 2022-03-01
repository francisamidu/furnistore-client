import React, { useState } from "react";
import { SidebarLink } from ".";
import { generateId } from "../helpers";
import ISidebarLink from "../interfaces/SidebarLink";

const Sidebar = () => {
  const [dashboardLinks, setDashboardLinks] = useState<ISidebarLink[]>([
    {
      active: true,
      id: generateId(),
      text: "Home",
    },
    {
      active: false,
      id: generateId(),
      text: "Analytics",
    },
    {
      active: false,
      id: generateId(),
      text: "Sales",
    },
    {
      active: false,
      id: generateId(),
      text: "Customers",
    },
    {
      active: false,
      id: generateId(),
      text: "Staff",
    },
    {
      active: false,
      id: generateId(),
      text: "Orders",
    },
    {
      active: false,
      id: generateId(),
      text: "Transactions",
    },
    {
      active: false,
      id: generateId(),
      text: "Products",
    },
    {
      active: false,
      id: generateId(),
      text: "Mail",
    },
    {
      active: false,
      id: generateId(),
      text: "Feedback",
    },
    {
      active: false,
      id: generateId(),
      text: "Messages",
    },
  ]);

  return (
    <div className="min-w-[17%] sidebar sticky h-full px-6 py-4">
      <h3 className="text-gray-400 text-md my-2">Dashboard</h3>
      {dashboardLinks.slice(0, 3).map((link) => (
        <SidebarLink
          link={link}
          setLinks={setDashboardLinks}
          links={dashboardLinks}
          key={link.id}
        />
      ))}
      <h3 className="text-gray-400 text-md my-2">Quick Menu</h3>
      {dashboardLinks.slice(3, 8).map((link) => (
        <SidebarLink
          link={link}
          setLinks={setDashboardLinks}
          links={dashboardLinks}
          key={link.id}
        />
      ))}
    </div>
  );
};

export default Sidebar;
