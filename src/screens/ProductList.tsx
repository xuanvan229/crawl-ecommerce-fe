import { Pagination } from "@/components/Pagination";
import { Product } from "@/components/Product";
import { Input } from "@/components/ui/input";
import { IProduct } from "@/types/product";
import { debounce } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { getCategories, getProducts } from "../api/product";
import { ProductFilter } from "./Filter";

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["products", page, search, category],
    queryFn: () => getProducts(page, search, category),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const onChangeSearchCallBack = useCallback(
    debounce((value: string) => {
      setPage(1);
      setSearch(value);
    }, 300),
    []
  );

  console.log("categories", categories);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearch(e.target.value);
    onChangeSearchCallBack(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex border-b mb-4 ">
        <div className="py-4 flex justify-end container">
          <div className="px-2 flex">
            <Input
              defaultValue={search}
              onChange={onChangeSearch}
              className="w-[300px] mr-4"
              placeholder="Search"
            />

            <ProductFilter
              categories={categories || []}
              category={category}
              onChangeCategory={setCategory}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col container flex-1">
        {isLoading && <div>Loading...</div>}
        <div className="flex-1">
          <div className="flex flex-wrap">
            {data?.products?.map((v: IProduct) => (
              <Product key={v.id} product={v} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex container justify-end">
        <div className="p-4">
          <Pagination
            totalPage={data?.pages}
            currentPage={page}
            onChangePage={setPage}
          />
        </div>
      </div>
    </div>
  );
};
