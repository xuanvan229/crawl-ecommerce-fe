import { instance } from "./axios";

export const getProducts = async (page: number, search: string) => {
  const url = `/products/`;
  const response = await instance.get(url, {
    params: {
      page,
      search,
    },
  });
  return response.data;
};
