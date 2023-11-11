import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { appReducer } from './appState/slice';
import { authReducer } from './auth/slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  appState: appReducer,
  auth: authPersistedReducer,
});
