// Importing store as named import
import { store } from "../redux/store";

export const getURL = (route) => {
  const { page, limit } = store.getState().pagination;

  let URL = `${route}`;
  if (page) URL += `?page=${page}`;
  if (limit) URL += `&limit=${limit}`;

  return URL;
};
