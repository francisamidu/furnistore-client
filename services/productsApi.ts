import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import type { Product } from "../interfaces";
import { gql } from "@apollo/client";

export const productsApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
  }),
  reducerPath: "products",
  endpoints: (builder) => ({
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
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productsApi;
