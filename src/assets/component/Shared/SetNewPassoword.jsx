import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"; // Import eye icons

const SetNewPassword = ({ setIsProfileOpen }) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Handle password change
    const handlePasswordChange = () => {
        setError(""); // Clear previous errors

        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        // Simulate password change process
        setTimeout(() => {
            setLoading(false);
            alert("Password changed successfully!");
            setIsProfileOpen(false); // Close modal after successful change
        }, 2000);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex justify-end bg-white min-h-screen items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsProfileOpen(false)} // Close when clicking outside
            >
                <motion.div
                    className="relative w-full bg-white rounded-lg"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
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
                                                id="new-password"
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
                                                id="confirm-password"
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
                                    className={`w-full h-[48px] mt-16 bg-[#8CAB91] text-[#FAF1E6] font-medium text-base rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                        loading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    {loading ? "Changing password..." : "Confirm Password"}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SetNewPassword;
