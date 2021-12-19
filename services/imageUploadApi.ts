import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { ImageRequest, ImageResponse } from "../interfaces";

const headers = {
  "Content-Type": "application/json",
  "x-auth-token": "",
  method: "PUT",
};

const createRequest = (url: string, body: FormData) => ({
  body,
  headers,
  url,
});

const imageUploadApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  reducerPath: "image",
  endpoints: (builder) => ({
    upload: builder.mutation<ImageResponse, ImageRequest>({
      query: ({ file }) => createRequest("/api/upload-image", file),
    }),
  }),
});

export const { useUploadMutation } = imageUploadApi;
