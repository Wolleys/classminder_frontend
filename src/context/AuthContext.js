import { createContext, useContext, useState } from "react";
import { login } from "../api/auth";

// AuthContext
const AuthContext = createContext({});

// Custom hook to access the AuthContext and its functions
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to provide the supplier context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

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

    // Function to handle user logout
    const logoutUser = async () => {
        try {
            setUser(null);
            return { success: true, message: "Logout successful" };
        } catch (error) {
            return { success: false, message: "Logout failed" };
        }
    };

    // Value object to be provided by the context
    const authContextValue = { user, loginUser, logoutUser };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
