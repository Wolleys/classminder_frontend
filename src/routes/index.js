import { Route, Routes } from "react-router-dom";
import Layout from "../components/ui/layouts";
import NotFoundRoute from "./not-found";
import LoginRoute from "./login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Layout />}>
                <Route path="/*" element={<LoginRoute />} />

                {/* Catch all undefined routes */}
                <Route path="*" element={<NotFoundRoute />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
