import { Route, Routes } from "react-router-dom";
import NotFoundRoute from "../not-found";
import StudentPage from "../../pages/private/student";
import Dashbord from "../../pages/private/student/dashboard";
import Profile from "../../pages/private/student/profile";
import Reports from "../../pages/private/student/reports";
import Settings from "../../pages/private/student/settings";

const StudentRoutes = () => {
    return (
        <Routes>
            <Route element={<StudentPage />}>
                <Route path="dashboard" element={<Dashbord />} />
                <Route path="profile" element={<Profile />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
            </Route>

            {/* Catch all undefined routes */}
            <Route path="*" element={<NotFoundRoute />} />
        </Routes>
    );
};

export default StudentRoutes;
