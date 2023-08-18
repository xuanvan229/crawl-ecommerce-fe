import axios from "axios";

// read from .env file
const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:8080";
export const instance = axios.create({
  baseURL,
  timeout: 10000,
});
