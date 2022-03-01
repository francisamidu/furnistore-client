import { NextComponentType } from "next";
import React from "react";
import { ComingSoon, DashboardLayout } from "../../components";

const Customers = () => {
  return (
    <section className="dashboard-content">
      <ComingSoon heading="Customers Page" />
    </section>
  );
};

Customers.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Customers;
