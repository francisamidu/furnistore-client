import React from "react";

import { NextComponentType } from "next";
import { useRouter } from "next/router";

import HomeLayout from "../../components/HomeLayout";
import NotFound from "../../components/NotFound";
import Product from "../../components/Product";

import { useProducts } from "../../contexts/ProductContext";
import type { Product as IProduct } from "../../interfaces";

const ProductPage = () => {
  const products = useProducts();
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  const { query } = router;
  const productId: any = query?.productId;
  if (productId) {
    const product = products.find(
      (product: IProduct) => product.id === productId
    );
    if (product) {
      return <Product product={product} />;
    }
    return (
      <NotFound
        text="Whoops! It appears this product doesnt exist"
        onClick={goHome}
      />
    );
  }
  return <div className="py-4">Sorry you're not on the right page</div>;
};
ProductPage.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default ProductPage;
