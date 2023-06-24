import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import {
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse,
} from "../api/course";

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

    useEffect(() => {
        if (coursesData) {
            setCourses(coursesData);
        }
    }, [coursesData]);

    // Function to fetch a course by ID
    const getOneCourse = async (id) => {
        try {
            const data = await getCourseById(id);
            return data;
        } catch (error) {
            console.log("Error fetching course by ID:", error);
        }
    };

    // Function to add a new course
    const createNewCourse = async (courseData) => {
        try {
            const data = await addCourse(courseData);
            setCourses((prevCourses) => [...prevCourses, data]);
        } catch (error) {
            console.log("Error adding new course:", error);
        }
    };

    // Function to update a course
    const updateOneCourse = async (id, courseData) => {
        try {
            const data = await updateCourse(id, courseData);
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
            await deleteCourse(id);
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
