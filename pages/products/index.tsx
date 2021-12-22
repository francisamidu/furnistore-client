import React, { useState, useEffect } from "react";

import router from "next/router";
import { NextComponentType } from "next";

import HomeLayout from "../../components/HomeLayout";
import ProductList from "../../components/ProductList";

import { useProducts } from "../../contexts/ProductContext";
import type { Product } from "../../interfaces";

const Products = () => {
  const products = useProducts();
  const [localProducts, setLocalProducts] = useState<any[]>([]);
  const { query } = router;
  const category: any = query.category;
  // useEffect(() => {
  //   const filteredProducts = products.filter((product: Product) =>
  //     product.categories.includes(category)
  //   );
  //   if (filteredProducts.length) {
  //     setLocalProducts(filteredProducts);
  //   } else {
  //     setLocalProducts(products);
  //   }
  // }, [products, query]);
  return (
    <section className="py-4 my-4">
      {localProducts?.length ? (
        <ProductList
          categoryName={category ? category : "Most popular"}
          page="products"
          products={localProducts}
        />
      ) : (
        <h1 className="text-center text-2xl capitalize">No product to show</h1>
      )}
    </section>
  );
};

Products.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Products;
