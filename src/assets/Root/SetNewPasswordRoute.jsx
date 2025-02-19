import { Navigate } from "react-router-dom";

const SetNewPasswordRoute = ({ children }) => {
    const isVerified = localStorage.getItem("otp");

    // যদি email না থাকে, তাহলে forgetPassword পেজে রিডাইরেক্ট করবে
    if (!isVerified) {
        return <Navigate to="/verification" replace />;
    }

    // যদি email থাকে, তাহলে children (Verification কম্পোনেন্ট) রেন্ডার করবে
    return children;
};

export default SetNewPasswordRoute;