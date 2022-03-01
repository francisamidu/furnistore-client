import { NextComponentType } from "next";
import React from "react";
import { ComingSoon, DashboardLayout } from "../../components";

const Messages = () => {
  return (
    <section className="dashboard-content">
      <ComingSoon heading="Messages Page" />
    </section>
  );
};
Messages.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Messages;
