import React, { FormEvent, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from ".";

import { useSignupMutation } from "../services";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    gender: "",
    password: "",
  });

  const [signup, { data, isSuccess, isError, error }] = useSignupMutation({});

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form
      className="col-start-1 md:col-end-4 col-end-5"
      onSubmit={submitHandler}
    >
      <h1 className="text-3xl font-bold mb-4">Welcome, Create your Account</h1>
      <h2 className="text-1xl text-gray-500 mb-8">
        Enter your email and create a strong password
      </h2>
      <div className="input-group flex flex-row justify-between mt-4 w-full">
        <select
          name="name"
          id="select-name"
          className="mr-4 border-2 border-gray-200 p-2"
          onChange={(event) => setUser({ ...user, gender: event.target.value })}
        >
          <option value="Male">Mr.</option>
          <option value="Female">Mrs.</option>
        </select>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          className="rounded-sm flex-grow py-2 px-2 border-2 border-gray-200"
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
      </div>
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
          placeholder="Password"
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
export default Signup;
