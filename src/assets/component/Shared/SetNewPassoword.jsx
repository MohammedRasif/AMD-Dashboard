import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"; // Import eye icons
import { useResetPasswordMutation } from "../../../redux/feature/authApi";

const SetNewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [resetPassword] = useResetPasswordMutation();

    // Retrieve email and OTP from local storage
    const email = localStorage.getItem("email");
    const otp = localStorage.getItem("otp");
    console.log(newPassword, confirmPassword, email, otp);

    // Handle password change
    const handlePasswordChange = async () => {
        setError(""); // Clear previous errors

        // Validate password
        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {
            console.log(email,otp, newPassword,confirmPassword);
            // Send email, OTP, password, and confirm_password to the API
            const response = await resetPassword({
                email,  // Retaining email from localStorage
                otp,    // Retaining OTP from localStorage
                password: newPassword,  // Use 'password' instead of 'newPassword'
                confirm_password: confirmPassword  // Use 'confirm_password' instead of 'confirmPassword'
            }).unwrap();


            console.log(response);

            // Handle successful password reset
            if (response.success) {
                alert("Password changed successfully!");
                // Optionally, you can redirect the user or close a modal here
            } else {
                // Handle cases where the API returns a success flag but the operation failed
                setError(response.message || "Failed to reset password. Please try again.");
            }
           
        } catch (err) {
            // Handle error
            setError(err.data?.message || "Failed to reset password. Please try again.");
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
            <div className="w-[573px] h-[810px] pt-16">
                <div>
                    {/* Title */}
                    <p className="font-[500] text-[20px] leading-[30px] text-center  mb-2">
                        Create a new password. <br />
                        Ensure it differs from the previous one.
                    </p>
                    <h1 className="text-[48px] font-[500] text-center">
                        Set New Password
                    </h1>

                    {/* Password Fields */}
                    <div className="space-y-6 mt-10">
                        <div>
                            <label htmlFor="new-password" className="block text-base font-normal mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}

                                    className="w-full h-[50px] border border-gray-300 px-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="****************"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <span
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block text-base font-normal mb-2">
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}

                                    className="w-full h-[50px] border border-gray-300 px-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="****************"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Error message */}
                    {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}

                    {/* Confirm Button */}
                    <button
                        onClick={handlePasswordChange}
                        disabled={loading}
                        className={`w-full h-[48px] mt-16 bg-[#8CAB91] text-[#FAF1E6] font-medium text-base rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Changing password..." : "Confirm Password"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;