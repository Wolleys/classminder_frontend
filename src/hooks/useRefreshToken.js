import { useAuth } from "../context/AuthContext";

const useRefreshToken = () => {
    const { userToken } = useAuth();

    const refresh = async () => {
        const response = await userToken({
            withCredentials: true,
        });
        return response;
    };
    return refresh;
};

export default useRefreshToken;
