import { HabitState, Habit } from '@/types/habitTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: HabitState = {
  list: [],
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.list.push(action.payload);
    },
    removeHabit: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((h) => h.id !== action.payload);
    },
    toggleHabit: (state, action: PayloadAction<string>) => {
      const habit = state.list.find((h) => h.id === action.payload);
      if (habit) habit.completed = !habit.completed;
    },
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
