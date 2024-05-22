import { apiService } from "../../api/apiService";
import toast, { Toaster } from "react-hot-toast";

export const depositService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    // get data =================
    getDeposit: builder.query({
      query: (postBody) => {
        return {
          url: "deposit",
          method: "GET",
          body: postBody,
        };
      },
    }),

    // create data ==================

    createDeposit: builder.mutation({
      query: (postBody) => ({
        url: "deposit",
        method: "POST",
        body: postBody,
      }),
      onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data }) => {
            // ToastMessage.successMessage(message);
            toast.success("Data is created");

            dispatch(
              apiService.util.updateQueryData(
                "getDeposit",
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

    updateDeposit: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `deposit/${id}`,
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
                "getDeposit",
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

    deleteDeposit: builder.mutation({
      query: ({ id }) => ({
        url: `deposit/${id}`,
        method: "DELETE",
      }),

      onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        queryFulfilled;
        queryFulfilled
          .then(({ data }) => {
            // console.log("maruf bellah", data?.data);
            dispatch(
              apiService.util.updateQueryData(
                "getDeposit",
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

export const { useCreateDepositMutation, useGetDepositQuery } = depositService;
