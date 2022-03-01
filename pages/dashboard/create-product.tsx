import React from "react";
import {
  CreateProduct as CreateProductComponent,
  DashboardLayout,
} from "../../components";

import type { NextComponentType } from "next";

const CreateProduct = () => {
  return <CreateProductComponent />;
};
CreateProduct.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default CreateProduct;
