import { InfiniteData } from "@tanstack/react-query";

export interface HeaderViewProps {
  shrink: boolean;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  reviews: unknown[];
}

export interface ProductItemProps {
  product: Product;
  isGridView: boolean;
}

export interface ProductItemProps {
  product: Product;
  isGridView: boolean;
}

export interface ProductProps {
  pageParams: number[];
  pages: ProductListResponse[];
}

export interface ProductListResponse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
  pageParams: number[];
  pages: ProductListResponse[];
}

export interface ProductListViewProps {
  data: InfiniteData<ProductListResponse>;
  hasNextPage: boolean;
  isGridView: boolean;
  isFetchingNextPage: boolean;
  ref: (node?: Element | null) => void;
  sortBy: string;
  order: string;
  pathname: string;
  searchParams: URLSearchParams;
}

export interface SortOptionsProps {
  sortBy: string;
  order: string;
  onClickSort: (newParams: Record<string, string | null>) => void;
}

export interface SkeletonProductItemProps {
  isGridView: boolean;
}
