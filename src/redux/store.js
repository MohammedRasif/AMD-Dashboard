import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./feature/authApi"; // ✅ Import authApi

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer, // ✅ Add authApi reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware), // ✅ Add API middleware
});

export default store;
