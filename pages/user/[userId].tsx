import React from "react";

import router from "next/router";
import { NextComponentType } from "next";
import { Button, DashboardLayout, NotFound } from "../../components";
import Image from "next/image";
import {
  MdOutlineAccountCircle as Account,
  MdCalendarToday as Calendar,
  MdPhone as Phone,
  MdEmail as Email,
  MdLocationOn as Location,
} from "react-icons/md";

import { useUsers } from "../../contexts";
import { formatDate } from "../../helpers";
const User = () => {
  const { query } = router;
  const userId = query.userId;
  const users = useUsers();
  // const user = users.find((u) => u.id === userId);
  const { avatar, name, role, address, dob, email, phone, username } = users[0];
  return (
    <section className="dashboard-content bg-gray-100 px-4 py-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold text-2xl">Update User</h1>
        <Button text="Create" className="bg-green-600 hover:bg-green-700" />
      </div>
      <div className="flex flex-row justify-items-stretch mt-4">
        <div className="flex flex-col bg-white shadow rounded-sm min-w-[40%] py-4 px-4">
          <div className="flex flex-row mb-4">
            <Image
              width="50"
              height="50"
              src={avatar}
              className="rounded-full"
            />
            <p className="flex flex-col ml-3">
              <span className="font-bold">{name}</span>
              <span>{role}</span>
            </p>
          </div>
          <h2 className="text-sm capitalize text-gray-400">Account Details</h2>
          <div className="flex flex-col my-3">
            <div className="flex flex-row items-center mb-3">
              <Account />
              <span className="ml-3">{username}</span>
            </div>
            <div className="flex flex-row items-center mb-3">
              <Calendar />
              <span className="ml-3">{formatDate(dob)}</span>
            </div>
          </div>
          <h2 className="text-sm capitalize text-gray-400 mb-4">
            Contact Details
          </h2>
          <div className="flex flex-row items-center mb-3">
            <Phone />
            <span className="ml-3">{phone}</span>
          </div>
          <div className="flex flex-row items-center mb-3">
            <Email />
            <span className="ml-3">{email}</span>
          </div>
          <div className="flex flex-row items-center mb-3">
            <Location />
            <span className="ml-3">{address}</span>
          </div>
        </div>
        <div className="grid user-edit bg-white shadow rounded-sm min-w-[60%] py-4 px-4 ml-4">
          <h2 className="font-bold col-start-1 col-end-2 text-2xl">Edit</h2>
          <form className="mt-4 col-start-1 col-end-3 flex flex-row justify-between">
            <div className="flex flex-col min-w-[50%]">
              <div className="flex flex-col mb-4">
                <label className="font-bols">Username</label>
                <input
                  type="text"
                  className="rounded-sm py-2 border-b-2 border-gray-200"
                  placeholder="Enter username"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-bols">Fullname</label>
                <input
                  type="text"
                  className="rounded-sm py-2 border-b-2 border-gray-200"
                  placeholder="Enter Fullname"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-bols">Email Address</label>
                <input
                  type="text"
                  className="rounded-sm py-2 border-b-2 border-gray-200"
                  placeholder="Enter Email"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-bols">Phone number</label>
                <input
                  type="text"
                  className="rounded-sm py-2 border-b-2 border-gray-200"
                  placeholder="Enter Phone"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bols">Address</label>
                <input
                  type="text"
                  className="rounded-sm py-2 border-b-2 border-gray-200"
                  placeholder="Enter Address"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between pr-4">
              <Image
                width="200"
                height="200"
                className="rounded-full border-5 border-white cursor-pointer"
                src={avatar}
              />
              <Button text="Update" className="justify-self-end" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
  // if (user) {
  // }
  // return (
  //   <section className="dashboard-content bg-gray-100">
  //     <NotFound text="Sorry no user found" />;
  //   </section>
  // );
};

User.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default User;
