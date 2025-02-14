import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="pr-10 pb-2 ">
            <div className="flex items-center w-full justify-end pt-6 space-x-2 ">
                {/* Notification Icon */}
                <NavLink to="/notification">
                    <div className=" relative w-[39.33px] h-[40px] rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <IoMdNotificationsOutline className=" " />
                    </div>
                    <div className="absolute bg-[#8CAB91]  rounded-full px-1 top-[28px] right-[183px]">
                        <h1 className="text-[10px] text-[#FAF1E6]">5</h1>
                    </div>
                </NavLink>

                {/* Profile Section - Click to Open Modal */}
                <NavLink to="/adminProfile">
                    <div
                        className="flex items-center space-x-2 cursor-pointer"

                    >
                        <img
                            src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png"
                            className="h-[48px] w-[48px]"
                            alt=""
                        />
                        <h1 className="font-[600] text-[18px] ">Md Rasif</h1>
                    </div>
                </NavLink>
            </div>


        </div>
    );
};

export default Navbar;
