import { Route, Routes } from "react-router-dom";
import NotFoundRoute from "../not-found";
import AdminPage from "../../pages/private/admin";
import Dashbord from "../../pages/private/admin/dashboard";
import Courses from "../../pages/private/admin/courses";
import CourseProfile from "../../pages/private/admin/courses/actions/view";
import Classes from "../../pages/private/admin/classes";
import ClassProfile from "../../pages/private/admin/classes/actions/view";
import Students from "../../pages/private/admin/students";
import StudentProfile from "../../pages/private/admin/students/actions/view";
import Teachers from "../../pages/private/admin/teachers";
import TeacherProfile from "../../pages/private/admin/teachers/actions/view";
import Profile from "../../pages/private/admin/profile";
import Reports from "../../pages/private/admin/reports";
import Settings from "../../pages/private/admin/settings";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route element={<AdminPage />}>
                <Route path="dashboard" element={<Dashbord />} />
                <Route path="courses" element={<Courses />} />
                <Route path="courses/view/:courseId" element={<CourseProfile />} />
                <Route path="classes" element={<Classes />} />
                <Route path="classes/view/:classId" element={<ClassProfile />} />
                <Route path="students" element={<Students />} />
                <Route path="students/view/:studentId" element={<StudentProfile />} />
                <Route path="teachers" element={<Teachers />} />
                <Route path="teachers/view/:teacherId" element={<TeacherProfile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
            </Route>

            {/* Catch all undefined routes */}
            <Route path="*" element={<NotFoundRoute />} />
        </Routes>
    );
};

export default AdminRoutes;
