import StudentsList from "./students-list";
import Title from "../../../../components/page-title";
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
                    <StudentsList />
                </SnackbarProvider>
            </DelDialogProvider>
        </StudentProvider>
    );
};

export default Students;
