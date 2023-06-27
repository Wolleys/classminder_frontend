import StudentsList from "./students-list";
import Title from "../../../../components/page-title";
import { ClassProvider } from "../../../../context/ClassContext";
import { CourseProvider } from "../../../../context/CourseContext";
import { StudentProvider } from "../../../../context/StudentContext";
import { SnackbarProvider } from "../../../../context/SnackbarContext";
import { DelDialogProvider } from "../../../../context/DelDialogContext";
import LayoutDivider from "../../../../components/divider/layout-divider";

const Students = () => {
    return (
        <StudentProvider>
            <DelDialogProvider>
                <SnackbarProvider>
                    <Title title="Students" />
                    <LayoutDivider />
                    <ClassProvider>
                        <CourseProvider>
                            <StudentsList />
                        </CourseProvider>
                    </ClassProvider>
                </SnackbarProvider>
            </DelDialogProvider>
        </StudentProvider>
    );
};

export default Students;
