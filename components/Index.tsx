import React from "react";
import HomeHeader from "./HomeHeader";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Features from "./Features";
import Newsletter from "./Newsletter";

import extractCategories from "../helpers/extractCategoriesFromProduct";
import { useProducts } from "../contexts/ProductContext";

const Index = () => {
  const featuredProducts = useProducts();
  const categories = extractCategories(featuredProducts);
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
