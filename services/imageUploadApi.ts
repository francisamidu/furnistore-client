import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

import type { ImageRequest, ImageResponse } from "../interfaces";

export const imageUploadApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.NEXT_PUBLIC_SERVER_URL,
  }),
  reducerPath: "image",
  endpoints: (builder) => ({
    uploadImage: builder.mutation<ImageResponse & any, ImageRequest>({
      query: ({ file }) => ({
        url: `${config.NEXT_PUBLIC_SERVER_URL}/api/upload-image`,
        body: file,
        method: "PUT",
      }),
    }),
  }),
});
