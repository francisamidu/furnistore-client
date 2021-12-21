import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { ImageRequest, ImageResponse } from "../interfaces";

export const imageUploadApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  reducerPath: "image",
  endpoints: (builder) => ({
    uploadImage: builder.mutation<ImageResponse, ImageRequest>({
      query: ({ file }) => ({
        url: "http://localhost:5000/api/upload-image",
        body: file,
        method: "PUT",
      }),
      transformResponse: (response: ImageResponse): Promise<any> =>
        response.data,
    }),
  }),
});

export const { useUploadImageMutation } = imageUploadApi;
