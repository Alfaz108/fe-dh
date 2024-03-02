import { convertDropdownToArrayList } from "../../../helpers/convertDropdownToArrayList";
import { apiService } from "../../api/apiService";

export const categoryService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    categoryLIst: builder.query({
      query: (url) => ({
        url: `categories${url}`,
        method: "GET",
      }),
      transformResponse: (data) => data || [],
    }),

    categoryDropdown: builder.query({
      query: () => ({
        url: `categories`,
        method: "GET",
      }),
      transformResponse: (data) => convertDropdownToArrayList(data?.data) || [],
    }),
    categoryCreate: builder.mutation({
      query: (postBody) => ({
        url: `categories`,
        method: "POST",
        body: postBody,
      }),
      async onQueryStarted({ postBody }, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { data, message },
          } = await queryFulfilled;
        } catch (error) {}
      },
    }),
    categoryUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `categories/${id}`,
        method: "PATCH",
        body: postBody,
      }),
      onQueryStarted({ id, postBody }, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data: { data, message } }) => {})
          .catch(({ error }) => {});
      },
    }),
    categoryDelete: builder.mutation({
      query: ({ id }) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data: { data, message } }) => {})
          .catch(({ error }) => {});
      },
    }),
  }),
});
export const {
  useCategoryLIstQuery,
  useCategoryCreateMutation,
  useCategoryUpdateMutation,
  useCategoryDeleteMutation,
  useCategoryDropdownQuery,
} = categoryService;
