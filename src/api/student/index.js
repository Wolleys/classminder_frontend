import api from "../";

// Get all students
export const getAll = async () => {
    try {
        const response = await api.get("/students");
        return response;
    } catch (error) {
        throw error;
    }
};
