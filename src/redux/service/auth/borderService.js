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
      onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data }) => {
            // ToastMessage.successMessage(message);

            dispatch(
              apiService.util.updateQueryData(
                "getBorder",
                undefined,
                (draft) => {
                  draft.unshift(data?.data?.border);
                  return draft;
                }
              )
            );
          })
          .catch(({ error }) => {
            // if (error.status !== 400 || !Array.isArray(error?.data?.data)) {
            //   ToastMessage.errorMessage(error?.data?.message);
            // }
            console.log(error);
          });
      },
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
          .then(({ data }) => {
            // console.log("maruf bellah", data?.data);
            dispatch(
              apiService.util.updateQueryData(
                "getBorder",
                undefined,
                (draft) => {
                  const findIndex = draft?.findIndex((item) => item._id === id);
                  draft[findIndex] = data?.data;
                }
              )
            );
          })
          .catch(({ error }) => {
            console.log(error);
          });
      },
    }),

    deleteBorder: builder.mutation({
      query: ({ id }) => ({
        url: `border/${id}`,
        method: "DELETE",
      }),

      onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data }) => {
            // console.log("maruf bellah", data?.data);
            dispatch(
              apiService.util.updateQueryData(
                "getBorder",
                undefined,
                (draft) => {
                  return (draft = draft.filter((item) => item._id !== id));
                }
              )
            );
          })
          .catch(({ error }) => {
            console.log(error);
          });
      },
    }),
  }),
});

export const {
  useGetBorderQuery,
  useCreateBorderMutation,
  useUpdateBorderMutation,
  useDeleteBorderMutation,
} = borderService;
