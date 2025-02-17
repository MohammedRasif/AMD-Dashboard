import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;

             // Remove tokens from localStorage when logging out
             localStorage.removeItem("access_token");
             localStorage.removeItem("refresh_token");
        }
    }
})

export const {logout,setUser} = authSlice.actions;

export default authSlice.reducer;