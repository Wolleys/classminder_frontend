import { useAuth } from "../../../../context/AuthContext";
import { getIdFromToken } from "../../../../utils/navigate";
import StudentsList from "../list/students";

const AdminDashboard = () => {
    const { user } = useAuth();
    const userId = getIdFromToken(user);
    return (
        <>
            <h1> Admin Dashboard</h1>
            <p>Welcome: {userId}</p>
            <br/>
            <StudentsList />
        </>
    );
};

export default AdminDashboard;
