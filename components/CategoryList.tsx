import React from "react";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

import type { Product } from "../interfaces";
import { extractImage } from "../helpers";
import CategoryCard from "./CategoryCard";

type CategoryListProps = {
  categories: {
    id: string;
    text: string;
  }[];
  products: Product[] | [];
};

const CategoryList = (props: CategoryListProps) => {
  const { categories, products } = props;
  const snippetCategories = products?.length
    ? categories.slice(0, 2).map((category: { id: string; text: string }) => {
        return {
          name: category.text,
          image: extractImage(products[0]),
        };
      })
    : [];
  return (
    <section className="p-4 bg-gray-100">
      <div className="flex flex-row items-center justify-between">
        <div className="relative block product-list-heading">
          <h1 className="product-list-header absolute text-2xl font-bold text-gray-700 uppercase">
            Featured Categories
          </h1>
        </div>
        <Link href={`/products?q=${encodeURI("featured categories")}`}>
          <a className="flex flex-row items-center">
            <span className="mr-4 text-gray-700">See All</span>
            <AiOutlineArrowRight className="text-gray-700" />
          </a>
        </Link>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex w-full py-2 flex-row items-center justify-between flex-wrap">
          {snippetCategories.map((category: any, index: number) => (
            <CategoryCard category={category} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
