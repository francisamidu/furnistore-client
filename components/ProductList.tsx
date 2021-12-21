import React, { PropsWithChildren } from "react";
import IProduct from "../interfaces/Product";
import ProductItem from "./ProductItem";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

type ProductProps = {
  products: Array<IProduct>;
  categoryName?: string;
  page: string;
};
const ProductList = (props: PropsWithChildren<ProductProps>) => {
  const { products, categoryName, page } = props;
  const renderHeading = () =>
    categoryName ? (
      <div className="flex flex-row items-center justify-between">
        <div className="relative block product-list-heading">
          <h1 className="product-list-header absolute text-2xl font-bold text-gray-700 uppercase">
            {categoryName}
          </h1>
        </div>
        <Link href={`/products?q=${encodeURI(categoryName.toLowerCase())}`}>
          <a className="flex flex-row items-center">
            <span className="mr-4 text-gray-700">See All</span>
            <AiOutlineArrowRight className="text-gray-700" />
          </a>
        </Link>
      </div>
    ) : null;

  const renderProducts = () => {
    switch (page) {
      default:
        return (
          <div className="flex flex-row flex-wrap items-center justify-between">
            {products.map((product: IProduct) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        );
    }
  };
  return (
    <section className="p-4 bg-gray-200 mt-10 sm:mt-0">
      {renderHeading()}
      {renderProducts()}
    </section>
  );
};

export default ProductList;
