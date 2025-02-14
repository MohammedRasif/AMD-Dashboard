import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MakeAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");


    const handleDelete = () => {

        setIsOpenDelete(false);
    };




    // Sample user data
    const users = [
        {
            id: 1,
            name: "Hart Hagerty",
            country: "United States",
            email: "hart@example.com",
            role: "admin",
            subscription: "Premium",
            income: "$20",
        },
        {
            id: 2,
            name: "Brice Swyre",
            country: "China",
            email: "brice@example.com",
            role: "user",
            subscription: "Free",
            income: "$15",
        },
        {
            id: 5,
            name: "Mohammad Rasif",
            country: "Bangladesh",
            email: "mohammadrasif001@gmail.com",
            role: "admin",
            subscription: "Premium",
            income: "$30",
        },
    ];


    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-bold  ">Ouestionnaire</h1>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-[160px] uppercase h-[38px] bg-[#8CAB91] mt-2 text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl cursor-pointer">
                    <FaPlus className="text-sm" />
                    <h1>Make Admin</h1>
                </button>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm z-50">
                        {/* Modal Content */}
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer "
                                onClick={() => setIsOpen(false)}
                            >
                                <FaTimes size={18} />
                            </button>

                            {/* Modal Heading */}
                            <h2 className="text-lg font-semibold mb-4">Make Admin</h2>

                            {/* Input Fields */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    placeholder="Type Name"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                />
                            </div>
                            {/* Input email */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="text"
                                    placeholder="Type Email"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                />
                            </div>
                            {/* Input passwod */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="text"
                                    placeholder="**********"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Select Role</label>

                                <select
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none "
                                >
                                    <option value="" disabled>Select a role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                            </div>
                            {/* Publish Button */}
                            <button
                                className="px-3 py-2 bg-[#8CAB91] text-white rounded-md hover:bg-[#7A9B80] transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Publish
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <table className="table-auto w-full border-collapse mt-6 bg-white">
                    <thead>
                        <tr className="text-gray-700">
                            <th className="p-3">S No.</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">User Type</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="hover:bg-gray-100 transition-all duration-200">
                                <td className="p-3 text-center">{index + 1}</td>
                                <td className="p-3 flex items-center gap-3">

                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm text-gray-500">{user.country}</div>
                                    </div>
                                </td>
                                <td className="p-3 text-gray-700">{user.email}</td>
                                <td className="p-3 text-gray-600">{user.role}</td>
                                <td className="p-3 text-center">

                                    <div>
                                        {/* Delete Button (Triggers Modal) */}
                                        <button
                                            className="text-xl text-red-500 hover:text-blue-500 cursor-pointer"
                                            onClick={() => setIsOpenDelete(true)}
                                        >
                                            <MdDeleteOutline />
                                        </button>

                                        {/* Modal Popup */}
                                        {isOpenDelete && (
                                            <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm z-50">
                                                <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] relative">
                                                    {/* Close (Cancel) Icon */}
                                                    <button
                                                        className="absolute top-2 right-2   bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
                                                        onClick={() => setIsOpenDelete(false)}
                                                    >
                                                        <FaTimes size={18} />
                                                    </button>

                                                    {/* Modal Heading */}
                                                    <h2 className="text-[14px] font-[500] text-center">Are you sure?</h2>
                                                    <p className="text-[16px] text-[#997D00] text-center my-5">
                                                        Do you want to delete this content?
                                                    </p>

                                                    {/* Buttons */}
                                                    <div className="flex justify-center space-x-4 mt-4">
                                                        <button
                                                            className="px-4 py-2 bg-[#8CAB91] text-white rounded-lg cursor-pointer"
                                                            onClick={handleDelete}
                                                        // onClick={handleClickDelete}
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MakeAdmin;
