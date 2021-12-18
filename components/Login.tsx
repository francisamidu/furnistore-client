import React, { FormEvent, useState } from "react";
import Button from "../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form
      className="col-start-1 md:col-end-4 col-end-5"
      onSubmit={submitHandler}
    >
      <h1 className="text-3xl font-bold mb-4">
        Welcome, Log into your Account
      </h1>
      <h2 className="text-1xl text-gray-500 mb-8">
        Enter your email and password
      </h2>
      <div className="input-group flex flex-row justify-between my-4 w-full">
        <input
          type="text"
          id="email"
          placeholder="Enter Your Email"
          className="rounded-sm py-2 px-2 border-2 border-gray-200"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <input
          type="text"
          id="password"
          placeholder="Enter Your Password"
          className="rounded-sm py-2 px-2 border-2 border-gray-200"
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
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
export default Login;
