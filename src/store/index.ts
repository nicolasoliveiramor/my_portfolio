import { configureStore } from '@reduxjs/toolkit'

import { api } from '../services/api'

import renderReducer from './reducers/render'

export const store = configureStore({
  reducer: {
    render: renderReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

