import React, { PropsWithChildren } from "react";
import Product from "../interfaces/Product";

type ProductItemProps = {
  product: Product;
};
const ProductItem = (props: PropsWithChildren<ProductItemProps>) => {
  const { product } = props;
  return <div></div>;
};

export default ProductItem;
