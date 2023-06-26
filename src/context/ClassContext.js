import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const ClassContext = createContext({});

export const useClass = () => {
    return useContext(ClassContext);
};

export const ClassProvider = ({ children }) => {
    const [classes, setClasses] = useState([]);
    const classesData = useFetch("/classes");
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (classesData) {
            setClasses(classesData);
        }
    }, [classesData]);

    // Function to fetch a class by ID
    const getOneClass = async (id) => {
        try {
            const response = await axiosPrivate.get(`/classes/${id}`);
            const classData = response.data.data;
            return classData;
        } catch (error) {
            throw error;
        }
    };

    // Function to add a new class
    const createNewClass = async (classData) => {
        try {
            const response = await axiosPrivate.post("/classes", classData);
            const addedClass = response.data.data;
            setClasses((prevClasses) => [addedClass, ...prevClasses]);
            return addedClass;
        } catch (error) {
            throw error;
        }
    };

    // Function to update a class
    const updateOneClass = async (id, classData) => {
        try {
            const response = await axiosPrivate.patch(`/classes/${id}`, classData);
            const updatedClass = response.data.data;
            setClasses((prevClasses) =>
                prevClasses.map((entity) => (entity.id === id ? updatedClass : entity))
            );
            return updatedClass;
        } catch (error) {
            throw error;
        }
    };

    // Function to delete a class
    const deleteOneClass = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/classes/${id}`);
            const deletedClass = response.data;
            setClasses((prevClasses) =>
                prevClasses.filter((entity) => entity.id !== id)
            );
            return deletedClass;
        } catch (error) {
            throw error;
        }
    };

    // Value object to be provided by the context
    const classContextValue = {
        classes,
        getOneClass,
        createNewClass,
        updateOneClass,
        deleteOneClass,
    };

    return (
        <ClassContext.Provider value={classContextValue}>
            {children}
        </ClassContext.Provider>
    );
};
