import { Route, Routes } from "react-router-dom";
import TchrDashboard from "../../pages/private/teacher/dashboard";

const TeacherRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TchrDashboard />} />
        </Routes>
    );
};

export default TeacherRoutes;
