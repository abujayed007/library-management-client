import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "libraryManagementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-alpha-two.vercel.app/api/",
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
        providesTags: ["books"],
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
        providesTags: ["books"],
      }),
      invalidatesTags: ["books"],
    }),
    getAllBorrow: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
        providesTags: ["borrow", "books"],
      }),
      invalidatesTags: ["books", "borrow"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useCreateBookMutation,
  useGetSingleBookQuery,
  useDeleteBookMutation,
  useGetAllBorrowQuery,
  useUpdateBookMutation,
  useBorrowBookMutation,
} = baseApi;
