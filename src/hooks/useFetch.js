import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "./useAxiosPrivate";

const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await axiosPrivate.get(endpoint, {
                    signal: controller.signal,
                });
                isMounted && setData(response?.data.data);
            } catch (error) {
                if (error.response?.data) {
                    console.log(error.response.data.error);
                    navigate("/", { state: { from: location }, replace: true });
                } else if (error) {
                    console.log(error.message);
                }
            }
        };
        fetchData();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [endpoint, axiosPrivate, navigate, location]);

    return data;
};

export default useFetch;
