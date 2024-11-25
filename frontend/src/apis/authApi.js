import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../utils/baseUrl'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({

    userSignUp: builder.mutation({
      query: (formData) => ({
        url: '/signup',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['User']
    }),

    userSignIn: builder.mutation({
      query: (formData) => ({
        url: '/signin',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['User']
    }),

    userSignOut: builder.mutation({
      query: () => ({
        url: '/signout',
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),

  })
})

export const { useUserSignInMutation, useUserSignUpMutation, useUserSignOutMutation } = authApi;