import { Route, Routes } from "react-router-dom";
import StudDashboard from "../../pages/private/student/dashboard";

const StudentRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StudDashboard />} />
        </Routes>
    );
};

export default StudentRoutes;
