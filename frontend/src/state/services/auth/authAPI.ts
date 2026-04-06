import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../lib/axiosBaseQuery";
import type { ApiResponse, AuthResponse } from "../../../types/authTypes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signup: builder.mutation<ApiResponse<AuthResponse>, any>({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        data,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation<ApiResponse<AuthResponse>, any>({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        data,
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation<ApiResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    checkAuth: builder.query<ApiResponse<AuthResponse>, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useCheckAuthQuery,
} = authApi;
