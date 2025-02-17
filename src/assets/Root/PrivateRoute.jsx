import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    // Redux store থেকে accessToken নেওয়া হচ্ছে
    const access_token = useSelector(state => state.auth.token);
   
    return access_token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
