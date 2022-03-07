import React, { FormEvent, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import router from "next/router";
import { NextComponentType } from "next";
import { AuthLayout, Button } from "../components";

const Verification = () => {
  const [otp, setOTP] = useState("");

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Attach otp to request and send to backend
  };
  return (
    <form
      className="col-start-1 md:col-end-4 col-end-5"
      onSubmit={submitHandler}
    >
      <h1 className="text-3xl font-bold mb-4">Welcome, Verify your email</h1>
      <h2 className="text-1xl text-gray-500 mb-8">
        Retrieve the OTP sent to your email and enter it below
      </h2>
      <div className="input-group my-4 w-full">
        <input
          type="text"
          placeholder="Enter OTP"
          className="rounded-sm py-2 px-2 border-2 border-gray-200 w-10/12"
          onChange={(event) => setOTP(event.target.value)}
        />
      </div>
      <div className="flex flex-row items-center">
        <Button
          text="Continue"
          icon={<AiOutlineArrowRight className="text-white" />}
        />
      </div>
    </form>
  );
};
Verification.getLayout = (page: NextComponentType) => {
  return (
    <AuthLayout page="" pageName="Verification">
      {page}
    </AuthLayout>
  );
};

export default Verification;
