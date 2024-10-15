import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.weatherapi.com/v1',
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `current.json?key=YOUR_API_KEY&q=${city}&aqi=no`,
    }),
  }),
});

export const { useGetWeatherByCity } = weatherApi; // Make sure this is "useGetWeatherByCityQuery"
