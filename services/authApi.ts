import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import ApiResponse from "../interfaces/ApiResponse";
import AuthRequest from "../interfaces/AuthRequest";
import User from "../interfaces/User";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: config.NEXT_PUBLIC_SERVER_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Partial<User>, any>({
      query: ({ email, password }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
        method: "POST",
        url: "/login",
      }),
      // async onQueryStarted(_id,{ }){

      // }
    }),
    logout: builder.mutation<Partial<User>, any>({
      query: ({ accessToken, refreshToken }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          accessToken,
          refreshToken,
        },
        method: "POST",
        url: "/logout",
      }),
    }),
    signup: builder.mutation<Partial<User>, any>({
      query: ({ email, password }) => ({
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
        method: "POST",
        url: "/signup",
      }),
    }),
  }),
});
