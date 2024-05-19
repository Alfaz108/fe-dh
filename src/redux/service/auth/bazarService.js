import { apiService } from "../../api/apiService";

export const bazarService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    // get data =================
    getBazar: builder.query({
      query: (postBody) => {
        return {
          url: "bazar",
          method: "GET",
          body: postBody,
        };
      },
    }),

    // create data ==================

    createBazar: builder.mutation({
      query: (postBody) => ({
        url: "bazar",
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
                "getBazar",
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

    updateBazar: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `bazar/${id}`,
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
                "getBazar",
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

    deleteBazar: builder.mutation({
      query: ({ id }) => ({
        url: `bazar/${id}`,
        method: "DELETE",
      }),

      onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data }) => {
            // console.log("maruf bellah", data?.data);
            dispatch(
              apiService.util.updateQueryData(
                "getBazar",
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
  useCreateBazarMutation,
  useGetBazarQuery,
  useDeleteBazarMutation,
} = bazarService;
