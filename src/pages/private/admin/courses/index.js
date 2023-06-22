import Title from "../../../../components/page-title";
import { Divider } from "@mui/material";
import CoursesList from "./courses-list";

const Courses = () => {
    return (
        <>
            <Title title="Courses" />
            <Divider sx={{ mb: 3 }} />
            <CoursesList />
        </>
    );
};

export default Courses;
