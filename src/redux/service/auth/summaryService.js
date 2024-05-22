import { apiService } from "../../api/apiService";

export const summaryService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    // get data =================
    getSummary: builder.query({
      query: (postBody) => {
        return {
          url: "summary",
          method: "GET",
          body: postBody,
        };
      },
    }),
  }),
});

export const { useGetSummaryQuery } = summaryService;
