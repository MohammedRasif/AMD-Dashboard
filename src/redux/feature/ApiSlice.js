import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.10.153:8081/api",
    prepareHeaders: (headers, { getState }) => {
        const accessToken = localStorage.getItem("accessToken")
        console.log(accessToken);
        const token = getState().auth.token || accessToken
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
        return headers;
    },
});

export const ApiSlice = createApi({
    reducerPath: "ApiSlice",
    baseQuery,

    endpoints: (builder) => ({
        
        //createQuestion
        createQuestion: builder.mutation({
            query: (data) => ({
                url: "/question/section/create/admin/",
                method: "POST",
                body: data
            })
        }),

        // get question 
        getQuestion: builder.query({
            query: () => ({
                url: "/question/section/list/",
                method: "GET",
            })
        })
    }),
});

// Export hooks for usage in components
export const {  useCreateQuestionMutation, useGetQuestionQuery } = ApiSlice;

export default ApiSlice;