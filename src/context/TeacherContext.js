import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const TeacherContext = createContext({});

export const useTeacher = () => {
    return useContext(TeacherContext);
};

export const TeacherProvider = ({ children }) => {
    const [teachers, setTeachers] = useState([]);
    const teacherData = useFetch("/teachers");
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (teacherData) {
            setTeachers(teacherData);
        }
    }, [teacherData]);

    // Function to fetch a teacher by ID
    const getOneTeacher = async (id) => {
        try {
            const response = await axiosPrivate.get(`/teachers/${id}`);
            const teacherData = response.data.data;
            return teacherData;
        } catch (error) {
            throw error;
        }
    };

    // Function to add a new teacher
    const createNewTeacher = async (teacherData) => {
        try {
            const response = await axiosPrivate.post("/teachers", teacherData);
            const addedTeacher = response.data.data;
            setTeachers((prevTeachers) => [addedTeacher, ...prevTeachers]);
            return addedTeacher;
        } catch (error) {
            throw error;
        }
    };

    // Function to update a teacher
    const updateOneTeacher = async (id, teacherData) => {
        try {
            const response = await axiosPrivate.patch(`/teachers/${id}`, teacherData);
            const updatedTeacher = response.data.data;
            setTeachers((prevTeachers) =>
                prevTeachers.map((entity) =>
                    entity.id === id ? updatedTeacher : entity
                )
            );
            return updatedTeacher;
        } catch (error) {
            throw error;
        }
    };

    // Function to delete a teacher
    const deleteOneTeacher = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/teachers/${id}`);
            const deletedTeacher = response.data;
            setTeachers((prevTeachers) =>
                prevTeachers.filter((entity) => entity.id !== id)
            );
            return deletedTeacher;
        } catch (error) {
            throw error;
        }
    };

    // Value object to be provided by the context
    const TeacherContextValue = {
        teachers,
        getOneTeacher,
        createNewTeacher,
        updateOneTeacher,
        deleteOneTeacher,
    };

    return (
        <TeacherContext.Provider value={TeacherContextValue}>
            {children}
        </TeacherContext.Provider>
    );
};
