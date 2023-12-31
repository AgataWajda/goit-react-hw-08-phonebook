import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { list: [], error: null };

const contactsSlice = createSlice({
  initialState: contactsInitialState,
  name: 'contacts',
  reducers: {
    addContact(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
