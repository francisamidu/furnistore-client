import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "@apollo/client";
import type { Order, OrderRequest, Sale } from "../types";

export const ordersApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
  }),
  reducerPath: "orders",
  endpoints: (builder) => ({
    cancelOrder: builder.query<Order, any>({
      query: ({ orderId }) => ({
        document: gql`
          mutation cancelOrder(
            orderId
          ) {
            cancelOrder {
              _id
            }
          }
        `,
        variables: {
          orderId,
        },
      }),
    }),
    createOrder: builder.query<Order, any>({
      query: ({ address, amount, products, userId }) => ({
        document: gql`
          mutation createOrder(
            userId: ID!
        products: [Object]!
        amount: Int!
        address: AddressInput!
          ) {
            createOrder {
              _id
        userId
        products
        amount
        address
            }
          }
        `,
        variables: {
          address,
          amount,
          products,
          userId,
        },
      }),
    }),
    deleteOrder: builder.query<Order, any>({
      query: ({ orderId }) => ({
        document: gql`
          mutation deleteOrder(
            orderId: ID!
          ) {
            deleteOrder {
              _id        
            }
          }
        `,
        variables: {
          orderId,
        },
      }),
    }),
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
    getOrderStats: builder.query<Sale, any>({
      query: () => ({
        document: gql`
          query orderStats {
            orderStats {
              _id
              total
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
    getOrderByUser: builder.query<Order, any>({
      query: ({ userId }) => ({
        document: gql`
          query orderByUser(
            userId:ID
          ) {
            orderByUser{
              _id
              userId
              products
              amount
            }
          }
        `,
        variables: {
          userId,
        },
      }),
    }),
    getOrdersByUser: builder.query<Order, any>({
      query: ({ userId }) => ({
        document: gql`
          query ordersByUser(
            userId:ID
          ) {
            ordersByUser{
              _id
              userId
              products
              amount
            }
          }
        `,
        variables: {
          userId,
        },
      }),
    }),
    updateOrder: builder.query<Order, any>({
      query: ({ address, amount, products, userId, orderId }) => ({
        document: gql`
          mutation updateOrder(
            orderId
            userId: ID!
            products: [Object]!
            amount: Int!
            address: AddressInput!
          ) {
            updateOrder {
              _id
              userId
              products
              amount
              address
            }
          }
        `,
        variables: {
          address,
          amount,
          orderId,
          products,
          userId,
        },
      }),
    }),
  }),
});

export const {
  useCancelOrderQuery,
  useCreateOrderQuery,
  useDeleteOrderQuery,
  useGetOrderByUserQuery,
  useGetOrderQuery,
  useGetOrderStatsQuery,
  useGetOrdersByUserQuery,
  useGetOrdersQuery,
  useUpdateOrderQuery,
} = ordersApi;
