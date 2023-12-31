import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  initialState: '',
  name: 'filter',
  reducers: {},
});

export const filterReducer = filterSlice.reducer;
