import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: ({ query, page }) => `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieDetailsQuery } = tmdbApi;
