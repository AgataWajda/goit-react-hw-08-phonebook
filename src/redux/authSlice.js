import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, currentUser } from './operations';

const initialState = {
  isLogged: false,
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
};
const setCommonState = (state, action) => {
  state.isLogged = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.token = action.payload.token;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, setCommonState)
      .addCase(login.fulfilled, setCommonState)
      .addCase(logout.fulfilled, () => initialState)
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLogged = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
