import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/public/not-found";

const NotFoundRoute = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default NotFoundRoute;
