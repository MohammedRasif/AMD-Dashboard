import { useState } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const AddQuestionnaire = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const handleDelete = () => {

        setIsOpenDelete(false);
    };


    const categories = [
        { name: "Childhood", questionsAdded: 5, totalQuestions: 10 },
        { name: "Family", questionsAdded: 5, totalQuestions: 10 },
        { name: "Love", questionsAdded: 5, totalQuestions: 10 },
        { name: "Friends", questionsAdded: 5, totalQuestions: 10 },
        { name: "Others", questionsAdded: 5, totalQuestions: 10 },
    ];

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-bold  ">Ouestionnaire</h1>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-[185px] h-[38px] bg-[#8CAB91] mt-2 text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl cursor-pointer">
                    <FaPlus className="text-sm" />
                    <h1>Add New Section</h1>
                </button>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm z-50">
                        {/* Modal Content */}
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6]"
                                onClick={() => setIsOpen(false)}
                            >
                                <FaTimes size={18} />
                            </button>

                            {/* Modal Heading */}
                            <h2 className="text-lg font-semibold mb-4">ADD New Section</h2>

                            {/* Input Fields */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Section Name</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Number of question</label>
                                <input
                                    type="number"
                                    placeholder="Type here"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                />
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
                <div className="bg-white p-10   mt-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex h-[103px] justify-between items-center p-4 border border-green-300 rounded-lg bg-[#FAFAF5] mb-5"
                        >
                            {/* Left Section: Title & Subtitle */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {category.questionsAdded}/{category.totalQuestions} Questions Added
                                </p>
                            </div>

                            {/* Right Section: Icons */}
                            <div className="flex items-center gap-3 text-green-700 text-[24px]">
                                <NavLink to="/question">
                                    <IoEyeOutline className="cursor-pointer hover:text-green-500 transition" />
                                </NavLink>
                                <button
                                    onClick={() => setIsOpenDelete(true)}
                                >
                                    <MdDeleteOutline className="cursor-pointer hover:text-red-500 transition" />
                                </button>
                                {/* Modal Popup */}
                                {isOpenDelete && (
                                    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm z-50" >
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
                                            <div className="flex text-[16px] font-[500] justify-center space-x-4 mt-4">
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
                                <button
                                    onClick={() => setEditModalOpen(true)}
                                >
                                    <FaRegEdit className="cursor-pointer hover:text-blue-500 transition" />
                                </button>
                                {editModalOpen && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm">
                                        {/* Modal Content */}
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                                            {/* Close Button */}
                                            <button
                                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6]"
                                                onClick={() => setEditModalOpen(false)}
                                            >
                                                <FaTimes size={18} />
                                            </button>

                                            {/* Modal Heading */}
                                            <h2 className="text-lg text-black font-semibold mb-4">Edit Section</h2>

                                            {/* Input Fields */}
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Section Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full   border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Number of question</label>
                                                <input
                                                    className="w-full  border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                                />
                                            </div>

                                            {/* Publish Button */}
                                            <button
                                                className="px-3 py-2 bg-[#8CAB91] text-[18px] text-white rounded-md hover:bg-[#7A9B80] transition"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Publish
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddQuestionnaire;
