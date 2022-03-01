import React, { useState } from "react";

import Column from "./Column";
import Icon from "./Icon";

import { generateId } from "../helpers";
import type ColumnType from "../types/ColumnProps";

const Footer = () => {
  const [column, setColumn] = useState<ColumnType[]>([
    {
      id: generateId(),
      title: "Product",
      description:
        "Furnistore brings you the best of the furniture world. From products like tables,chairs to entire furnished living room sets, we have them all. Come shop with us and your home will never be the same again",
      icon: "/playstore.png",
    },
    {
      id: generateId(),
      title: "Quick Links",
      links: [
        {
          id: generateId(),
          text: "Home",
          path: "home",
        },
        {
          id: generateId(),
          text: "Login",
          path: "login",
        },
        {
          id: generateId(),
          text: "Register",
          path: "register",
        },
      ],
    },
    {
      id: generateId(),
      title: "Company",
      links: [
        {
          id: generateId(),
          text: "About us",
          path: "about",
        },
        {
          id: generateId(),
          text: "Careers",
          path: "careers",
        },
        {
          id: generateId(),
          text: "Blog",
          path: "blog",
        },
        {
          id: generateId(),
          text: "Partnership",
          path: "partnership",
        },
        {
          id: generateId(),
          text: "Affiliate program",
          path: "affiliate program",
        },
      ],
    },
    {
      id: generateId(),
      title: "Legal",
      links: [
        {
          id: generateId(),
          text: "Privacy policy",
          path: "privacy-policy",
        },
        {
          id: generateId(),
          text: "EU privacy policy",
          path: "eu-privacy-policy",
        },
        {
          id: generateId(),
          text: "Terms of use",
          path: "terms-of-use",
        },
        {
          id: generateId(),
          text: "Cookie policy",
          path: "cookie-policy",
        },
      ],
    },
    {
      id: generateId(),
      link: "",
      title: "Awesome support",
      phone: "+265-000-000-000",
      openDays: "Monday-Friday",
      openTime: "9 AM - 6PM CAT",
      email: "support@furnistore.com",
      helpDesk: "help-desk",
    },
  ]);
  const [socials, setSocials] = useState([
    {
      link: "https://twitter.com/furnistore",
      text: "Twitter",
    },
    {
      link: "https://facebook.com/furnistore",
      text: "Facebook",
    },
    {
      link: "https://linkedin.com/in/furnistore",
      text: "Linkedin",
    },
    {
      link: "https://instagram.com/furnistore",
      text: "Instagram",
    },
  ]);
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-8 bg-white border-2 border-gray-200">
      <div className="grid grid-cols-1 sm:flex sm:flex-row sm:justify-between">
        {column.map((col: ColumnType, index: number) => (
          <Column column={col} key={col.id} index={index + 1} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-between py-2 mt-6">
        <h1 className="text-2xl font-bold color-purplish">Furnistore</h1>
        <div className="flex flex-row items-center justify-center">
          {socials.map((social: any) => (
            <a
              href={`http://${social.link}`}
              className="ml-4"
              key={social.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={social.text} />
            </a>
          ))}
        </div>
      </div>
      <p className="copyright py-4 mt-4 border-t-2 border-gray-200">
        <span className="mr-2">&copy; {year} Furnistore.</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
