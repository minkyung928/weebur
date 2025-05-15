import { getProducts, searchProducts } from "@/app/services/products";
import { ProductListResponse } from "@/components/common/ProductList/ProductListView";
import { useInfiniteQuery } from "@tanstack/react-query";
import Error from "next/error";
import { useSearchParams } from "next/navigation";

export const useProductsQuery = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const sortBy = searchParams.get("sortBy") ?? "";
  const order = searchParams.get("order") ?? "";

  const isSearch = !!q;

  const query = useInfiniteQuery<
    ProductListResponse,
    Error,
    ProductListResponse,
    unknown[],
    number
  >({
    queryKey: isSearch
      ? ["searchProducts", q, sortBy, order]
      : ["products", { sortBy, order }],
    queryFn: ({ pageParam = 0 }) =>
      isSearch
        ? searchProducts({ q, limit: 20, skip: pageParam, sortBy, order })
        : getProducts(20, pageParam, sortBy, order),
    getNextPageParam: (lastPage) => {
      const { skip, limit, total } = lastPage;

      return skip + limit < total ? skip + limit : undefined;
    },
    initialPageParam: 0,
    staleTime: 500,
  });

  return { ...query, sortBy, order, q, isSearch };
};
