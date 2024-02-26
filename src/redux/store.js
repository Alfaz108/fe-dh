import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./api/apiService";
import paginationReducer from "./features/paginationReducer";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
