import api from "../";

// Get all courses
export const getAllCourses = async () => {
    try {
        const response = await api.get("/courses");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get a course by ID
export const getCourseById = async (id) => {
    try {
        const response = await api.get(`/courses/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Add a new course
export const addCourse = async (courseData) => {
    try {
        const response = await api.post("/courses", courseData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update a course
export const updateCourse = async (id, courseData) => {
    try {
        const response = await api.put(`/courses/${id}`, courseData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete a course
export const deleteCourse = async (id) => {
    try {
        const response = await api.delete(`/courses/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
