import { LOAN_APPLICATIONS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const loanApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createLoan: builder.mutation({
      query: (data) => ({
        url: `${LOAN_APPLICATIONS_URL}/submit`,
        method: "POST",
        body: data,
      }),
    }),

    updateLoan: builder.mutation({
      query: (id, data) => ({
        url: `${LOAN_APPLICATIONS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    // getUsers: builder.query({
    //   query: ({ keyword = '', pageNumber = 1 }) => ({
    //     url: `${USERS_URL}`,
    //     params: {
    //       keyword: keyword || undefined,
    //       pageNumber: pageNumber || 1,
    //     },
    //   }),
    //   providesTags: ["Users"],
    //   keepUnusedDataFor: 5,
    // }),
  }),
});

export const { useCreateLoanMutation, useUpdateLoanMutation } = loanApiSlice;
