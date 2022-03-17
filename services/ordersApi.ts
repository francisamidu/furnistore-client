import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import gql from "graphql-tag";
import { config } from "../config";
import type { Order, OrderRequest, Sale } from "../types";

export const ordersApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: `${config.NEXT_PUBLIC_SERVER_URL}/graphql`,
  }),
  reducerPath: "orders",
  endpoints: (builder) => ({
    cancelOrder: builder.query<{ cancelOrder: Order }, any>({
      query: (orderId) => ({
        document: gql`
          mutation cancelOrder($orderId: ID!) {
            cancelOrder(orderId: $orderId) {
              _id
            }
          }
        `,
        variables: {
          orderId,
        },
      }),
    }),
    createOrder: builder.query<{ createOrder: Order }, any>({
      query: ({ address, amount, products, userId }) => ({
        document: gql`
          mutation createOrder(
            $userId: ID!
            $products: [Object]!
            $amount: Int!
            $address: AddressInput!
          ) {
            createOrder(
              order: {
                amount: $amount
                address: $address
                products: $products
                userId: $userId
              }
            ) {
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
    deleteOrder: builder.query<{ deleteOrder: Order }, any>({
      query: (orderId) => ({
        document: gql`
          mutation deleteOrder($orderId: ID!) {
            deleteOrder(orderId: $orderId) {
              _id
            }
          }
        `,
        variables: {
          orderId,
        },
      }),
    }),
    getOrder: builder.query<{ order: Order }, any>({
      query: (orderId) => ({
        document: gql`
          query order($orderId: ID!) {
            order(orderId: $orderId) {
              _id
              userId
              products
              amount
            }
          }
        `,
        variables: {
          orderId,
        },
      }),
    }),
    getOrderStats: builder.query<{ orderStats: Sale }, any>({
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
    getOrders: builder.query<{ orders: Order[] }, any>({
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
    getOrderByUser: builder.query<{ orderByUser: Order }, any>({
      query: (userId) => ({
        document: gql`
          query orderByUser($userId: ID) {
            orderByUser(userId: $userId) {
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
    getOrdersByUser: builder.query<{ ordersByUser: Order[] }, any>({
      query: (userId) => ({
        document: gql`
          query ordersByUser($userId: ID) {
            ordersByUser(userId: $userId) {
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
    updateOrder: builder.query<{ updateOrder: Order }, any>({
      query: ({ address, amount, products, userId, orderId }) => ({
        document: gql`
          mutation updateOrder(
            $orderId: ID!
            $address: AddressInput!
            $amount: Int!
            $products: [Object]!
            $userId: ID!
          ) {
            updateOrder(
              orderId: $orderId
              order: {
                address: $address
                amount: $amount
                products: $products
                userId: $userId
              }
            ) {
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
