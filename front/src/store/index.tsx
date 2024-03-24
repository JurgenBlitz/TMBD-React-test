import { configureStore } from '@reduxjs/toolkit';
import movieAppSlice from './movieAppStore'

export const store = configureStore({
  reducer: {
    movieAppSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;