import { createContext, useContext, useState } from "react";
import { login, refreshToken, logout } from "../api/auth";

// AuthContext
const AuthContext = createContext({});

// Custom hook to access the AuthContext and its functions
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to provide the supplier context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [persist, setPersist] = useState(
        JSON.parse(localStorage.getItem("persist")) || false
    );

    // Function to handle user login
    const loginUser = async (userCredentials) => {
        try {
            const response = await login(userCredentials);
            const data = response?.data;
            setUser(data);
            return data;
        } catch (error) {
            throw error;
        }
    };

    // Function to handle user refresh token
    const userToken = async () => {
        try {
            const response = await refreshToken();
            const token = response.data?.token;
            setUser((prev) => {
                return { ...prev, token };
            });
            return token;
        } catch (error) {
            throw error;
        }
    };

    // Function to handle user logout
    const logoutUser = async () => {
        try {
            setUser(null);
            const response = await logout();
            const data = response?.data;
            return data;
        } catch (error) {
            throw error;
        }
    };

    // Value object to be provided by the context
    const authContextValue = {
        user,
        persist,
        loginUser,
        userToken,
        logoutUser,
        setPersist,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
