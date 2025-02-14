import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";  // Import Axios
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false); // Remember state
    const [loading, setLoading] = useState(false); // Loading state to show button text change
    const navigate = useNavigate();


    // useEffect(() => {
    //     const token = localStorage.getItem("accessToken");
    //     if (token) {
    //         navigate("/");
    //     }
    // }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://192.168.10.153:8081/api/user/login/email/", {
                email,
                password,
            });

            console.log("Login successful:", response.data);

            // ✅ Access & Refresh Token 
            console.log("Access Token:", response.data.access);
            console.log("Refresh Token:", response.data.refresh);
            "accessToken"
            if (response.data.access && response.data.refresh) {
                localStorage.setItem("accessToken", response.data.access);
                localStorage.setItem("refreshToken", response.data.refresh);
            } else {
                console.error("No access or refresh token received!");
            }

            // ✅ Verification 
            navigate("/Verification");

        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex items-center pl-80 pt-36 space-x-10">
            <div className="w-[573px] h-[810px] pt-20">
                <img
                    src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png"
                    className="w-[483px] h-[280.5px]"
                    alt="Login Image"
                />
            </div>
            <div className="w-[573px] h-[810px]">
                <h1 className="text-[48px] font-[500] text-center">Login to Account</h1>
                <p className="text-[14px] font-[500] text-center pt-10 text-[#364636]">
                    Please enter your email and password to continue
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="pt-10">
                        <h1 className="text-[16px] mb-2">Email</h1>
                        <input
                            type="email"
                            className="w-full h-[50px] border border-gray-400 rounded-md text-[#364636] pl-3"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="pt-2 relative">
                        <h1 className="text-[16px] mb-2 mt-3">Password</h1>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full h-[50px] border border-gray-400 rounded-md text-[#364636] pl-3 pr-10"
                            placeholder="****************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[50%] transform -translate-y-1/2 text-gray-500 pt-12"
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 pt-5">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-5 w-5 text-green-500 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-sm text-red-600 hover:text-red-700">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className={`mt-10 w-full px-7 rounded-full h-12 text-[16px] text-[#FAF1E6] cursor-pointer transition ${remember ? "bg-[#8CAB91] hover:bg-[#7A9B80]" : "bg-[#8CAB91] hover:bg-[#7A9B80]  cursor-not-allowed"
                            }`}
                        disabled={!remember || loading} // Button disabled if remember is not checked or if loading
                    >
                        {loading ? "Signing In..." : "SIGN IN"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
