import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const apiURL = "http://localhost:3001";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/products',
		}),
	}),

	//  /* *** */ 
});



export const {
  useGetProductsQuery
} = apiSlice
