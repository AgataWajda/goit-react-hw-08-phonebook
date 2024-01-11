import { createSelector } from '@reduxjs/toolkit';

export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsLogged = state => state.auth.isLogged;
export const selectUsername = state => state.auth.user.name;

const selectContacts = state => state.contacts.list;
const selectFilter = state => state.filter;

export const selectFilterContacts = createSelector(
  [selectContacts, selectFilter],
  (unfilterContacts, filter) => {
    const contacts =
      unfilterContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) || [];
    return contacts;
  }
);
