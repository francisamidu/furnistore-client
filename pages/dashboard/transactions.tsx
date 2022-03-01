import { NextComponentType } from "next";
import React from "react";
import { ComingSoon, DashboardLayout } from "../../components";

const Transactions = () => {
  return (
    <section className="dashboard-content">
      <ComingSoon heading="Transactions" />
    </section>
  );
};
Transactions.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Transactions;
