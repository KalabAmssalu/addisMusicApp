import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const base = "http://localhost:3500/";

const baseQuery = fetchBaseQuery({
    baseUrl: base,
    credentials: 'include', // Include credentials (cookies) with each request
});


export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
});
