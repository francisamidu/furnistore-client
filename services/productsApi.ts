import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import type { Product, ProductRequest } from "../interfaces";
import gql from "graphql-tag";
import { Sale } from "../types";

export const productsApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: `${process.env.NEXT_PUBLIC_SERVERL_URL}/graphql`,
  }),
  reducerPath: "products",
  endpoints: (builder) => ({
    createProduct: builder.query<Product, any>({
      query: ({
        categories,
        colors,
        description,
        image,
        name,
        price,
        quantity,
        sizes,
      }) => ({
        document: gql`
          mutation createProduct(
            $colors: [String!]
            $categories: [String]
            $description: String!
            $image: String!
            $price: Int!
            $quantity: Int!
            $sizes: [String!]
            $name: String!
          ) {
            createProduct(
              product: {
                colors: $colors
                categories: $categories
                description: $description
                image: $image
                price: $price
                quantity: $quantity
                sizes: $sizes
                name: $name
              }
            ) {
              _id
              colors
              categories
              description
              image
              price
              quantity
              sizes
              name
            }
          }
        `,
        variables: {
          categories,
          colors,
          description,
          image,
          name,
          price,
          quantity,
          sizes,
        },
      }),
    }),
    deleteProducts: builder.query<Product, any>({
      query: ({ productId }) => ({
        document: gql`
          query deleteProduct($productId: ID!) {
            deleteProduct(productId: $productId) {
              _id
            }
          }
        `,
        variables: {
          productId,
        },
      }),
    }),
    getProduct: builder.query<{ product: Product }, any>({
      query: (productId) => ({
        document: gql`
          query product($productId: ID!) {
            product(productId: $productId) {
              _id
              colors
              categories
              description
              image
              price
              quantity
              sizes
              name
            }
          }
        `,
        variables: {
          productId,
        },
      }),
    }),
    getProductStats: builder.query<Sale, any>({
      query: () => ({
        document: gql`
          query productStats {
            productStats {
              _id
              total
            }
          }
        `,
      }),
    }),
    getProducts: builder.query<{ products: Product[] }, any>({
      query: () => ({
        document: gql`
          query products {
            products {
              _id
              colors
              categories
              description
              image
              price
              quantity
              sizes
              name
            }
          }
        `,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(`Data is back: ${data}`);
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getNewProducts: builder.query<Product, any>({
      query: () => ({
        document: gql`
          query newProducts {
            newProducts {
              _id
              colors
              categories
              description
              image
              price
              quantity
              sizes
              name
            }
          }
        `,
      }),
    }),
    getProductsByCategories: builder.query<Product, any>({
      query: ({ categories }) => ({
        document: gql`
          query productsByCategories({
            $categories: [String]
          }) {
            products(
              categories:$categories
            ) {
              _id
              colors
              categories
              description
              image
              price
              quantity
              sizes
              name
            }
          }
        `,
        variables: {
          categories,
        },
      }),
    }),
    updateProduct: builder.query<Product, any>({
      query: ({
        _id,
        categories,
        colors,
        description,
        image,
        name,
        price,
        quantity,
        sizes,
      }) => ({
        document: gql`
          mutation updateProduct(
            $_id: ID
            $colors: [String]
            $categories: [String]
            $description: String
            $image: String
            $price: number
            $quantity: number
            $sizes: [String]
            $name: String
          ) {
            updateProduct(
              colors: $colors
              categories: $categories
              description: $descrition
              image: $image
              price: $price
              quantity: $quantity
              sizes: $sizes
              name: $name
            ) {
              _id
              colors
              categories
              description
              image
              price
              quantity
              sizes
              name
            }
          }
        `,
        variables: {
          _id,
          categories,
          colors,
          description,
          image,
          name,
          price,
          quantity,
          sizes,
        },
      }),
    }),
  }),
});

const { useGetProductQuery } = productsApi;
