import { useState } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdArrowBack, MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Question = () => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);


    const categories = [
        { question: " What’s one of your earliest memories, and why does it stand out to you?", },
        { question: " What’s one of your earliest memories, and why does it stand out to you?", },
        { question: " What’s one of your earliest memories, and why does it stand out to you?", },
        { question: " What’s one of your earliest memories, and why does it stand out to you?", },
        { question: " What’s one of your earliest memories, and why does it stand out to you?", },
    ];
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 mb-4">
                    <NavLink to="/addquestionnaire">
                        <div className="text-white bg-[#8CAB91]  px-4 py-2 hover:bg-[#7a9c82] transition">
                            <MdArrowBack className="text-xl" />
                        </div>
                    </NavLink>
                    <h1 className="text-2xl font-bold">Childhood</h1>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-[185px] h-[38px] bg-[#8CAB91] text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl cursor-pointer">
                    <FaPlus className="text-sm" />
                    <h1>Add New Section</h1>
                </button>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm">
                        {/* Modal Content */}
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
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
                                <div className="flex items-center justify-between px-2 border border-gray-200 rounded-md">
                                    <button className="w-full   text-sm font-[100] text-start py-2 pl-2 rounded-md ">Add more question</button>
                                    <FaPlus className="text-[10px]" />
                                </div>
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
            <div className=" bg-white p-10 mt-2">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex h-[70px] justify-between items-center p-4 border border-green-300 rounded-lg bg-[#FAF1E6] mb-5"
                    >
                        {/* Left Section: Title & Subtitle */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {category.question}
                            </h3>

                        </div>

                        {/* Right Section: Icons */}
                        <div className="flex items-center gap-3 text-green-700  text-[24px]">
                            <MdDeleteOutline className="cursor-pointer hover:text-red-500 transition" />
                            <button
                                onClick={() => setEditModalOpen(true)}
                            >
                                <FaRegEdit className="cursor-pointer hover:text-blue-500 transition " />
                            </button>
                            {editModalOpen && (
                                <div className="fixed  inset-0 flex items-center justify-center   bg-opacity-30 backdrop-blur-sm">
                                    {/* Modal Content */}
                                    <div className="bg-white p-5 rounded-lg shadow-lg w-[400px] relative">
                                        {/* Close Button */}
                                        <button
                                            className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
                                            onClick={() => setEditModalOpen(false)}
                                        >
                                            <FaTimes size={18} />
                                        </button>

                                        {/* Modal Heading */}
                                        <h2 className="text-lg text-black font-semibold mb-4">Edit Question</h2>

                                        {/* Input Fields */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Question</label>
                                            <input
                                                type="text"

                                                className="w-full mt-3   border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
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
    );
}

export default Question;
