import { apiService } from "../../api/apiService";

export const borderService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    // get data =================
    getBorder: builder.query({
      query: (postBody) => {
        return {
          url: "border",
          method: "GET",
          body: postBody,
        };
      },
    }),

    // create data ==================

    createBorder: builder.mutation({
      query: (postBody) => ({
        url: "border",
        method: "POST",
        body: postBody,
      }),
    }),
    // update data ================

    updateBorder: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `border/${id}`,
        method: "PUT",
        body: postBody,
      }),

      onQueryStarted({ id, postBody }, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data: { data, message } }) => {})
          .catch(({ error }) => {});
      },
    }),
  }),
});

export const {
  useGetBorderQuery,
  useCreateBorderMutation,
  useUpdateBorderMutation,
} = borderService;
