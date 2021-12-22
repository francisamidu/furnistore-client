import React, { PropsWithChildren } from "react";
import IProduct from "../interfaces/Product";
import ProductItem from "./ProductItem";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

import { extractCategories, extractSizes } from "../helpers";
import { BiChevronDown } from "react-icons/bi";

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
  const filterProducts = () => {};
  const sortProducts = () => {};
  const renderProductListing = () => {
    const categories = extractCategories(products).map(
      (category: any) => category?.text
    );
    const sizes = extractSizes(products);
    switch (page) {
      case "products":
        return (
          <section className="p-4 bg-gray-200 mt-10 sm:mt-0">
            {renderHeading()}
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-between">
                <span>Filter By:</span>
                <div className="custom-selector w-132 items-center relative text-md mx-4">
                  <select
                    className="bg-white rounded cursor-pointer uppercase"
                    onChange={filterProducts}
                  >
                    <option value="">Size</option>
                    {sizes?.map((size: string, index: number) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
                </div>
                <div className="custom-selector w-132 items-center relative text-md">
                  <select
                    className="bg-white rounded cursor-pointer uppercase"
                    onChange={filterProducts}
                  >
                    <option value="">Category</option>
                    {categories?.map((category: string, index: number) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
                </div>
              </div>
              <div className="flex flex row items-center justify-between">
                <span>Sort by:</span>
                <div className="custom-selector w-132 items-center relative ml-6 text-md">
                  <select
                    className="bg-white rounded cursor-pointer uppercase"
                    onChange={sortProducts}
                  >
                    <option value="">Order</option>
                    {categories?.map((category: string, index: number) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center">
              {products.map((product: IProduct) => (
                <ProductItem product={product} key={product.id} page={page} />
              ))}
            </div>
          </section>
        );
      default:
        return (
          <section className="p-4 bg-gray-200 mt-10 sm:mt-0">
            {renderHeading()}
            <div className="flex flex-row flex-wrap items-center justify-between">
              {products.map((product: IProduct) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          </section>
        );
    }
  };
  return <>{renderProductListing()}</>;
};

export default ProductList;
