import { apiService } from "../../api/apiService";

export const userService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    userList: builder.query({
      query: () => ({
        url: `users`,
        method: "GET",
      }),
      transformResponse: ({ data }) => data || [],
    }),

    userCreate: builder.mutation({
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
  }),
});
export const { useUserCreateMutation, useUserListQuery } = userService;
