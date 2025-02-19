import { Navigate, Outlet } from "react-router-dom";

const VerificationRoute = () => {
    const isVerified = localStorage.getItem("email");

    return isVerified ? <Outlet /> : <Navigate to="/forgetPassword" replace />;
};

export default VerificationRoute;
