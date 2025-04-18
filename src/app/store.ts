import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '@/features/habits/habitsSlice';
import levelReducer from '@/features/level/levelSlice';
import themeReducer from '@/features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
    level: levelReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
