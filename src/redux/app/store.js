import { configureStore } from '@reduxjs/toolkit';
import { reducer as userReducer } from "../features/user/userSlice";
import { reducer as authReducer } from "../features/authentication/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
})

export { store };