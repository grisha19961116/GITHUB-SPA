import { createReducer } from '@reduxjs/toolkit';
import { actionIsLoading } from './actions';

const reducerLoading = createReducer(false, {
  [actionIsLoading]: (_, { payload }) => payload,
});

export default reducerLoading;
