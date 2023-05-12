import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../store/user/userSlice';

const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

export default store