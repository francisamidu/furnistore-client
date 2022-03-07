import React, { useEffect, useState } from "react";

import { extractCategories, serializeProducts } from "../helpers";
import { useProducts } from "../contexts/ProductsContext";
import { useGetProductsQuery } from "../services";
import { HomeHeader, ProductList, CategoryList, Features, Newsletter } from ".";

const Index = () => {
  const featuredProducts = useProducts();
  const [products, setProducts] = useState([...featuredProducts]);
  let categories = extractCategories(products);
  const query = useGetProductsQuery({});
  const { data }: any = query;
  useEffect(() => {
    if (data?.products) {
      setProducts(serializeProducts(data.products));
    }
    categories = extractCategories(data.products);
  }, [data]);
  return (
    <>
      <HomeHeader />
      <ProductList
        products={products}
        page="home"
        categoryName="Featured Products"
      />
      <CategoryList categories={categories} products={data?.products || []} />{" "}
      <Features />
      <Newsletter />
    </>
  );
};

export default Index;
