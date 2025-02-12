import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminProfile = () => {
    // State to track which section is active
    const [activeSection, setActiveSection] = useState("editProfile");
    const [passwordVisibility, setPasswordVisibility] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const toggleVisibility = (field) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <div>
            <h1 className="text-[24px] font-[500] pb-2">Admin Profile(Super Admin)</h1>
            <div className="flex items-center justify-center pb-10">
                <div className="w-[715px] h-[815px]">
                    <div className="w-[715px] h-[184px] shadow-2xl bg-[#8CAB91] flex items-center justify-center space-x-3">
                        <div>
                            <img
                                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png"
                                className="w-[122px] h-[122px] rounded-full "
                                alt=""
                            />
                        </div>
                        <div className="text-[20px] text-[#FAF1E6]">
                            <h1>Mohammed Rasif</h1>
                            <h1>Admin</h1>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-5 py-7 text-[20px] font-[500]">
                        {/* Edit Profile Link */}
                        <h1
                            onClick={() => setActiveSection("editProfile")}
                            className={`cursor-pointer mt-2 ${activeSection === "editProfile"
                                ? "underline text-[#8CAB91]"
                                : ""
                                }`}
                        >
                            Edit Profile
                        </h1>

                        {/* Change Profile Link */}
                        <h1
                            onClick={() => setActiveSection("changePassword")}
                            className={`cursor-pointer mt-2 ${activeSection === "changePassword"
                                ? "underline text-[#8CAB91]"
                                : ""
                                }`}
                        >
                            Change Profile
                        </h1>
                    </div>

                    {/* Edit Profile Section */}
                    {activeSection === "editProfile" && (
                        <div className="bg-white px-32 pt-3 shadow-2xl">
                            <h1 className="text-center py-3 text-[20px] font-[500]">
                                Edit Your Profile
                            </h1>

                            <div>
                                <div className="pt-2">
                                    <h1 className=" text-[16px] mb-2 mt-3">User Name</h1>
                                    <input
                                        type="text"
                                        className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                        placeholder="Mr. Rasif"
                                    />
                                </div>
                                <div className="pt-2">
                                    <h1 className=" text-[16px] mb-2 mt-3">Email</h1>
                                    <input
                                        type="email"
                                        className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                        placeholder="moha***************.com"
                                    />
                                </div>
                                <div className="pt-2">
                                    <h1 className=" text-[16px] mb-2 mt-3">Phone Number</h1>
                                    <input
                                        type="text"
                                        className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                        placeholder="016*******11"
                                    />
                                </div>
                                <div className="pt-2">
                                    <h1 className=" text-[16px] mb-2 mt-3">Address</h1>
                                    <input
                                        type="text"
                                        className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                        placeholder="58/4 bonosree,dhaka"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="bg-[#8CAB91] uppercase text-[#FAF1E6] px-20 py-2 rounded-full my-10">
                                    Save & changes
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Change Password Section */}
                    {activeSection === "changePassword" && (
                        <div className="bg-white px-32 pt-3 shadow-2xl">
                            <h1 className="text-center py-3 text-[20px] font-[500]">
                                Change Password
                            </h1>

                            <div className="pt-2">
                                <h1 className="text-[16px] mb-2 mt-3">Current Password</h1>
                                <div className="relative">
                                    <input
                                        type={passwordVisibility.currentPassword ? "text" : "password"}
                                        className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                        placeholder="****************"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => toggleVisibility("currentPassword")}
                                    >
                                        {passwordVisibility.currentPassword ? (
                                            <FaEyeSlash size={16} />
                                        ) : (
                                            <FaEye size={16} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h1 className="text-[16px] mb-2 mt-3">New Password</h1>
                                <div className="relative">
                                    <input
                                        type={passwordVisibility.newPassword ? "text" : "password"}
                                        className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                        placeholder="*****************"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => toggleVisibility("newPassword")}
                                    >
                                        {passwordVisibility.newPassword ? (
                                            <FaEyeSlash size={16} />
                                        ) : (
                                            <FaEye size={16} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h1 className="text-[16px] mb-2 mt-3">Confirm Password</h1>
                                <div className="relative">
                                    <input
                                        type={passwordVisibility.confirmPassword ? "text" : "password"}
                                        className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                        placeholder="**********"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                        onClick={() => toggleVisibility("confirmPassword")}
                                    >
                                        {passwordVisibility.confirmPassword ? (
                                            <FaEyeSlash size={16} />
                                        ) : (
                                            <FaEye size={16} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="bg-[#8CAB91] text-[#FAF1E6] uppercase px-20 py-2 rounded-full my-10">
                                    Save & changes
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
