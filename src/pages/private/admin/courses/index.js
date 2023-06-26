import CoursesList from "./courses-list";
import Title from "../../../../components/page-title";
import { CourseProvider } from "../../../../context/CourseContext";
import { SnackbarProvider } from "../../../../context/SnackbarContext";
import { DelDialogProvider } from "../../../../context/DelDialogContext";
import LayoutDivider from "../../../../components/divider/layout-divider";

const Courses = () => {
    return (
        <CourseProvider>
            <DelDialogProvider>
                <SnackbarProvider>
                    <Title title="Courses" />
                    <LayoutDivider />
                    <CoursesList />
                </SnackbarProvider>
            </DelDialogProvider>
        </CourseProvider>
    );
};

export default Courses;
