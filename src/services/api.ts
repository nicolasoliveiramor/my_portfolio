import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://portfolio-api-red-seven.vercel.app'
  }),
  endpoints: (builder) => ({
    getPresentation: builder.query<Ipresentation, void>({
      query: () => '/presentation'
    }),
    getSkills: builder.query<Iskills, void>({
      query: () => '/skills'
    }),
    getProjects: builder.query<Iprojects, void>({
      query: () => '/projects'
    })
  })
})

export const {
  useGetPresentationQuery,
  useGetSkillsQuery,
  useGetProjectsQuery
} = api
