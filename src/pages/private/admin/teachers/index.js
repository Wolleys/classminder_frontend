import TeachersList from "./teachers-list";
import Title from "../../../../components/page-title";
import { ClassProvider } from "../../../../context/ClassContext";
import { CourseProvider } from "../../../../context/CourseContext";
import { TeacherProvider } from "../../../../context/TeacherContext";
import { SnackbarProvider } from "../../../../context/SnackbarContext";
import { DelDialogProvider } from "../../../../context/DelDialogContext";
import LayoutDivider from "../../../../components/divider/layout-divider";

const Teachers = () => {
    return (
        <TeacherProvider>
            <DelDialogProvider>
                <SnackbarProvider>
                    <Title title="Teachers" />
                    <LayoutDivider />
                    <ClassProvider>
                        <CourseProvider>
                            <TeachersList />
                        </CourseProvider>
                    </ClassProvider>
                </SnackbarProvider>
            </DelDialogProvider>
        </TeacherProvider>
    );
};

export default Teachers;
