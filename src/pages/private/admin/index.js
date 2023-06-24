import Dashboard from "../../../components/dashboard";
import { FormProvider } from "../../../context/FormContext";

const AdminPage = () => {
    return (
        <FormProvider>
            <Dashboard />
        </FormProvider>
    );
};

export default AdminPage;
