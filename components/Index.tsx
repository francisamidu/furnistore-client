import React from "react";
import HomeHeader from "./HomeHeader";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Features from "./Features";
import Newsletter from "./Newsletter";

import { extractCategories } from "../helpers";
import { useProducts } from "../contexts/ProductContext";
import { useGetProductsQuery } from "../services/productsApi";

const Index = () => {
  const featuredProducts = useProducts();
  const categories = extractCategories(featuredProducts);
  const query = useGetProductsQuery({});
  console.log(query);
  return (
    <>
      <HomeHeader />
      <ProductList
        products={featuredProducts}
        page="home"
        categoryName="Featured Products"
      />
      <CategoryList categories={categories} products={featuredProducts} />{" "}
      <Features />
      <Newsletter />
    </>
  );
};

export default Index;
