import { NextComponentType } from "next";
import React from "react";
import AuthLayout from "../components/AuthLayout";
import VerifyOTP from "../components/verifyOTP";

const Verification = () => {
  return <VerifyOTP />;
};
Verification.getLayout = (page: NextComponentType) => {
  return (
    <AuthLayout page="" pageName="Verification">
      {page}
    </AuthLayout>
  );
};

export default Verification;
