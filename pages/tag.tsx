import React, { useEffect, useState } from "react";

import { NextComponentType } from "next";
import router from "next/router";
import {
  Loading,
  TabWrapper,
  Wishlist,
  NotFound,
  HomeLayout,
  ShoppingCart as ShoppingCartComponent,
} from "../components";

const ShoppingCart = () => {
  const { query } = router;
  const [component, setComponent] = useState("");

  useEffect(() => {
    const page: any = query?.page;
    if (page && page === "cart") {
      setComponent("cart");
    } else if (page && page === "wishlist") {
      setComponent("wishlist");
    }
  }, [query]);

  const redirect = (path: string) => {
    router.push(path);
  };
  if (component === "cart") {
    return (
      <>
        {!component ? (
          <Loading />
        ) : (
          <main className="py-4">
            <TabWrapper onClick={redirect} tab={component}>
              <ShoppingCartComponent />
            </TabWrapper>
          </main>
        )}
      </>
    );
  } else if (component === "wishlist") {
    return (
      <>
        {!component ? (
          <Loading />
        ) : (
          <main className="py-4">
            <TabWrapper onClick={redirect} tab={component}>
              <Wishlist />
            </TabWrapper>
          </main>
        )}
      </>
    );
  }

  return (
    <NotFound
      text="Whoops! It appears this page doesn't exist"
      onClick={() => redirect("/")}
    />
  );
};

ShoppingCart.getLayout = (page: NextComponentType) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default ShoppingCart;
