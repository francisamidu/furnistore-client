import React, { FormEvent, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from ".";

const Signup = () => {
  const [password, setPassword] = useState("");

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form
      className="col-start-1 md:col-end-4 col-end-5"
      onSubmit={submitHandler}
    >
      <h1 className="text-3xl font-bold mb-4">
        Welcome, Create your new password
      </h1>
      <h2 className="text-1xl text-gray-500 mb-8">
        Create a new strong password
      </h2>
      <div className="input-group flex flex-row justify-between my-4 w-full">
        <input
          type="text"
          id="password"
          placeholder="Password"
          className="rounded-sm py-2 px-2 border-2 border-gray-200"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="flex flex-row items-center justify-end">
        <Button
          text="Continue"
          icon={<AiOutlineArrowRight className="text-white" />}
        />
      </div>
    </form>
  );
};
export default Signup;
