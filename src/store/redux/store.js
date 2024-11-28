import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer, // Aquí puedes añadir más slices
  },
});

export default store;
