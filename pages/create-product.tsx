import React from "react";
import CreateProductComponent from "../components/CreateProduct";
import DashboardLayout from "../components/DashboardLayout";

import type { NextComponentType } from "next";

const CreateProduct = () => {
  return <CreateProductComponent />;
};
CreateProduct.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default CreateProduct;
