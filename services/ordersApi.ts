import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import type { Order } from "../types";
import { gql } from "@apollo/client";

export const orderApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
  }),
  reducerPath: "orders",
  endpoints: (builder) => ({
    getOrder: builder.query<Order, any>({
      query: () => ({
        document: gql`
          query order {
            order {
              _id
              userId
              products
              amount
            }
          }
        `,
      }),
    }),
    getOrders: builder.query<Order, any>({
      query: () => ({
        document: gql`
          query orders {
            orders {
              _id
              userId
              products
              amount
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetOrderQuery, useGetOrdersQuery } = orderApi;
