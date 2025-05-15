export function createQueryString(
  searchParams: URLSearchParams,
  newParams: Record<string, string | null>
): string {
  const params = new URLSearchParams(searchParams.toString());

  for (const key in newParams) {
    const value = newParams[key];
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  }

  return params.toString();
}
