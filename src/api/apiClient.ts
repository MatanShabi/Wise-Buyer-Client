import axios, { CanceledError } from "axios";

export { CanceledError }
const apiClient = axios.create({
    baseURL: 'https://localhost:3000'
    // baseURL: 'https://193.106.55.174:4000'
});

export default apiClient;