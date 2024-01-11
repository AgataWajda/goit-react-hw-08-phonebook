import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const initialState = {
  isLogged: false,
  user: { name: null, email: null },
  token: null,
};
const setCommonState = (state, action) => {
  state.isLogged = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.user.token = action.payload.token;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, setCommonState)
      .addCase(login.fulfilled, setCommonState)
      .addCase(logout.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
