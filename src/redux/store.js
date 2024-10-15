import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './FetchDataSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer, // Ensure this reducer is added
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware), // Ensure middleware is added
});

export default store;
