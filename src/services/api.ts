import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://portfolio-api-eight.vercel.app'
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<MyProfile, void>({
      query: () => '/profile'
    })
  })
})

export const { useGetProfileQuery } = api