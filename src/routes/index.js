import LoginRoute from "./login";
import AdminRoutes from "./admin";
import StudentRoutes from "./student";
import TeacherRoutes from "./teacher";
import NotFoundRoute from "./not-found";
import RequireAuth from "./protected";
import Layout from "../components/ui/layouts";
import { Route, Routes } from "react-router-dom";
import PersistLogin from "../components/persit-login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Public routes */}
                <Route path="/" element={<LoginRoute />} />

                {/* Persist login on protected routes */}
                <Route element={<PersistLogin />}>
                    <Route element={<RequireAuth allowedRoles={"Admin"} />}>
                        <Route path="admin/*" element={<AdminRoutes />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={"Student"} />}>
                        <Route path="students/*" element={<StudentRoutes />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={"Teacher"} />}>
                        <Route path="teachers/*" element={<TeacherRoutes />} />
                    </Route>
                </Route>

                {/* Catch all undefined routes */}
                <Route path="*" element={<NotFoundRoute />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
