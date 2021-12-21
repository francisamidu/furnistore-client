import React, { useState } from "react";
import Head from "next/head";
import HomeTopBar from "../components/HomeTopBar";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

import generateId from "../helpers/generateId";
import type { Product } from "../interfaces";
import extractCategories from "../helpers/extractCategoriesFromProduct";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([
    {
      id: generateId(),
      description:
        "This is a great table for functions such as family dinners,small conferences and many more",
      name: "Wooden Brick Table",
      color: "hazel",
      size: "15",
      price: 1570,
      quantity: 15,
      image: "/121668.jpg",
      isDeleted: false,
      categories: ["table", "wooden"],
    },
    {
      id: generateId(),
      description:
        "This is a great table for small functions such as dates and very small family gathering",
      name: "Rounded Table",
      color: "hazel",
      size: "12",
      price: 700,
      quantity: 20,
      image: "/154161.jpg",
      isDeleted: false,
      categories: ["table", "wooden", "hazel"],
    },
    {
      id: generateId(),
      description:
        "A Living room set great for the newly married couples and small scale families",
      name: "Brown Living Room Set",
      color: "brown",
      size: "35",
      price: 4500,
      quantity: 5,
      image: "/189333.jpg",
      isDeleted: false,
      categories: ["table", "wooden", "brown", "limited", "luxury"],
    },
    {
      id: generateId(),
      description:
        "A small but fancy chair and table combo. Ideal for Macbook loners and Outdoor Coding",
      name: "Chair Table Combo",
      color: "hazel",
      size: "22",
      price: 1500,
      quantity: 12,
      image: "/280471.jpg",
      isDeleted: false,
      categories: ["table", "wooden", "hazel"],
    },
    {
      id: generateId(),
      description:
        "Fancy a luxury room? Look no further! This living room set will have your guests looking in awe and admiration",
      name: "Luxury Living Room Set",
      color: "cream",
      size: "44",
      price: 6500,
      quantity: 0,
      image: "/1669799.jpg",
      isDeleted: false,
      categories: ["table", "living room", "cream", "limited", "luxury"],
    },
  ]);
  const categories = extractCategories(featuredProducts);
  return (
    <>
      <Head>
        <title>Furnistore - Luxury Furniture to your liking</title>
        <meta
          name="description"
          content="Furniture store for all your furniture needs"
        />
        <meta name="site-name" content="Furnistore" />
        <meta name="author" content="Francis Amidu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTopBar />
      <HomeHeader />
      <ProductList
        products={featuredProducts}
        page="home"
        categoryName="Featured Products"
      />
      <CategoryList categories={categories} products={featuredProducts} />{" "}
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Home;
