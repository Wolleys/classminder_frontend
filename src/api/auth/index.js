import api from "../";

// User login
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
