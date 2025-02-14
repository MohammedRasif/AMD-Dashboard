import { useState } from "react";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Notification = () => {
    const [activeNotification, setActiveNotification] = useState(null); // Track the active notification

    const categories = [
        { question: "What’s one of your earliest memories, and why does it stand out to you?" },
        { question: "What’s one of your earliest memories, and why does it stand out to you?" },
        { question: "What’s one of your earliest memories, and why does it stand out to you?" },
        { question: "What’s one of your earliest memories, and why does it stand out to you?" },
        { question: "What’s one of your earliest memories, and why does it stand out to you?" },
    ];

    const handleNotificationClick = (index) => {
        setActiveNotification(index); // Set the clicked notification as active
    };

    return (
        <div className="mt-3">
            <div className="flex justify-end text-[#FAF1E6]">
                <div className="flex items-center w-[110px] pl-2 py-2 border-2 rounded-md mb-3 space-x-2 border-[#8CAB91] text-[#8CAB91]">
                    <FaPlus />
                    <button className="font-[500]">Read all</button>
                </div>
            </div>

            <div className=" mt-4 ">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`flex h-[65px] justify-between items-center p-4 mb-5 shadow-md ${
                            activeNotification === index ? "bg-[#FAF1E6]" : "bg-white"
                        }`} // Apply bg color based on active state
                        onClick={() => handleNotificationClick(index)} // Handle click event
                    >
                        {/* Left Section: Title & Subtitle */}
                        <div>
                            <h3 className="text-[18px] font-semibold text-gray-800">{category.question}</h3>
                            <p className="text-[14px] text-[#919191]">{category.question}</p>
                        </div>

                        {/* Right Section: Icons */}
                        <div className="flex items-center gap-3 text-[#8CAB91] font-[500] text-[18px]">
                            <h1>view</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notification;
