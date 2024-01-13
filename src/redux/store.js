import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';
import persistStore from 'redux-persist/es/persistStore';
import { siteMenuReducer } from './siteMenuSlice';

const authPersistCfg = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistCfg, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
    siteMenu: siteMenuReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
