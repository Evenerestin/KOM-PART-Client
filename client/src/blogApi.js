import axios from "axios";
import config from "./config.js";

const apiToken = import.meta.env.VITE_API_TOKEN;

const blogApi = axios.create({
  baseURL: config.api,
  ...(apiToken && { headers: { Authorization: `Bearer ${apiToken}` } }),
});

export default blogApi;
