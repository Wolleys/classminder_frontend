import { useAuth } from "../../../../context/AuthContext";
import { getIdFromToken } from "../../../../utils/navigate";

const StudDashboard = () => {
    const { user } = useAuth();
    const userId = getIdFromToken(user);
    return (
        <>
            <h1> Student Dashboard</h1>
            <p>Welcome: {userId}</p>
        </>
    );
};

export default StudDashboard;
