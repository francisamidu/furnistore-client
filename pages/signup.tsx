import React, { FormEvent, useState } from "react";
import AuthTopBar from "../components/AuthTopBar";
import Image from "next/image";
import AuthIllustration from "../public/authentication.svg";
import Button from "../components/Button";
import Head from "next/head";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    gender: "",
    password: "",
  });

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <section>
      <Head>
        <title>Signup - Create your Furnistore account</title>
      </Head>
      <AuthTopBar pageName="Signup" page={""} />
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
            Enter your email and create a stronng password
          </h2>
          <div className="input-group flex flex-row pr-4 mt-4 mr-4 w-full">
            <select
              name="name"
              id="name"
              onChange={(event) =>
                setUser({ ...user, gender: event.target.value })
              }
            >
              <option value="Male">Mr.</option>
              <option value="Female">Mrs.</option>
            </select>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="mt-2 rounded-sm flex-grow py-2 px-2 border-2 border-gray-200"
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />
          </div>
          <div className="input-group flex flex-row justify-between pr-4 my-4 ml-4 w-full">
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
            <Button text="Continue" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
