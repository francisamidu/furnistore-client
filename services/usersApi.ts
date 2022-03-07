import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import gql from "graphql-tag";
import { Sale, User } from "../types";

export const usersApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: `${process.env.NEXT_PUBLIC_SERVERL_URL}/graphql`,
  }),
  reducerPath: "users",
  endpoints: (builder) => ({
    createUser: builder.query<User, any>({
      query: ({ avatar, email, gender, password }) => ({
        document: gql`
          mutation createUser(
            avatar: String
                email: String
                gender: String
                password: String
          ) {
            createUser(
              user: {
                avatar: $avatar
                email: $email
                gender: $gender
                password: $password
              }
            ) {             
              email
              isVerified
              isAdmin
              avatar
            }
          }
        `,
        variables: {
          avatar,
          email,
          gender,
          password,
        },
      }),
    }),
    deleteUser: builder.query<User, any>({
      query: ({ id }) => ({
        document: gql`
          query deleteUser {
            deleteUser(userId: $id) {
              _id
              email
              isVerified
              isAdmin
              avatar
            }
          }
        `,
        variables: {
          id,
        },
      }),
    }),
    getUser: builder.query<any, any>({
      query: () => ({
        document: gql`
          query user {
            user {
              _id
              email
              isVerified
              isAdmin
              avatar
            }
          }
        `,
      }),
    }),
    getUserStats: builder.query<Sale, any>({
      query: () => ({
        document: gql`
          query userStats {
            userStats {
              _id
              total
            }
          }
        `,
      }),
    }),
    getUsers: builder.query<any, any>({
      query: ({ token }) => ({
        document: gql`
          query users {
            users {
              _id
              email
              isVerified
              isAdmin
              avatar
            }
          }
        `,
      }),
      async onQueryStarted(_, { getState, queryFulfilled }) {
        const state = getState();
        console.log(state);
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateUser: builder.query<User, any>({
      query: ({ avatar, email, gender, password }) => ({
        document: gql`
          mutation updateUser(
              avatar: String
              email: String
              gender: String
              password: String
          ) {
            updateUser(
              user: {
                avatar: $avatar
                email: $email
                gender: $gender
                password: $password
              }
            ) {
              _id
              email
              isVerified
              isAdmin
              avatar
            }
          }
        `,
        variables: {
          avatar,
          email,
          gender,
          password,
        },
      }),
    }),
  }),
});
