import * as S from "./ProductList.style";
import SortOptions from "./SortOptions";
import ProductItem from "./ProductItem";
import Image from "next/image";
import { createQueryString } from "@/utils/url";
import { useRouter } from "next/navigation";
import { ProductListViewProps } from "@/types/products";

export default function ProductListView({
  data,
  hasNextPage,
  isGridView,
  isFetchingNextPage,
  ref,
  sortBy,
  order,
  pathname,
  searchParams,
}: ProductListViewProps) {
  const router = useRouter();

  return (
    <>
      <S.ProductListHeader>
        <S.ResultSummary>총 {data?.pages[0].total} 개</S.ResultSummary>
        <SortOptions
          sortBy={sortBy}
          order={order}
          onClickSort={(sort) => {
            const query = createQueryString(searchParams, sort);
            router.push(`${pathname}?${query}`);
          }}
        />
      </S.ProductListHeader>
      <S.Grid $isGridView={isGridView}>
        {data?.pages
          .flatMap((p) => p.products)
          .map((item) => (
            <ProductItem key={item.id} product={item} isGridView={isGridView} />
          ))}

        {hasNextPage && <span ref={ref} />}
      </S.Grid>
      {data?.pages[0]?.total !== 0 && !hasNextPage && !isFetchingNextPage && (
        <S.NoResultContainer>
          <Image
            src="https://cdndev.weebur.com/assets/emojis/workshop/screen_search_desktop.svg"
            width={100}
            height={100}
            alt="noResult"
          />
          <S.NoResultHeader>더 이상 불러올 수 없습니다.</S.NoResultHeader>
        </S.NoResultContainer>
      )}

      {data?.pages[0].total === 0 && (
        <S.NoResultContainer>
          <Image
            src="https://cdndev.weebur.com/assets/emojis/workshop/screen_search_desktop.svg"
            width={100}
            height={100}
            alt="noResult"
          />
          <S.NoResultHeader>일치하는 결과가 없습니다.</S.NoResultHeader>
          <S.NoResultList>
            <li>검색어의 철자가 정확한지 확인해 주세요.</li>
            <li>비슷한 다른 검색어를 입력해 보세요.</li>
          </S.NoResultList>
        </S.NoResultContainer>
      )}
    </>
  );
}
