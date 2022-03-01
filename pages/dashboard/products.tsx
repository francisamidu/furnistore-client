import React from "react";
import type { NextComponentType } from "next";
import { ComingSoon, DashboardLayout } from "../../components";

const Products = () => {
  return (
    <section className="dashboard-content">
      <ComingSoon heading="Products Page" />
    </section>
  );
};

Products.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default Products;
