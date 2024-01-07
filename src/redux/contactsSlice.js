import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = { list: [], error: null, isLoading: false };

const contactsSlice = createSlice({
  initialState: contactsInitialState,
  name: 'contacts',
  extraReducers: builder => {
    builder

      // FETCH CONTACTS
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      //ADD CONTACT
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // DELETE CONTACT
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.list = state.list.filter(item => item.id !== action.payload.id);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
