import { NextComponentType } from "next";
import React from "react";
import { AuthLayout, VerifyOTP } from "../components";

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
