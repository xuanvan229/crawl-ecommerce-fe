import { Pagination } from "@/components/Pagination";
import { Product } from "@/components/Product";
import { Input } from "@/components/ui/input";
import { IProduct } from "@/types/product";
import { debounce } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { getProducts } from "../api/product";

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["products", page, search],
    queryFn: () => getProducts(page, search),
  });

  const onChangeSearchCallBack = useCallback(
    debounce((value: string) => {
      setPage(1);
      setSearch(value);
    }, 300),
    []
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearch(e.target.value);
    onChangeSearchCallBack(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen py-8 container">
      <div className="p-4 flex justify-end border-b mb-4">
        <Input
          defaultValue={search}
          onChange={onChangeSearch}
          className="w-[300px]"
          placeholder="Search"
        />
      </div>
      {isLoading && <div>Loading...</div>}
      <div className="flex-1">
        <div className="flex flex-wrap">
          {data?.products?.map((v: IProduct) => (
            <Product key={v.id} product={v} />
          ))}
        </div>
      </div>

      <div className="p-4">
        <Pagination
          totalPage={data?.pages}
          currentPage={page}
          onChangePage={setPage}
        />
      </div>
    </div>
  );
};
