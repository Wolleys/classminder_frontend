import axios from "axios";

const BASE_URL = "https://classminder-1155fd8e41b2.herokuapp.com/api/v1";

const api = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

export default api;
