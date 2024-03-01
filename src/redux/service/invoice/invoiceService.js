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
  }),
});
export const { useInvoiceListQuery } = invoiceService;
