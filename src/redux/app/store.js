import { configureStore } from '@reduxjs/toolkit';
import { reducer as authReducer } from "../features/authentication/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer
  },
})

export { store };