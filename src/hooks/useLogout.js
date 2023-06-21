import { useAuth } from "../context/AuthContext";

const useLogout = () => {
    const { logoutUser } = useAuth();

    const logout = async () => {
        const response = await logoutUser({
            withCredentials: true,
        });
        return response;
    };
    return logout;
};

export default useLogout;
