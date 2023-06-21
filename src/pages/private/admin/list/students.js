import { useState, useEffect } from "react";
// import { getAll } from "../../../../api/student";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const StudentsList = () => {
    const [students, setStudents] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const userData = async () => {
            try {
                const response = await axiosPrivate.get("/students", {
                    signal: controller.signal,
                });
                isMounted && setStudents(response?.data.data);
            } catch (error) {
                if (error.response?.data) {
                    console.log(error.response.data.error);
                    navigate("/", { state: { from: location }, replace: true });
                } else if (error) {
                    console.log(error.message);
                }
            }
        };
        userData();

        return () => {
            isMounted = false;
            controller.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <article>
            <h2>Students List</h2>
            {students?.length ? (
                <ul>
                    {students.map((student, i) => (
                        <li key={i}>{student?.first_name}</li>
                    ))}
                </ul>
            ) : (
                <p>No students to display</p>
            )}
        </article>
    );
};

export default StudentsList;
