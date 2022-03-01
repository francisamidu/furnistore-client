import { NextComponentType } from "next";
import React from "react";
import {
  AuthLayout,
  SetNewPassword as SetNewPasswordComponent,
} from "../components";

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
