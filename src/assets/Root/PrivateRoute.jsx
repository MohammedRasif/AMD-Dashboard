import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const token = localStorage.getItem("accessToken");

    return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
