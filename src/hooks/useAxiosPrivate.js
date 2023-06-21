import { useEffect } from "react";
import { axiosPrivate } from "../api";
import useRefreshToken from "./useRefreshToken";
import { useAuth } from "../context/AuthContext";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { user } = useAuth();

    useEffect(() => {
        // Request interceptor
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers["authorization"]) {
                    config.headers["authorization"] = `Bearer ${user?.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor
        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers["authorization"] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, [user, refresh]);

    return axiosPrivate;
};

export default useAxiosPrivate;
