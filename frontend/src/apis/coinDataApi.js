import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../utils/baseUrl";


export const coinDataApi = createApi({
  reducerPath: 'coinDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({

    getAllCoinData: builder.query({
      query: () => ({
        url: `/getCoinData`,
        method: 'GET',
      }),
      providesTags: ['Coins']
    }),

    getAllCoinInfo: builder.query({
      query: (id) => ({
        url: `/getCoinInfo?id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Coins']
    }),
  })
})

export const { useGetAllCoinDataQuery, useGetAllCoinInfoQuery } = coinDataApi;