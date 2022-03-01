import React, { FormEvent, useState } from "react";
import Image from "next/image";
import AuthIllustration from "../public/authentication.svg";
import Head from "next/head";

import { useSignupMutation } from "../services";
import { validateEmail, validatePassword } from "../helpers";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addError, clearErrors } from "../app/error.slice";

import { BsArrowRight } from "react-icons/bs";
import { AuthTopBar, Button } from "../components";

const Signup = () => {
  const dispatch = useAppDispatch();
  const [signup, response] = useSignupMutation();
  const [user, setUser] = useState({
    email: "",
    name: "",
    gender: "",
    password: "",
  });

  const errors = useAppSelector((state) => state.errors);

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

      const response = await signup(user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <Head>
        <title>Signup - Create your Furnistore account</title>
      </Head>
      <AuthTopBar page="Login" />
      <div className="content md:max-w-screen-md m-auto  grid grid-cols-4 py-8 px-12 content-center">
        <Image
          src={AuthIllustration}
          height="200"
          width="200"
          className="col-start-2 col-end-3"
        />
        <form className="col-start-1 col-end-4" onSubmit={submitHandler}>
          <h1 className="text-3xl font-bold mb-4">
            Welcome, Create your Account
          </h1>
          <h2 className="text-1xl text-gray-500">
            Enter your email and create a strong password
          </h2>
          <div className="input-group flex flex-row mt-4 w-full">
            <select
              name="name"
              className="w-1/6 mr-2"
              onChange={(event) =>
                setUser({ ...user, gender: event.target.value })
              }
            >
              <option value="Male">Mr.</option>
              <option value="Female">Mrs.</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              className="w-5/6 mt-2 rounded-sm flex-grow py-2 px-2 border-2 border-gray-200"
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />
          </div>
          <div className="input-group flex flex-row justify-between my-4 w-full">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="mt-2 rounded-sm w-1/2 py-2 px-2 border-2 border-gray-200"
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
            <input
              type="text"
              id="password"
              placeholder="Password"
              className="mt-2 rounded-sm w-1/2 py-2 px-2 border-2 border-gray-200"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </div>
          <div className="flex flex-row items-center justify-end">
            <Button
              text="Continue"
              icon={<BsArrowRight className="text-white text-2xl" />}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
