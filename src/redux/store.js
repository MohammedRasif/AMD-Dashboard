import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./feature/authApi"; // ✅ Import authApi
import authReducer from "./authSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware), // ✅ Add API middleware
});

export default store;
