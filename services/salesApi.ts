import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import gql from "graphql-tag";
import { config } from "../config";
import { Sale } from "../types";

export const salesApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: `${config.NEXT_PUBLIC_SERVER_URL}/graphql`,
  }),
  reducerPath: "sales",
  endpoints: (builder) => ({
    getSales: builder.query<Sale, any>({
      query: () => ({
        document: gql`
          query sales {
            sales {
              _id
              total
            }
          }
        `,
      }),
    }),
  }),
});
