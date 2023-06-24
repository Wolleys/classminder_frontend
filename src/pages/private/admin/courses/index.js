import CoursesList from "./courses-list";
import Title from "../../../../components/page-title";
import { CourseProvider } from "../../../../context/CourseContext";
import LayoutDivider from "../../../../components/divider/layout-divider";

const Courses = () => {
    return (
        <CourseProvider>
            <Title title="Courses" />
            <LayoutDivider />
            <CoursesList />
        </CourseProvider>
    );
};

export default Courses;
