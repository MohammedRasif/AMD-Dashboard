import { useState } from "react";
import { useSendForgetPasswordMutation } from "../../../redux/feature/authApi";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const [email, setEmail] = useState(""); // ✅ Store email input
    const [forgetPassword, { isLoading, error }] = useSendForgetPasswordMutation(); // ✅ Mutation hook
    const navigate = useNavigate(); // ✅ Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
    
        if (!email) {
            alert("Please enter your email!");
            return;
        }
    
        console.log("Sending this data:", { email }); // ✅ Check the sent data format
    
        try {
            const response = await forgetPassword({ email }).unwrap(); // ✅ Send request
            console.log("Password reset email sent:", response);
            // alert("A password reset link has been sent to your email.");
            localStorage.setItem("email", email);
            navigate("/verification");
        } catch (err) {
            console.error("Error sending reset email:", err?.data?.message || "Something went wrong");
            alert("Failed to send reset link. Please try again.");
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
            <div className="w-[573px] h-[810px] pt-36">
                <div>
                    <h1 className="text-[48px] font-[500] text-[#364636] text-center">Forgot Password</h1>
                    <form onSubmit={handleSubmit} className="pt-10">
                        <label className="text-[16px] mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // ✅ Handle input change
                            className="w-full h-[50px] border border-gray-400 rounded-md text-[#364636] pl-3"
                            placeholder="Enter your email"
                            required
                        />
                        {error && <p className="text-red-500 mt-2 text-center">{error.data?.message || "Something went wrong"}</p>} {/* ✅ Show error */}
                        <button
                            type="submit"
                            disabled={isLoading} // ✅ Disable button when loading
                            className="mt-10 bg-[#8CAB91] w-full px-7 rounded-full h-12 text-[16px] text-[#FAF1E6] uppercase cursor-pointer"
                        >
                            {isLoading ? "Sending..." : "Confirm"} {/* ✅ Show loading state */}
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
