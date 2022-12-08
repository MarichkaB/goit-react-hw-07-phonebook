import { combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts-reduser';
import { filterReducer } from './filter-reducer';

export const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});
