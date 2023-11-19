import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fahimx.pythonanywhere.com/api/",
  }),
  endpoints: (builder) => ({
    getWords: builder.query<any, void>({
      query: () => `words/`,
    }),
    getNextWords: builder.query<string, string>({
      query: (value) => `words/?cursor=${value}`,
    }),
  }),
});

export const { useGetWordsQuery, useGetNextWordsQuery } = apiSlice;
