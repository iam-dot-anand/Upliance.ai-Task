import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/CounterSlice';
import formReducer from './slices/FormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
  },
});
