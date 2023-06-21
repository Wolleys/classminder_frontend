import { useAuth } from "../../../../context/AuthContext";
import { getIdFromToken } from "../../../../utils/navigate";

const AdminDashboard = () => {
    const { user } = useAuth();
    const userId = getIdFromToken(user);
    return (
        <>
            <h1> Admin Dashboard</h1>
            <p>Welcome: {userId}</p>
        </>
    );
};

export default AdminDashboard;
