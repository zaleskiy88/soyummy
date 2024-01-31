import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://troubled-teal-fedora.cyclic.app",
});
