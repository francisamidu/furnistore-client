import React, { useEffect, useState } from "react";

import { NextComponentType } from "next";
import { useRouter } from "next/router";

import HomeLayout from "../../components/HomeLayout";
import Button from "../../components/Button";
import Product from "../../components/Product";
import { AiFillHome } from "react-icons/ai";

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
      <div className="flex flex-col justify-center items-center py-4 my-4 product-item-not-found">
        <h1 className="text-2xl text-center">
          Whoops! It appears this product doesnt exist
        </h1>
        <Button
          text="Go Home"
          className="mt-4"
          onClick={goHome}
          icon={<AiFillHome className="text-white text-1xl" />}
        />
      </div>
    );
  }
  return <div className="py-4">Sorry you're not on the right page</div>;
};
ProductPage.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default ProductPage;
