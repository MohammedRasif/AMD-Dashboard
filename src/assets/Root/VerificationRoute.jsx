import { Navigate } from "react-router-dom";

const VerificationRoute = ({ children }) => {
    const isVerified = localStorage.getItem("email");

    // যদি email না থাকে, তাহলে forgetPassword পেজে রিডাইরেক্ট করবে
    if (!isVerified) {
        return <Navigate to="/forgetPassword" replace />;
    }

    // যদি email থাকে, তাহলে children (Verification কম্পোনেন্ট) রেন্ডার করবে
    return children;
};

export default VerificationRoute;