import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import type { CartItem } from "../interfaces";
import gql from "graphql-tag";
import { CartRequest } from "../types";
import { config } from "../config";

export const cartApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: config.NEXT_PUBLIC_SERVER_URL,
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
            cart(cartId: $cartId) {
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
          mutation createCart($products: [Object]!, $userId: ID!) {
            createCart(cart: { products: $products, userId: $userId }) {
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
          mutation deleteCart($cartId: ID!) {
            deleteCart(cartId: $cartId) {
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
            $cartId: ID!
            $userId: ID!
            $products: [Object]!
          ) {
            updateCart(
              cartId: $cartId
              cart: { userId: $userId, products: $products }
            ) {
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
