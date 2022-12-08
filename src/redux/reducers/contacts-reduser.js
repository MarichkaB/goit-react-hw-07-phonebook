import { addContact, deleteContact } from '../actions/action-contacts';
import { createReducer } from '@reduxjs/toolkit';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Kusya Vinogradova', number: '235-61-90' },
];

export const contactsReduser = createReducer(initContacts, {
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
