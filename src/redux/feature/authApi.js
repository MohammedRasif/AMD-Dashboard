import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.10.153:8081/api", // ✅ Update this with your backend URL
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/user/login/email/", // ✅ Your API endpoint
                method: "POST",
                body: data, // ✅ Sending email & password
            }),
        }),
        
    }),
});

// ✅ Export hooks for usage in components
export const { useLoginMutation } = authApi;
export default authApi;
