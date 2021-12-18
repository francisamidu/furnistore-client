import { NextComponentType } from "next";
import React from "react";
import AuthLayout from "../components/AuthLayout";
import SetNewPasswordComponent from "../components/SetNewPassword";

const SetNewPassword = () => {
  return <SetNewPasswordComponent />;
};
SetNewPassword.getLayout = (page: NextComponentType) => {
  return (
    <AuthLayout page="" pageName="Set New Password">
      {page}
    </AuthLayout>
  );
};

export default SetNewPassword;
