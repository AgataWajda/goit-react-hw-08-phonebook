import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsInitialState = { list: [], error: null, isLoading: false };

const contactsSlice = createSlice({
  initialState: contactsInitialState,
  name: 'contacts',
  extraReducers: builder => {
    // addContact(state, action) {
    //   state.list.push(action.payload);
    //   localStorage.setItem(
    //     'contacts',
    //     JSON.stringify(state.list, action.payload)
    //   );
    // },
    builder
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
      });

    // deleteContact(state, action) {
    //   state.list = state.list.filter(item => item.id !== action.payload);
    //   localStorage.setItem('contacts', JSON.stringify(state.list));
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
