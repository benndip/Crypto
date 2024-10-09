import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from './reducers/coinSlice'
import { trendingSearchApi } from './reducers/trendingSearchSlice'

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [trendingSearchApi.reducerPath]: trendingSearchApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, trendingSearchApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch