import { combineReducers } from '@reduxjs/toolkit';
import helloReducer from '@/features/hello/helloSlice'; // Otro reducer, como ejemplo

const rootReducer = combineReducers({
  hello: helloReducer, // example feature
});

export default rootReducer;