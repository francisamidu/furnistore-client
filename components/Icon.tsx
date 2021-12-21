import React from "react";
import {
  AiOutlineSmile,
  AiOutlineSafety,
  AiOutlineDeliveredProcedure,
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineWallet,
  AiOutlineBarChart,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

import {
  MdOutlineReviews,
  MdOutlineReport,
  MdOutlineTrendingUp,
  MdOutlineShoppingBag,
  MdOutlineMessage,
  MdOutlineAccountCircle,
  MdOutlineMail,
  MdOutlineFeedback,
  MdOutlineManageAccounts,
} from "react-icons/md";

type IconName = {
  icon: string;
};
const Icon = (props: IconName) => {
  const { icon } = props;
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
      case "Reviews":
        return <MdOutlineReviews className="text-4xl color-blue" />;
      case "Support":
        return <AiOutlineSmile className="text-4xl color-blue" />;
      case "Home":
        return <AiOutlineHome className="mr-4" />;
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
