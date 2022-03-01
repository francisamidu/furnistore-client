import React from "react";
import { useUsers } from "../contexts";
import UserWidget from "./UserWidget";

const NewUsers = () => {
  const users = useUsers();
  return (
    <div className="min-w-[40%] shadow rounded-md pt-2 pb-3 px-3 bg-white flex flex-col justify-between">
      <h2 className="font-bold mb-4 text-2xl">New users</h2>
      <div className="flex flex-col">
        {users.map((user) => (
          <UserWidget user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default NewUsers;
