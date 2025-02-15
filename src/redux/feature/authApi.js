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
        sendForgetPassword: builder.mutation({
            query: (email) => ({
                url: "/user/forget-password/otp/send/",
                method: "POST",
                body: email
            })
        }),
        verifiyForgetPasswordOtp: builder.mutation({
            query:({email ,otp })=>({
                url:"/user/forget-password/otp/verify/",
                method:"POST",
                body:{email,otp}
            })
        }),
        resetPassword: builder.mutation({
            query: ({ email, otp, password, confirm_password }) => ({
                url: "/user/forget-password/otp/reset/",
                method: "POST",
                body: { email, otp, password, confirm_password }
            })
        })

    }),
});

// ✅ Export hooks for usage in components
export const { useLoginMutation , useSendForgetPasswordMutation,useVerifiyForgetPasswordOtpMutation,useResetPasswordMutation } = authApi;
export default authApi;
