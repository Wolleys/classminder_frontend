import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

// CourseContext
const CourseContext = createContext({});

// Custom hook to access the CourseContext and its functions
export const useCourse = () => {
    return useContext(CourseContext);
};

// CourseProvider component to provide the supplier context
export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const coursesData = useFetch("/courses");
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (coursesData) {
            setCourses(coursesData);
        }
    }, [coursesData]);

    // Function to fetch a course by ID
    const getOneCourse = async (id) => {
        try {
            const { data } = await axiosPrivate.get(`/courses/${id}`);
            return data;
        } catch (error) {
            console.log("Error fetching course by ID:", error);
        }
    };

    // Function to add a new course
    const createNewCourse = async (courseData) => {
        try {
            const response = await axiosPrivate.post("/courses", courseData);
            const course = response.data.data;
            setCourses((prevCourses) => [course, ...prevCourses]);
            return course;
        } catch (error) {
            throw error;
        }
    };

    // Function to update a course
    const updateOneCourse = async (id, courseData) => {
        try {
            const { data } = await axiosPrivate.put(`/courses/${id}`, courseData);
            setCourses((prevCourses) =>
                prevCourses.map((course) => (course.id === id ? data : course))
            );
        } catch (error) {
            console.log("Error updating course:", error);
        }
    };

    // Function to delete a course
    const deleteOneCourse = async (id) => {
        try {
            await axiosPrivate.delete(`/courses/${id}`);
            setCourses((prevCourses) =>
                prevCourses.filter((course) => course.id !== id)
            );
        } catch (error) {
            console.log("Error deleting course:", error);
        }
    };

    // Value object to be provided by the context
    const courseContextValue = {
        courses,
        getOneCourse,
        createNewCourse,
        updateOneCourse,
        deleteOneCourse,
    };

    return (
        <CourseContext.Provider value={courseContextValue}>
            {children}
        </CourseContext.Provider>
    );
};
