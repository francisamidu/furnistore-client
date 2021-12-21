import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import generateId from "../helpers/generateId";

import type { Product } from "../interfaces";
const ProductContext = createContext<Array<Product>>([]);

const ProductProvider = ({ children }: PropsWithChildren<any>) => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([
    {
      id: generateId(),
      description:
        "This is a great table for functions such as family dinners,small conferences and many more",
      name: "Wooden Brick Table",
      colors: ["hazel"],
      sizes: ["s"],
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
      colors: ["hazel"],
      sizes: ["s", "md", "lg", "xl"],
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
      colors: ["brown"],
      sizes: ["s", "md", "lg", "xl"],
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
      colors: ["hazel"],
      sizes: ["s", "md", "lg", "xl"],
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
      colors: ["cream"],
      sizes: ["s", "md", "lg", "xl"],
      price: 6500,
      quantity: 0,
      image: "/1669799.jpg",
      isDeleted: false,
      categories: ["table", "living room", "cream", "limited", "luxury"],
    },
  ]);
  return (
    <ProductContext.Provider value={featuredProducts}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => useContext(ProductContext);
export default ProductProvider;
