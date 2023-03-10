import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from './auth/sliceAuth';
import roadmaps from './roadmaps/roadmapsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const appReducers = combineReducers({
  auth: authReducer,
  roadmaps: roadmaps,
  devTools: true,
});

const persistedReducer = persistReducer(persistConfig, appReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
