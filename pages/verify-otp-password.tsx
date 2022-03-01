import { NextComponentType } from "next";
import React from "react";
import { AuthLayout } from "../components";

const VerifyPasswordOTP = () => {
  // return <VerifyPasswordReset />;
  return <div>Verify Password Reset OTP</div>;
};

VerifyPasswordOTP.getLayout = (page: NextComponentType) => (
  <AuthLayout page="" pageName="VerifyPasswordOTP">
    {page}
  </AuthLayout>
);

export default VerifyPasswordOTP;
