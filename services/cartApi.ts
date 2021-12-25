import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import type { CartItem } from "../interfaces";
import { gql } from "@apollo/client";

export const cartApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
  }),
  reducerPath: "cartItems",
  endpoints: (builder) => ({
    getCartItems: builder.query<
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
  }),
});

export const { useGetCartItemsQuery } = cartApi;
