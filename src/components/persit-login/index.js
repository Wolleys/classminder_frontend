import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import useRefreshToken from "../../hooks/useRefreshToken";

const PersistLogin = () => {
    const refresh = useRefreshToken();
    const { user, persist } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error?.response?.data.error);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        !user?.token && persist ? verifyRefreshToken() : setIsLoading(false);
        return () => isMounted = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
    );
};

export default PersistLogin;
