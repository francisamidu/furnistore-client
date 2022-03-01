import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import { generateId as uid } from "../helpers";

type UsersType = {
  avatar: string;
  id: string;
  name: string;
  role: string;
  username: string;
  dob: Date;
  phone: string;
  email: string;
  address: string;
};
const UsersContext = createContext<UsersType[]>([]);

const UsersProvider = ({ children }: PropsWithChildren<Partial<ReactNode>>) => {
  const [users, setUsers] = useState<UsersType[]>([
    {
      address: "New York, USA",
      avatar: "/avatar2.png",
      id: uid(),
      name: "Anna Keller",
      role: "Software Engineer",
      dob: new Date(10, 12, 1999),
      email: "annakeller@gmail.com",
      phone: "0999999999",
      username: "annakeller",
    },
    {
      address: "Arizona, USA",
      avatar: "/avatar2.png",
      id: uid(),
      name: "Keliz Chapman",
      role: "Staff",
      dob: new Date(12, 5, 1995),
      email: "kelizchap@gmail.com",
      phone: "0999999999",
      username: "kelizchap",
    },
    {
      address: "Virginia Beach, USA",
      avatar: "/avatar2.png",
      id: uid(),
      name: "Tracy Chapman",
      role: "Admin",
      dob: new Date(10, 12, 1999),
      email: "tracychap@gmail.com",
      phone: "0999999999",
      username: "tracychap",
    },
    {
      address: "New York, USA",
      avatar: "/avatar2.png",
      id: uid(),
      name: "Anna Keller",
      role: "Software Engineer",
      dob: new Date(10, 12, 1999),
      email: "annakeller@gmail.com",
      phone: "0999999999",
      username: "annakeller",
    },
    {
      address: "Arizona, USA",
      avatar: "/avatar2.png",
      id: uid(),
      name: "Keliz Chapman",
      role: "Staff",
      dob: new Date(12, 5, 1995),
      email: "kelizchap@gmail.com",
      phone: "0999999999",
      username: "kelizchap",
    },
    {
      address: "Virginia Beach, USA",
      avatar: "/avatar2.png",
      id: uid(),
      name: "Tracy Chapman",
      role: "Admin",
      dob: new Date(10, 12, 1999),
      email: "tracychap@gmail.com",
      phone: "0999999999",
      username: "tracychap",
    },
  ]);

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

const useUsers = () => useContext(UsersContext);
export { UsersProvider, useUsers };
