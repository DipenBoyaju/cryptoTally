import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";
import userReducer from '../features/auth/authSlice.js'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import { coinApi } from "../apis/coinApi.js";


const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [coinApi.reducerPath]: coinApi.reducer,
  user: userReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['token', 'authApi', 'coinApi']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: false,
    }
  ).concat(
    authApi.middleware,
    coinApi.middleware,
  )
})

export const persistor = persistStore(store)