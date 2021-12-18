import React from "react";
import { NextComponentType } from "next";
import AuthLayout from "../components/AuthLayout";
import SignupComponent from "../components/Signup";

const Signup = () => {
  return <SignupComponent />;
};

Signup.getLayout = (page: NextComponentType) => {
  return (
    <AuthLayout pageName="Signup" page="Login">
      {page}
    </AuthLayout>
  );
};

export default Signup;
