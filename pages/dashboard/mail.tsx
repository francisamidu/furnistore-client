import { NextComponentType } from "next";
import React from "react";
import { ComingSoon, DashboardLayout } from "../../components";

const Mail = () => {
  return (
    <section className="dashboard-content">
      <ComingSoon heading="Mail Page" />
    </section>
  );
};

Mail.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default Mail;
