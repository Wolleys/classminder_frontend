import api from "../";

// Login user
export const login = async (data) => {
    try {
        const response = await api.post("/auth/login", data);
        return response;
    } catch (error) {
        throw error;
    }
};

// Get user refresh token
export const refreshToken = async () => {
    try {
        const response = await api.get("/auth/refresh");
        return response;
    } catch (error) {
        throw error;
    }
};

// Logout user
export const logout = async () => {
    try {
        const response = await api.get("/auth/logout");
        return response;
    } catch (error) {
        throw error;
    }
};