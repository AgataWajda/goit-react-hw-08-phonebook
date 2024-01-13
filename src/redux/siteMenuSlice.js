import { createSlice } from '@reduxjs/toolkit';

const siteMenu = createSlice({
  initialState: true,
  name: 'siteMenu',
  reducers: {
    changeState(state) {
      return !state;
    },
  },
});

export const siteMenuReducer = siteMenu.reducer;
export const { changeState } = siteMenu.actions;
