// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const roomHeroApi = createApi({
  reducerPath: "roomHeroApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3030/api/v1/",
  }),
  endpoints: (builder) => ({
    suppliers: builder.query({
      query: () => "/supplier",
    }),
    addSupplier: builder.mutation({
      query: (supplier) => ({
        url: "/supplier",
        method: "POST",
        body: supplier,
        mode: "no-cors",
      }),
      invalidatesTags: ["supplier"],
    }),
  }),
});

export const { useSuppliersQuery, useAddSupplierMutation } = roomHeroApi;
