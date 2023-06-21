import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../../pages/private/admin/dashboard";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminDashboard />} />
        </Routes>
    );
};

export default AdminRoutes;
