import axios from "axios";

const BASE_URL = "https://dummyjson.com/";

export const createApi = () => {
  const _api = axios.create({
    baseURL: BASE_URL,
    validateStatus: (status) => status >= 200 && status < 400,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return _api;
};

const api = createApi();
export default api;
