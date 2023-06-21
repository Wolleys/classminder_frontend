import StudentsList from "../list/students";
import { useNavigate } from "react-router-dom";
import useLogout from "../../../../hooks/useLogout";
import { useAuth } from "../../../../context/AuthContext";
import { getIdFromToken } from "../../../../utils/navigate";

const AdminDashboard = () => {
    const { user } = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();
    const userId = getIdFromToken(user);

    const signOut = async () => {
        await logout();
        navigate("/");
    };

    return (
        <>
            <h1> Admin Dashboard</h1>
            <p>Welcome: {userId}</p>
            <br />
            <StudentsList />
            <button onClick={signOut}>Signout</button>
        </>
    );
};

export default AdminDashboard;
