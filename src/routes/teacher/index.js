import { Route, Routes } from "react-router-dom";
import NotFoundRoute from "../not-found";
import TeacherPage from "../../pages/private/teacher";
import Dashbord from "../../pages/private/teacher/dashboard";
import Courses from "../../pages/private/teacher/courses";
import Classes from "../../pages/private/teacher/classes";
import Students from "../../pages/private/teacher/students";
import Profile from "../../pages/private/teacher/profile";
import Reports from "../../pages/private/teacher/reports";
import Settings from "../../pages/private/teacher/settings";

const TeacherRoutes = () => {
    return (
        <Routes>
            <Route element={<TeacherPage />}>
                <Route path="dashboard" element={<Dashbord />} />
                <Route path="courses" element={<Courses />} />
                <Route path="classes" element={<Classes />} />
                <Route path="students" element={<Students />} />
                <Route path="profile" element={<Profile />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
            </Route>

            {/* Catch all undefined routes */}
            <Route path="*" element={<NotFoundRoute />} />
        </Routes>
    );
};

export default TeacherRoutes;
