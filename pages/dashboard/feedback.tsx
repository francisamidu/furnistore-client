import { NextComponentType } from "next";
import React from "react";
import { ComingSoon, DashboardLayout } from "../../components";

const Feedback = () => {
  return (
    <section className="dashboard-content">
      <ComingSoon heading="Feedback Page" />
    </section>
  );
};

Feedback.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Feedback;
