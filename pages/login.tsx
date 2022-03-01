import React, { FormEvent, useEffect, useState } from "react";
import { NextComponentType } from "next";
import router from "next/router";
import AuthLayout from "../components/AuthLayout";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../components/Button";

import { useAppDispatch } from "../hooks";
import { useLoginMutation } from "../services";
import { addError, clearErrors } from "../app/error.slice";
import { validateEmail, validatePassword } from "../helpers";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [login, response] = useLoginMutation();
  const dispatch = useAppDispatch();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      //Validates fields first before proceeding
      const validEmail = validateEmail(user.email);
      const validPassword = validatePassword(user.password);
      if (!validEmail) {
        dispatch(addError("Email is not valid"));
      } else {
        dispatch(clearErrors());
      }
      if (!validPassword) {
        dispatch(
          addError(
            "A strong password has: at least 8 characters,1 number,1 lowercase character, 1 uppercase letter, 1 special character"
          )
        );
      } else {
        dispatch(clearErrors());
      }

      await login(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (response.data) {
      router.push("/dashboard");
    }
  }, [response]);

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

Login.getLayout = (page: NextComponentType) => {
  return (
    <AuthLayout pageName="Login" page="Signup">
      {page}
    </AuthLayout>
  );
};

export default Login;
