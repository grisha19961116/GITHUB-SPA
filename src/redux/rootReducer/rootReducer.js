import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducerRepositories from '../repositories/reducer';
import reducerLoading from '../loading/reducer';

const contactPersistConfig = {
  key: 'repositories',
  storage: storage,
};

export const rootReducer = combineReducers({
  repositories: persistReducer(contactPersistConfig, reducerRepositories),
  isLoading: reducerLoading,
});
