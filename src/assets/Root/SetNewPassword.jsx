import { Navigate, Outlet } from 'react-router-dom';

const SetNewPassword = () => {
    const isVerified = localStorage.getItem("otp");

    return isVerified ? <Outlet /> : <Navigate to="/verification" replace />;
}

export default SetNewPassword;
