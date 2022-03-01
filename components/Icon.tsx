import React from "react";
import {
  AiOutlineSmile,
  AiOutlineSafety,
  AiOutlineDeliveredProcedure,
  AiOutlineDollar,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillHome as Home,
} from "react-icons/ai";

import {
  IoCard as Card,
  IoPieChart as PieChart,
  IoBasket as Basket,
} from "react-icons/io5";

import { FaUsers as Users } from "react-icons/fa";

import {
  MdReviews,
  MdTrendingUp,
  MdShoppingBag,
  MdMessage,
  MdAccountCircle,
  MdMail,
  MdFeedback,
} from "react-icons/md";

type IconName = {
  icon: string;
};
const Icon = (props: IconName) => {
  const { icon } = props;
  const renderIcon = (name: string) => {
    switch (name) {
      case "Analytics":
        return <PieChart className="mr-4" />;
      case "Sales":
        return <MdTrendingUp className="mr-4" />;
      case "Transactions":
        return <Card className="mr-4" />;
      case "Products":
        return <MdShoppingBag className="mr-4" />;
      case "Orders":
        return <Basket className="mr-4" />;
      case "Messages":
        return <MdMessage className="mr-4" />;
      case "Mail":
        return <MdMail className="mr-4" />;
      case "Feedback":
        return <MdFeedback className="mr-4" />;
      case "Staff":
        return <MdAccountCircle className="mr-4" />;
      case "Customers":
        return <Users className="mr-4" />;
      case "Reviews":
        return <MdReviews className="text-4xl color-blue" />;
      case "Support":
        return <AiOutlineSmile className="text-4xl color-blue" />;
      case "Home":
        return <Home className="mr-4" />;
      case "Safety":
        return <AiOutlineSafety className="text-4xl color-blue" />;
      case "Delivery":
        return <AiOutlineDeliveredProcedure className="text-4xl color-blue" />;
      case "Value":
        return <AiOutlineDollar className="text-4xl color-blue" />;
      case "Facebook":
        return <AiFillFacebook className="text-3xl text-blue-700" />;
      case "Twitter":
        return <AiFillTwitterCircle className="text-3xl text-blue-500" />;
      case "Instagram":
        return <AiFillInstagram className="text-3xl text-orange-700" />;
      case "Linkedin":
        return <AiFillLinkedin className="text-3xl text-blue-900" />;
      default:
        return null;
    }
  };
  return <>{renderIcon(icon)}</>;
};

export default Icon;
