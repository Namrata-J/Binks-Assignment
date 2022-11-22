import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    error: "",
    loading: false,
    usersList: [],
    userDetail: {}
}

const getUsersList = createAsyncThunk("users/getUsersList", async(thunkAPI) => {
    try {
        const response = await axios.get("https://randomuser.me/api/?results=10");
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue();
    }
});

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUserDetail: (state, action) => {
            const foundUser = state.usersList.find((user) => user.login.uuid === action.payload._id)
            state.userDetail = foundUser ?? {}
        }
    },
    extraReducers: {
        [getUsersList.pending]: (state) => {
            state.loading = true
        },
        [getUsersList.fulfilled]: (state, action) => {
            state.error = ""
            state.loading = false
            state.usersList = action?.payload?.results ? action?.payload?.results : []
        },
        [getUsersList.rejected]: (state) => {
            state.loading = false
            state.error = "Oops!!! Something went wrong"
        }
    }
});

export { getUsersList };
const { reducer, actions } = userSlice;
export const { getUserDetail } = actions;
export { reducer };