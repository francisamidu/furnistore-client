import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import type { Product, ProductRequest } from "../interfaces";
import { gql } from "@apollo/client";
import { Sale } from "../types";

export const productsApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
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
            product:{
              _id:ID
              colors: [String]
              categories: [String]
              description: String
              image: String
              price:number
              quantity:number
              sizes: [String]
              name:String
          }) {
            createProduct {
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
      query: () => ({
        document: gql`
          query deleteProduct {
            deleteProduct {
              _id
            }
          }
        `,
      }),
    }),
    getProduct: builder.query<Product, any>({
      query: () => ({
        document: gql`
          query product {
            product {
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
    getProducts: builder.query<Product, any>({
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
            categories: [String]
          }) {
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
              _id:ID
              colors: [String]
              categories: [String]
              description: String
              image: String
              price:number
              quantity:number
              sizes: [String]
              name:String
          ) {
            updateProduct {
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
