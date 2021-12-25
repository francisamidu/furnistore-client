import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "@apollo/client";
export const usersApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http//your-cool-api/graphql",
  }),
  reducerPath: "users",
  endpoints: (builder) => ({
    getQuery: builder.query<any, any>({
      query: () => ({
        document: gql`
query queryName {

}
`,
      }),
    }),
  }),
});
export const { useGetQueryQuery } = usersApi;
