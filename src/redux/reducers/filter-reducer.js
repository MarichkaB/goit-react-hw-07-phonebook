import { createReducer } from '@reduxjs/toolkit';
import { filterChange } from 'redux/actions/action-filter';

export const filterReducer = createReducer('', {
  [filterChange]: (state, action) => action.payload,
});
