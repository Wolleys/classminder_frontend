import { useAuth } from "../../context/AuthContext";
import { getRoleFromToken } from "../../utils/navigate";
import { Navigate, useLocation, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
    const { user } = useAuth();
    const location = useLocation();

    return getRoleFromToken(user) === allowedRoles ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
};

export default RequireAuth;
