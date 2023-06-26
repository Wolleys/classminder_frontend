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
            const response = await axiosPrivate.get(`/courses/${id}`);
            const course = response.data.data;
            return course;
        } catch (error) {
            throw error;
        }
    };

    // Function to add a new course
    const createNewCourse = async (courseData) => {
        try {
            const response = await axiosPrivate.post("/courses", courseData);
            const addedCourse = response.data.data;
            setCourses((prevCourses) => [addedCourse, ...prevCourses]);
            return addedCourse;
        } catch (error) {
            throw error;
        }
    };

    // Function to update a course
    const updateOneCourse = async (id, courseData) => {
        try {
            const response = await axiosPrivate.patch(`/courses/${id}`, courseData);
            const updatedCourse = response.data.data;
            setCourses((prevCourses) =>
                prevCourses.map((course) => (course.id === id ? updatedCourse : course))
            );
            return updatedCourse;
        } catch (error) {
            throw error;
        }
    };

    // Function to delete a course
    const deleteOneCourse = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/courses/${id}`);
            const deletedCourse = response.data;
            setCourses((prevCourses) =>
                prevCourses.filter((course) => course.id !== id)
            );
            return deletedCourse;
        } catch (error) {
            throw error;
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
