"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PageContainer from "../PageContainer";
import SkeletonPostType from "../Skeleton/PostType";
import ProductListView from "./ProductListView";

import { useViewMode } from "@/hooks";
import { useProductsQuery } from "@/hooks/ui/useProductsQuery";

const ProductListContainer = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    sortBy,
    order,
  } = useProductsQuery();

  const { ref, inView } = useInView({ rootMargin: "25px" });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  const isGridView = useViewMode() === "grid";
  const showSkeleton = isFetching && !data;

  return (
    <PageContainer>
      {showSkeleton &&
        Array.from({ length: 8 }).map((_, i) => (
          <SkeletonPostType key={i} isGridView={isGridView} />
        ))}
      {data && (
        <ProductListView
          data={data}
          hasNextPage={hasNextPage}
          isGridView={isGridView}
          isFetchingNextPage={isFetchingNextPage}
          ref={ref}
          sortBy={sortBy}
          order={order}
          pathname={pathname}
          searchParams={searchParams}
        />
      )}
    </PageContainer>
  );
};

export default ProductListContainer;
