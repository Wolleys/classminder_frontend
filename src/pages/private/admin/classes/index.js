import ClassesList from "./classes-list";
import Title from "../../../../components/page-title";
import { ClassProvider } from "../../../../context/ClassContext";
import { SnackbarProvider } from "../../../../context/SnackbarContext";
import { DelDialogProvider } from "../../../../context/DelDialogContext";
import LayoutDivider from "../../../../components/divider/layout-divider";

const Classes = () => {
    return (
        <ClassProvider>
            <DelDialogProvider>
                <SnackbarProvider>
                    <Title title="Classes" />
                    <LayoutDivider />
                    <ClassesList />
                </SnackbarProvider>
            </DelDialogProvider>
        </ClassProvider>
    );
};

export default Classes;
