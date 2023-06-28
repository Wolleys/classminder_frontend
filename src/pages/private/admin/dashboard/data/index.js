import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../api";
import useFetch from "../../../../../hooks/useFetch";
import DataCard from "../../../../../components/cards/data";
import Face6OutlinedIcon from "@mui/icons-material/Face6Outlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

const DataCardInfo = () => {
    const [userData, setUserData] = useState([
        {
            content: 0,
            label: "Students",
            icon: Face6OutlinedIcon,
            bgcolor: "#D14343",
        },
        {
            content: 0,
            label: "Teachers",
            icon: Person3OutlinedIcon,
            bgcolor: "#FFB020",
        },
        {
            content: 0,
            label: "Classes",
            icon: SchoolOutlinedIcon,
            bgcolor: "#14B8A6",
        },
        {
            content: 0,
            label: "Courses",
            icon: LocalLibraryOutlinedIcon,
            bgcolor: "#5048E5",
        },
    ]);

    const students = useFetch(`${BASE_URL}/students`);
    const teachers = useFetch(`${BASE_URL}/teachers`);
    const classes = useFetch(`${BASE_URL}/classes`);
    const courses = useFetch(`${BASE_URL}/courses`);

    useEffect(() => {
        if (students && teachers && classes && courses) {
            setUserData((prevUserData) => {
                const updatedUserData = [...prevUserData];

                updatedUserData[0].content = students.length;
                updatedUserData[1].content = teachers.length;
                updatedUserData[2].content = classes.length;
                updatedUserData[3].content = courses.length;

                return updatedUserData;
            });
        }
    }, [students, teachers, classes, courses]);

    return <DataCard data={userData} />;
};

export default DataCardInfo;
