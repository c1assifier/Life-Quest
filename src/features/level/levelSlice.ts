import { LevelState } from "@/types/levelTypes"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: LevelState = {
    level: 1,
    xp: 0,
  }
  
  const levelSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
      addXP: (state, action: PayloadAction<number>) => {
        state.xp += action.payload
        if (state.xp >= 100) {
          state.level += 1
          state.xp = state.xp - 100
        }
      },
    },
  })
  
  export const { addXP } = levelSlice.actions
  export default levelSlice.reducer