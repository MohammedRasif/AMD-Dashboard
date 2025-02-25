import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoCameraReverseOutline } from "react-icons/io5";
import { useAdminProfileDataQuery, useEditAdminProfileDataMutation } from "../../../redux/feature/ApiSlice";

const AdminProfile = () => {
    // State to track active section
    const [activeSection, setActiveSection] = useState("editProfile");

    // Password visibility toggle
    const [passwordVisibility, setPasswordVisibility] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    // Fetch admin profile data
    const { data: adminProfile } = useAdminProfileDataQuery();
    console.log(adminProfile);
    const [editAdminProfile] = useEditAdminProfileDataMutation();

    // State to store form data
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone1: "",
        address_line1: "",
    });

    // State for selected image
    const [selectedImage, setSelectedImage] = useState("");

    // Update formData when adminProfile changes
    useEffect(() => {
        if (adminProfile) {
            setFormData({
                full_name: adminProfile.full_name || "",
                email: adminProfile.email || "",
                phone1: adminProfile.phone1 || "",
                address_line1: adminProfile.address_line1 || "",
            });
        }
    }, [adminProfile]);

        // Handle Input Change
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        // Handle Form Submit
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await editAdminProfile(formData); // API call
                console.log("Updated Profile Response:", response); // Console log updated data
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        };
    

     // Update selectedImage when adminProfile changes
    useEffect(() => {
        if (adminProfile?.image) {
            setSelectedImage(adminProfile.image);
        }
    }, [adminProfile]);

    // Handle image upload
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);

            // Create FormData object
            const formData = new FormData();
            formData.append("image", file);

            // Get token from local storage
            const token = localStorage.getItem("accessToken"); // Replace "token" with your actual key

            try {
                // Send PATCH request to update profile image
                const response = await fetch("http://192.168.10.153:8081/api/user/profile/update/", {
                    method: "PATCH",
                    body: formData,
                    headers: {
                        // Include the token in the Authorization header
                        Authorization: `Bearer ${token}`,
                    },
                });
                    console.log(response);
                if (response.ok) {
                    alert("Profile image updated successfully!");
                } else {
                    alert("Failed to update profile image.");
                }
            } catch (error) {
                console.error("Error updating profile image:", error);
                alert("An error occurred while updating the profile image.");
            }
        }
    };


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
                    <div className="w-[715px] h-[184px] shadow-2xl bg-[#8CAB91] flex items-center justify-center space-x-3 relative">
                        {/* Profile Image */}
                        <div>
            <div className="relative">
                <img
                    src={adminProfile?.image || "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png"}
                    className="w-[122px] h-[122px] rounded-full object-cover"
                    alt="Profile"
                />
                {/* Hidden File Input */}
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="fileInput"
                    onChange={handleImageChange}
                />
                {/* Camera Button */}
                <button
                    className="bg-[#FAF1E6] p-2 rounded-full absolute bottom-0 right-0 cursor-pointer"
                    onClick={() => document.getElementById("fileInput").click()}
                >
                    <IoCameraReverseOutline size={20} />
                </button>
            </div>
        </div>

                        {/* Profile Info */}
                        <div className="text-[20px] text-[#FAF1E6]">
                            <div className="text-[20px] text-[#FAF1E6]">
                                <h1>{adminProfile?.full_name || "Admin"}</h1>
                            </div>
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
                        <form onSubmit={handleSubmit} className="bg-white px-32 pt-3 shadow-2xl">
                            <h1 className="text-center py-3 text-[20px] font-[500]">Edit Your Profile</h1>

                            <div className="pt-2">
                                <h1 className="text-[16px] mb-2 mt-3">User Name</h1>
                                <input
                                    type="text"
                                    name="full_name"
                                    className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    readOnly 
                                />
                            </div>
                            <div className="pt-2">
                                <h1 className="text-[16px] mb-2 mt-3">Email</h1>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                    value={formData.email}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div>
                            <div className="pt-2">
                                <h1 className="text-[16px] mb-2 mt-3">Phone Number</h1>
                                <input
                                    type="text"
                                    name="phone1"
                                    className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                    value={formData.phone1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="pt-2">
                                <h1 className="text-[16px] mb-2 mt-3">address_line1</h1>
                                <input
                                    type="text"
                                    name="address_line1"
                                    className="w-full h-[40px] border border-gray-400 rounded-md text-[#364636] pl-3"
                                    value={formData.address_line1}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <button type="submit" className="bg-[#8CAB91] uppercase text-[#FAF1E6] px-20 py-2 rounded-full my-10">
                                    Save & Changes
                                </button>
                            </div>
                        </form>
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