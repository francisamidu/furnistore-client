import React, { FormEvent, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from ".";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Attach email to request and send to backend
  };
  return (
    <form
      className="col-start-1 md:col-end-4 col-end-5"
      onSubmit={submitHandler}
    >
      <h1 className="text-3xl font-bold mb-4">
        Welcome, Enter your email below
      </h1>
      <h2 className="text-1xl text-gray-500 mb-8">
        {"We'll"} send over an OTP for verification. This OTP will only be valid
        for an hour
      </h2>
      <div className="input-group my-4 w-full">
        <input
          type="text"
          placeholder="Enter Email"
          className="rounded-sm py-2 px-2 border-2 border-gray-200 w-10/12"
          onChange={(event) => setEmail(event.target.value)}
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
export default ResetPassword;
