import { instance } from "./axios";
import { PRODUCT } from "./endpoint";

export const getProducts = async (
  page: number,
  search: string,
  category: string
) => {
  const response = await instance.get(PRODUCT.GET_PRODUCTS(), {
    params: {
      page,
      search,
      category,
    },
  });
  return response.data;
};

export const getCategories = async () => {
  const response = await instance.get(PRODUCT.GET_CATEGORY());
  return response.data.categories;
};
