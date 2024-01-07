import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  initialState: '',
  name: 'filter',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
