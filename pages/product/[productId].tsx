import React from "react";

import { NextComponentType } from "next";
import { useRouter } from "next/router";

import HomeLayout from "../../components/HomeLayout";
import NotFound from "../../components/NotFound";
import Product from "../../components/Product";

import { useGetProductQuery } from "../../services";

const ProductPage = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  const { query } = router;
  const productId: any = query?.productId;
  const response = useGetProductQuery(productId);
  let product = null;
  if (response?.data?.product) {
    product = {
      ...response.data.product,
      id: response.data.product._id || "",
    };
  }
  if (product) {
    return <Product product={product} />;
  }
  return (
    <NotFound
      text="Whoops! It appears this product doesnt exist"
      onClick={goHome}
    />
  );
};
ProductPage.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default ProductPage;
