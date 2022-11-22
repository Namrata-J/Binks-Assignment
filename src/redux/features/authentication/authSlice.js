import { createSlice } from "@reduxjs/toolkit";

const userLoggedInStatus = localStorage.getItem("userLoggedInStatus");

const initialState = {
    logInHelperText: "",
    isUserLoggedIn: userLoggedInStatus === "true" ? true : false,
}

const regex = /[A-Za-z0-9_.]{3,}@[A-Za-z]{5}[.]{1}[a-z]{2,3}/;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logInHandler: (state, action) => {
            if(action.payload.logInEmail !== '' && action.payload.logInPwd !== '' && action.payload.logInUsername !== '') {
                if(regex.test(action.payload.logInEmail))  {
                    state.isUserLoggedIn = true;
                    localStorage.setItem("userLoggedInStatus", true);
                } else {
                    state.logInHelperText = "Invalid email address"
                }
            } else {
                state.logInHelperText = "Please fill out all the fields"
            }
        },
        logOutHandler: (state) => {
            state.isUserLoggedIn = false;
            localStorage.setItem("userLoggedInStatus", false);
        },
        resetLogInHelperText: (state) => {
            state.logInHelperText = ""
        } 
    }
});

const { reducer, actions } = authSlice;
export const { logInHandler, logOutHandler, resetLogInHelperText } = actions;
export { reducer };