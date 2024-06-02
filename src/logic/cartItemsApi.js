import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartItemsSlice = createApi({
  reducerPath: "cartItemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["items"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["items"],
    })
  }),
});

export const { useGetAllProductsQuery} = cartItemsSlice;

