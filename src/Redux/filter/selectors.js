import { createSelector } from '@reduxjs/toolkit';
import { selectorContacts } from 'Redux/contacts/selectors';

export const selectorFilter = state => state.filter.filter;

export const selectorFilteredContacts = createSelector(
  selectorContacts,
  selectorFilter,
  (contacts, filter) =>
    contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts
);
