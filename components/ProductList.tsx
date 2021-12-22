import React, {
  PropsWithChildren,
  FormEvent,
  useState,
  useEffect,
} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import router from "next/router";
import { BiChevronDown } from "react-icons/bi";
import NotFound from "./NotFound";

import type { Product as IProduct } from "../interfaces";
import ProductItem from "./ProductItem";
import { extractColors, extractSizes } from "../helpers";
import { useProducts } from "../contexts/ProductContext";

type ProductProps = {
  products: Array<IProduct>;
  categoryName?: string;
  page: string;
};
const ProductList = (props: PropsWithChildren<ProductProps>) => {
  const { products, categoryName, page } = props;
  const localProducts = useProducts();
  const colors = extractColors(products);
  const [productList, setProductList] = useState<any[]>([]);

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

  const filterProducts = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    const tempProducts = categoryName ? products : localProducts;
    let matchingProducts: IProduct[] = [];
    switch (value) {
      case "asc":
        matchingProducts = tempProducts.sort(
          (productA: IProduct, productB: IProduct) =>
            productA.price > productB.price ? 1 : -1
        );
        break;
      case "desc":
        matchingProducts = tempProducts.sort(
          (productA: IProduct, productB: IProduct) =>
            productA.price < productB.price ? 1 : -1
        );
        break;
      default:
        break;
    }
    setProductList(matchingProducts);
  };

  const sortProducts = (event: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    const tempProducts = categoryName ? products : localProducts;
    let matchingProducts: IProduct[] = [];
    switch (value) {
      case "asc":
        matchingProducts = tempProducts.sort(
          (productA: IProduct, productB: IProduct) =>
            productA.price > productB.price ? 1 : -1
        );
        break;
      case "desc":
        matchingProducts = tempProducts.sort(
          (productA: IProduct, productB: IProduct) =>
            productA.price < productB.price ? 1 : -1
        );
        break;
      default:
        break;
    }
    setProductList(matchingProducts);
  };

  const goHome = () => router.push("/");

  const renderProductListing = () => {
    const filteringTags = [
      {
        text: "newest",
        value: "new",
      },
      {
        text: "oldest",
        value: "old",
      },
      {
        text: "price(asc)",
        value: "asc",
      },
      {
        text: "price(desc)",
        value: "desc",
      },
    ];
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
                    onChange={(event: any) => filterProducts(event)}
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
                    onChange={(event: any) => filterProducts(event)}
                  >
                    <option value="">Category</option>
                    {colors?.map((color: string, index: number) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                  <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
                </div>
              </div>
              <div className="flex flex row items-center justify-between">
                <span>Sort by:</span>
                <div className="custom-selector w-132 items-center relative mx-4 text-md">
                  <select
                    className="bg-white rounded cursor-pointer uppercase"
                    onChange={(event: any) => sortProducts(event)}
                  >
                    <option value="">Order</option>
                    {filteringTags?.map((tag: any, index: number) => (
                      <option key={index} value={tag.value}>
                        {tag.text}
                      </option>
                    ))}
                  </select>
                  <BiChevronDown className="absolute custom-arrow right-4 text-gray-500 text-2xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center">
              {productList?.length ? (
                productList.map((product: IProduct) => (
                  <ProductItem product={product} key={product.id} page={page} />
                ))
              ) : (
                <section className="justify-self-center w-full">
                  <NotFound
                    text="Whoops! No products in this category"
                    onClick={goHome}
                  />
                </section>
              )}
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
  useEffect(() => {
    setProductList(products);
  }, [products]);
  return <>{renderProductListing()}</>;
};

export default ProductList;
