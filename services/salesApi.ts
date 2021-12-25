import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "@apollo/client";
import { Sale } from "../types";

export const salesApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:5000/graphql",
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
export const { useGetSalesQuery } = salesApi;
