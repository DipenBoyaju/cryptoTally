import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    addCoin: builder.mutation({
      query: (formData) => ({
        url: '/addCoin',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['Coin']
    }),

    getCoin: builder.query({
      query: () => ({
        url: '/getCoins',
        method: 'GET',
      }),
      providesTags: ['Coin']
    }),
  })
})

export const { useAddCoinMutation, useGetCoinQuery } = coinApi;