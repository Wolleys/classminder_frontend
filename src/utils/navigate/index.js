import jwt_decode from "jwt-decode";

export const getRoleFromToken = (user) => {
    const decodedToken = user?.token ? jwt_decode(user.token) : undefined;
    return decodedToken?.role;
};

export const getIdFromToken = (user) => {
    const decodedToken = user?.token ? jwt_decode(user.token) : undefined;
    return decodedToken?.id;
};

export const navigateToRole = (user, navigate) => {
    if (user) {
        const role = getRoleFromToken(user);

        if (role === "Admin") {
            navigate("/admin");
        } else if (role === "Student") {
            navigate("/students");
        } else if (role === "Teacher") {
            navigate("/teachers");
        } else {
            navigate("/unauthorized");
        }
    } else {
        navigate("/");
    }
};
