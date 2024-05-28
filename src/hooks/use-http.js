import axios from "axios";
import { API_URL } from "../config/config";
import { handleHttpError } from "../utils/handleHttpError";
import { handleHttpSuccess } from "../utils/handleHttpSuccess";

export const useHttp = () => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
  });
  localStorage.setItem("lastrequest", new Date());

  const request = async ({ method = "GET", url, data, headers }) => {
    try {
      return await axiosInstance({
        method,
        url: `${API_URL}${url}`,
        data,
        headers: {
          ...headers,
        },
      })
        .then((res) => {
          handleHttpSuccess(res);
          return res.data;
        })
        .catch((error) => {
          handleHttpError(error);
        });
    } catch (error) {
      handleHttpError(error);
    }
  };

  return { request };
};
