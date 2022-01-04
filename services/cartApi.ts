import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import type { CartItem } from "../interfaces";
import { gql } from "@apollo/client";
import { CartRequest } from "../types";

export const cartApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
  }),
  reducerPath: "cartItems",
  endpoints: (builder) => ({
    getCart: builder.query<
      CartItem,
      {
        cartId: string;
      }
    >({
      query: ({ cartId }) => ({
        document: gql`
          query cart($cartId: ID) {
            cart {
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
          cartId,
        },
      }),
    }),
    getCarts: builder.query<CartItem, any>({
      query: () => ({
        document: gql`
          query carts {
            carts {
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
    createCart: builder.query<CartItem, any>({
      query: ({ products, userId }) => ({
        document: gql`
          mutation createCart(
            userId: ID!
            products: [Object]!        
          ) {
            createCart {
              _id        
              products        
            }
          }
        `,
        variables: {
          products,
          userId,
        },
      }),
    }),
    deleteCart: builder.query<CartItem, any>({
      query: ({ cartId }) => ({
        document: gql`
          mutation createCart(
            cartId:ID!       
          ) {
            deleteCart {
              _id        
            }
          }
        `,
        variables: {
          cartId,
        },
      }),
    }),
    updateCart: builder.query<CartItem, any>({
      query: ({ cartId, products, userId }) => ({
        document: gql`
          mutation updateCart(
            cartId
            userId: ID!
            products: [Object]!        
          ) {
            updateCart {
              _id        
              products        
            }
          }
        `,
        variables: {
          cartId,
          products,
          userId,
        },
      }),
    }),
  }),
});
