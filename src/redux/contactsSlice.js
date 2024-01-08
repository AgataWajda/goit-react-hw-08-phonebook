import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = { list: [], error: null, isLoading: false };

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectedAction = action => {
  return action.type.endsWith('/rejected');
};

const contactsSlice = createSlice({
  initialState: contactsInitialState,
  name: 'contacts',
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.error = null;
        state.isLoading = false;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.list = state.list.filter(item => item.id !== action.payload.id);
        state.error = null;
        state.isLoading = false;
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected)
      .addDefaultCase(state => {
        state.error = 'someone use old function, fix it!';
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
