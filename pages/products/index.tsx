import React, { useState, useEffect } from "react";

import router from "next/router";
import { NextComponentType } from "next";

import { useProducts } from "../../contexts";
import type { Product } from "../../interfaces";
import { ProductList, NotFound, HomeLayout } from "../../components";

const Products = () => {
  const products = useProducts();
  const [localProducts, setLocalProducts] = useState<any[]>([]);
  const { query } = router;
  const category: any = query.category;
  useEffect(() => {
    const filteredProducts = products.filter((product: Product) =>
      product.categories.includes(category)
    );
    if (filteredProducts.length) {
      setLocalProducts(filteredProducts);
    } else {
      setLocalProducts(products);
    }
  }, [products, query, category]);
  const goHome = () => {
    router.push("/");
  };
  return (
    <section className="py-4 my-4">
      {localProducts?.length ? (
        <ProductList
          categoryName={category ? category : "Most popular"}
          page="products"
          products={localProducts}
        />
      ) : (
        <NotFound
          text="Whoops! No products in this category"
          onClick={goHome}
        />
      )}
    </section>
  );
};

Products.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Products;
