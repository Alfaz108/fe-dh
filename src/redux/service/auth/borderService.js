import { apiService } from "../../api/apiService";

export const borderService = apiService.injectEndpoints({
    endpoints: (builder) =>({
        createBorder: builder.mutation({
            query: (postBody) =>({
                url: "border",
                method: "POST",
                body: postBody,
            }),
        }),
    }),
});

export const {useCreateBorderMutation} = borderService;