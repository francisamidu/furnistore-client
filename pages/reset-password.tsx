import { NextComponentType } from "next";
import React from "react";
import {
  AuthLayout,
  ResetPassword as ResetPasswordComponent,
} from "../components";

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
