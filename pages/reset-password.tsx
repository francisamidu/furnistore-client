import { NextComponentType } from "next";
import React from "react";
import AuthLayout from "../components/AuthLayout";
import ResetPasswordComponent from "../components/ResetPassword";

const ResetPassword = () => {
  return <ResetPasswordComponent />;
};
ResetPassword.getLayout = (page: NextComponentType) => {
  return (
    <AuthLayout page="" pageName="Reset Password">
      {page}
    </AuthLayout>
  );
};

export default ResetPassword;
