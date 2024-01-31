import axios from "axios";
const { REACT_APP_BASE_BACKEND_URL } = process.env;

export const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_BACKEND_URL,
});
