import { configureStore } from '@reduxjs/toolkit';
import roadmaps from './roadmaps/roadmapsSlice';

export const store = configureStore({
  reducer: {roadmaps},
  devTools: true
});
