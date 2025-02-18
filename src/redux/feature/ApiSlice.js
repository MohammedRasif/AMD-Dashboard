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
    tagTypes: ["question" , "addQuestion"],
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
                providesTags: ["question"]
            }),
            providesTags: ["question"]

        }),

        // edite question
        editQuestion: builder.mutation({
            query: ({ id, question }) => ({
                url: `/question/section/${id}/admin/`,
                method: "PATCH",
                body: question
            }),
            invalidatesTags: ["question"]
        }),
        // question delete
        deleteQuestion: builder.mutation({
            query: (id) => ({
                url: `/question/section/${id}/admin/`,
                method: "DELETE"
            }),
            invalidatesTags: ["question"]
        }),

        getQuestionData: builder.query({
            query: (id) => ({
                url: `/question/list/${id}/admin/`,
                method: "GET",
            }),
            invalidatesTags: ["question"]
        }),
        // create question section
        createQuestionSetion:builder.mutation({
            query:(addQuestion) =>({
                url:"/question/create/admin/",
                method:"POST",
                body:addQuestion
            }),
            providesTags:["question"]
        }),

        deleteQuestionSection: builder.mutation({
            query:(id) =>({
                url:`/question/${id}/admin/`,
                method:"DELETE",
               
            }),
            invalidatesTags:["question"]
        })

    }),
});

// Export hooks for usage in components
export const { useCreateQuestionMutation, useGetQuestionQuery, useEditQuestionMutation, useDeleteQuestionMutation, useGetQuestionDataQuery ,useCreateQuestionSetionMutation , useDeleteQuestionSectionMutation } = ApiSlice;

export default ApiSlice;

