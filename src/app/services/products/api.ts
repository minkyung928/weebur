import api from "../api";

export const getProducts = (limit = 10, skip = 0, sortBy = "", order = "") => {
  const params: Record<string, any> = { limit, skip };
  if (sortBy) params.sortBy = sortBy;
  if (order) params.order = order;

  return api.get("/products", { params }).then((res) => res.data);
};

export const searchProducts = ({
  q,
  limit,
  skip,
  sortBy,
  order,
}: {
  q: string;
  limit: number;
  skip: number;
  sortBy?: string;
  order?: string;
}) => {
  const params: Record<string, any> = { q, limit, skip };
  if (q) params.q = q;
  if (sortBy) params.sortBy = sortBy;
  if (order) params.order = order;

  return api.get("/products/search", { params }).then((res) => res.data);
};
