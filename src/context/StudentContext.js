import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const StudentContext = createContext({});

export const useStudent = () => {
    return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const studentsData = useFetch("/students");
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (studentsData) {
            setStudents(studentsData);
        }
    }, [studentsData]);

    // Function to fetch a student by ID
    const getOneStudent = async (id) => {
        try {
            const response = await axiosPrivate.get(`/students/${id}`);
            const studentData = response.data.data;
            return studentData;
        } catch (error) {
            throw error;
        }
    };

    // Function to add a new student
    const createNewStudent = async (studentData) => {
        try {
            const response = await axiosPrivate.post("/students", studentData);
            const addedStudent = response.data.data;
            setStudents((prevStudents) => [addedStudent, ...prevStudents]);
            return addedStudent;
        } catch (error) {
            throw error;
        }
    };

    // Function to update a student
    const updateOneStudent = async (id, studentData) => {
        try {
            const response = await axiosPrivate.patch(`/students/${id}`, studentData);
            const updatedStudent = response.data.data;
            setStudents((prevStudents) =>
                prevStudents.map((entity) =>
                    entity.id === id ? updatedStudent : entity
                )
            );
            return updatedStudent;
        } catch (error) {
            throw error;
        }
    };

    // Function to delete a student
    const deleteOneStudent = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/students/${id}`);
            const deletedStudent = response.data;
            setStudents((prevStudents) =>
                prevStudents.filter((entity) => entity.id !== id)
            );
            return deletedStudent;
        } catch (error) {
            throw error;
        }
    };

    // Value object to be provided by the context
    const StudentContextValue = {
        students,
        getOneStudent,
        createNewStudent,
        updateOneStudent,
        deleteOneStudent,
    };

    return (
        <StudentContext.Provider value={StudentContextValue}>
            {children}
        </StudentContext.Provider>
    );
};
