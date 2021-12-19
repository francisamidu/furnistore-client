import { PropsWithChildren } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import IProduct from "../interfaces/Product";
import ProductItem from "./ProductItem";

type ProductProps = {
  products: Array<IProduct>;
  categoryName?: string;
};
const ProductList = (props: PropsWithChildren<ProductProps>) => {
  const { products, categoryName } = props;
  const renderHeading = () =>
    categoryName ? (
      <h1 className="product-list-header text-2xl font-bold text-gray-700 uppercase">
        {categoryName}
      </h1>
    ) : null;
  return (
    <section className="py-4">
      {renderHeading()}
      {products.map((product: IProduct) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ProductList;
