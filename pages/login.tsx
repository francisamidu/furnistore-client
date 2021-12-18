import React from "react";
import { NextComponentType } from "next";
import AuthLayout from "../components/AuthLayout";
import LoginComponent from "../components/Login";

const Login = () => {
  return <LoginComponent />;
};

Login.getLayout = (page: NextComponentType) => {
  return (
    <AuthLayout pageName="Login" page="Signup">
      {page}
    </AuthLayout>
  );
};

export default Login;
