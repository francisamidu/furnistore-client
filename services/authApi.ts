import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ApiResponse from "../interfaces/ApiResponse";
import AuthRequest from "../interfaces/AuthRequest";
import User from "../interfaces/User";

const createRequest = (url: string, body: AuthRequest) => ({
  url,
  headers: {
    "Content-Type": "application/json",
  },
  body,
  method: "POST",
});

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/auth`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Partial<User>, AuthRequest>({
      query: ({ email, password }) =>
        createRequest("/login", { email, password }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
    logout: builder.mutation<Partial<User>, AuthRequest>({
      query: ({ accessToken, refreshToken }) =>
        createRequest("/logout", { accessToken, refreshToken }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
    signup: builder.mutation<Partial<User>, AuthRequest>({
      query: ({ email, password }) =>
        createRequest("/signup", { email, password }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useSignupMutation } =
  authApi;
