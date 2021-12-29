import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "@apollo/client";
import { Sale, User, UserRequest } from "../types";

export const usersApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
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
      query: () => ({
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
export const {
  useCreateUserQuery,
  useDeleteUserQuery,
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateUserQuery,
} = usersApi;
