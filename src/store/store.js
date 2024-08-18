import { configureStore } from '@reduxjs/toolkit';
import ResumeReducer from './reducers/ResumeReducer';

const store = configureStore({
  reducer: {
    resume : ResumeReducer
  },
});

export default store;
