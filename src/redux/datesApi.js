import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const datesApi = createApi({
    reducerPath: 'datesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://medart.softstars.uz/api/'}),
    endpoints: (build) => ({
        getDates: build.query({
            query: (limit = '') => `/operations?${limit && `_limit=${limit}`}`
        }),
        getData: build.query({
            query: (name) => `${name}`
        }),
        getSingle: build.query({
            query: (id) => `${id}`
        }),
    })
})

export const {useGetDatesQuery, useGetDateQuery, useGetServiceQuery, useGetDataQuery,useGetSingleQuery} = datesApi;