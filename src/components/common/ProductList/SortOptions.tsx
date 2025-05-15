import * as S from "./SortOptions.style";

interface SortOptionsProps {
  inputValue: string;
  sortBy: string;
  order: string;
  onClickSort: (newParams: Record<string, string | null>) => void;
}

export default function SortOptions({
  inputValue,
  sortBy,
  order,
  onClickSort,
}: SortOptionsProps) {
  const isRecommended = !sortBy && !order;
  const isPopular = sortBy === "rating" && order === "desc";

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
          onClickSort({ q: inputValue, sortBy: "rating", order: "desc" })
        }
      >
        인기순
      </S.Rating>
    </S.Wrapper>
  );
}
