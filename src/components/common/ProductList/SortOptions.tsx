import { useSearchParams } from "next/navigation";
import * as S from "./SortOptions.style";
import { SortOptionsProps } from "@/types/products.types";

export default function SortOptions({
  sortBy,
  order,
  onClickSort,
}: SortOptionsProps) {
  const searchParams = useSearchParams();
  const isRecommended = !sortBy && !order;
  const isPopular = sortBy === "rating" && order === "desc";

  const currentSearchParams = searchParams.get("q") ?? "";
  return (
    <S.Wrapper>
      <S.Rating
        $active={isRecommended}
        onClick={() => onClickSort({ sortBy: null, order: null })}
      >
        추천순
      </S.Rating>
      <S.Divider />
      <S.Rating
        $active={isPopular}
        onClick={() =>
          onClickSort({
            q: currentSearchParams || null,
            sortBy: "rating",
            order: "desc",
          })
        }
      >
        인기순
      </S.Rating>
    </S.Wrapper>
  );
}
