import axios, { CanceledError } from "axios";

export { CanceledError }

const baseURL = import.meta.env.VITE_BACKEND_URL

const apiClient = axios.create({baseURL});

export default apiClient;