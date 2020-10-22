import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import socialMediaReducer from '../features/layout/footer/socialMedia/socialMediaSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    socialMedia: socialMediaReducer,
  },
});
