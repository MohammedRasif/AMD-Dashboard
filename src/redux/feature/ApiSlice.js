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
    tagTypes: ["question", "addQuestion"],
    endpoints: (builder) => ({

        // Create Question
        createQuestion: builder.mutation({
            query: (data) => ({
                url: "/question/section/create/admin/",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["question"]  
        }),

        // Get Question
        getQuestion: builder.query({
            query: () => ({
                url: "/question/section/list/with-added-q/admin/",
                method: "GET"
            }),
            providesTags: ["question"],
            keepUnusedDataFor: 0,  
            refetchOnMountOrArgChange: true  
        }),

        // Edit Question
        editQuestion: builder.mutation({
            query: ({ id, question }) => ({
                url: `/question/section/${id}/admin/`,
                method: "PATCH",
                body: question
            }),
            invalidatesTags: ["question"]
        }),

        // Delete Question
        deleteQuestion: builder.mutation({
            query: (id) => ({
                url: `/question/section/${id}/admin/`,
                method: "DELETE"
            }),
            invalidatesTags: ["question"]
        }),

        // Get Question Data
        getQuestionData: builder.query({
            query: (id) => ({
                url: `/question/list/admin/?section=${id}`,
                method: "GET",
            }),
            providesTags: ["question"],
            keepUnusedDataFor: 0,
            refetchOnMountOrArgChange: true
        }),

        // Create Question Section
        createQuestionSetion: builder.mutation({
            query: (addQuestion) => ({
                url: "/question/create/admin/",
                method: "POST",
                body: addQuestion
            }),
            invalidatesTags: ["question"]
        }),

        // Delete Question Section
        deleteQuestionSection: builder.mutation({
            query: (id) => ({
                url: `/question/${id}/admin/`,
                method: "DELETE",
            }),
            invalidatesTags: ["question"]
        }),

        // Edit Question Section
        editQuestionSection: builder.mutation({
            query: ({ id, question }) => ({
                url: `/question/${id}/admin/`,
                method: "PATCH",
                body: question
            }),
            invalidatesTags: ["question"]
        })

    }),
});


// Export hooks for usage in components
export const { useCreateQuestionMutation, useGetQuestionQuery, useEditQuestionMutation, useDeleteQuestionMutation, useGetQuestionDataQuery, useCreateQuestionSetionMutation, useDeleteQuestionSectionMutation , useEditQuestionSectionMutation } = ApiSlice;

export default ApiSlice;

