import React, { useState } from "react";

import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="py-6 px-8 bg-blue-100">
      <div className="md:max-w-screen-lg m-auto flex flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Join the Waitlist</h1>
          <p className="mt-2 sm:mt-6 text-gray-700 sm:w-1/2 w-full">
            We cant wait to share Furnistore with you in 2022. Until then, join
            the waitlist for the beta
          </p>
          <form className="flex sm:items-center mt-4 w-full flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Enter your email to join waitlist"
              className="rounded-md py-3 px-4 border-none shadow-sm sm:w-7/12 w-full"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button
              text="Request Beta Invite"
              className="w-full sm:5/12 mt-2 sm:ml-2 ml-0 w-full sm:mt-0"
              icon={<AiOutlineArrowRight className="text-white" />}
            />
          </form>
        </div>
        <Image
          src="/undraw_watch_application_uhc9.svg"
          width="400"
          height="400"
          className="hidden"
        />
      </div>
    </section>
  );
};

export default Newsletter;
