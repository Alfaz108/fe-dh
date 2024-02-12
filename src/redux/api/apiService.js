
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiPrefix, baseURL } from "../../config";

const getBearerToken = () => {
  return localStorage.getItem("token");
};

const baseQuery =fetchBaseQuery({
    baseUrl: baseURL+apiPrefix,
    prepareHeaders: (headers) => {
      const token = getBearerToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  })

  export const apiService = createApi({
    reducerPath: apiPrefix,
    baseQuery: baseQuery,
    endpoints: () => ({}),
  });