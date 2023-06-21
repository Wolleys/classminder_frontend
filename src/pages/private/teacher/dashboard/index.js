import { useAuth } from "../../../../context/AuthContext";
import { getIdFromToken } from "../../../../utils/navigate";

const TchrDashboard = () => {
    const { user } = useAuth();
    const userId = getIdFromToken(user);
    return (
        <>
            <h1> Teacher Dashboard</h1>
            <p>Welcome: {userId}</p>
        </>
    );
};

export default TchrDashboard;
