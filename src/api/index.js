import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3300/api/v1",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export default api;
