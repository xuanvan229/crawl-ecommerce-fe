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
  const { data } = useQuery({
    queryKey: ["products", page, search],
    queryFn: () => getProducts(page, search),
  });

  const onChangeSearchCallBack = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 300),
    []
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearch(e.target.value);
    onChangeSearchCallBack(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen py-8">
      <div className="p-4 flex justify-center">
        <Input
          defaultValue={search}
          onChange={onChangeSearch}
          className="w-[300px]"
          placeholder="Search"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {data?.products?.map((v: IProduct) => (
          <Product key={v.id} product={v} />
        ))}
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
