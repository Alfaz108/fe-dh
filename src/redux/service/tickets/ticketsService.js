import { apiService } from "../../api/apiService";

export const ticketsService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    ticketsList: builder.query({
      query: (url) => ({
        url: `tickets${url}`,
        method: "GET",
      }),
      transformResponse: (data) => data || [],
    }),

    ticketsCreate: builder.mutation({
      query: (postBody) => ({
        url: `users`,
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
    userUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `users/${id}`,
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
    userDelete: builder.mutation({
      query: ({ id }) => ({
        url: `users/${id}`,
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
export const { useTicketsListQuery, useTicketsCreateMutation } = ticketsService;
