import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ApiResponse from "../interfaces/ApiResponse";
import AuthRequest from "../interfaces/AuthRequest";
import User from "../interfaces/User";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Partial<User>, AuthRequest>({
      query: ({ email, password }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
        method: "POST",
        url: "/login",
      }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
    logout: builder.mutation<Partial<User>, AuthRequest>({
      query: ({ accessToken, refreshToken }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          accessToken,
          refreshToken,
        },
        method: "POST",
        url: "/logout",
      }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
    signup: builder.mutation<Partial<User>, AuthRequest>({
      query: ({ email, password }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
        method: "POST",
        url: "/signup",
      }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useSignupMutation } =
  authApi;
