import { apiService } from "../../api/apiService";

export const invoiceService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    invoiceList: builder.query({
      query: (url) => ({
        url: `invoices${url}`,
        method: "GET",
      }),
      transformResponse: (data) => data || [],
    }),
    invoiceCreate: builder.mutation({
      query: (postBody) => ({
        url: `invoices`,
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
export const { useInvoiceListQuery, useInvoiceCreateMutation } = invoiceService;
