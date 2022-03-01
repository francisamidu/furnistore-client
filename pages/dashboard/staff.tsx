import { NextComponentType } from "next";
import React from "react";
import { ComingSoon, DashboardLayout } from "../../components";

const Staff = () => {
  return (
    <section className="dashboard-content">
      <ComingSoon heading="Staff Page" />
    </section>
  );
};

Staff.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Staff;
