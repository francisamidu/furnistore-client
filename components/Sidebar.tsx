import React, { useState } from "react";

import SidebarLink from "./SidebarLink";

import generateId from "../helpers/generateId";
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
  ]);
  const [quickMenuLinks, setQuickMenuLinks] = useState<ISidebarLink[]>([
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
      text: "Reports",
    },
  ]);
  const [notificationLinks, setNotificationLinks] = useState<ISidebarLink[]>([
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
    <div className="flex-1 sidebar sticky px-6 py-4">
      <h3 className="text-gray-400 text-md my-2">Dashboard</h3>
      {dashboardLinks.map((link) => (
        <SidebarLink
          link={link}
          setLinks={setDashboardLinks}
          links={dashboardLinks}
          key={link.id}
        />
      ))}
      <h3 className="text-gray-400 text-md my-2">Quick Menu</h3>
      {quickMenuLinks.map((link) => (
        <SidebarLink
          link={link}
          setLinks={setQuickMenuLinks}
          links={quickMenuLinks}
          key={link.id}
        />
      ))}
      <h3 className="text-gray-400 text-md my-2">Notification</h3>
      {notificationLinks.map((link) => (
        <SidebarLink
          link={link}
          setLinks={setNotificationLinks}
          links={notificationLinks}
          key={link.id}
        />
      ))}
    </div>
  );
};

export default Sidebar;
