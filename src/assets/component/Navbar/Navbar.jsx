import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className="pr-10">
            <div className="flex items-center justify-end pt-6 space-x-2">
                {/* Notification Icon */}
                <div className="w-[39.33px] h-[40px] rounded-full bg-[#F2F2F2] flex items-center justify-center">
                    <IoMdNotificationsOutline className=" " />
                </div>

                {/* Profile Section - Click to Open Modal */}
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setIsProfileOpen(true)}
                >
                    <img
                        src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png"
                        className="h-[48px] w-[48px]"
                        alt=""
                    />
                    <h1 className="font-[600] text-[18px]">Md Rasif</h1>
                </div>
            </div>

            {/* Profile Modal */}
            <AnimatePresence>
                {isProfileOpen && (
                    <motion.div
                        className="fixed inset-0 flex justify-end -mt-20 pr-10  items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        onClick={() => setIsProfileOpen(false)} // Close when clicking outside
                    >
                        <motion.div
                            className="relative w-[503px] shadow-lg bg-white rounded-lg"
                            initial={{ y: "-100vh", opacity: 0 }}
                            animate={{ y: "0", opacity: 1 }}
                            exit={{ y: "100vh", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 25 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                        >
                            <div>
                                <div className="w-[503px] h-[238px] bg-[#8CAB91] flex items-center justify-center">
                                    <div className="text-center">
                                        <img
                                            src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png"
                                            className="w-[115.98px] h-[124.08px] rounded-full border"
                                            alt=""
                                        />
                                        <div className="pt-2">
                                            <h1 className="text-[24px] font-[500] text-[#FAF1E6]">
                                                Md Rasif
                                            </h1>
                                            <p className="text-[14px] font-[500]">User</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 cursor-pointer">
                                        <MdOutlineCancel
                                            className="text-[20px] text-[#FAF1E6]"
                                            onClick={() => setIsProfileOpen(false)} // Close when clicking the cancel icon
                                        />
                                    </div>
                                </div>
                                <div className="p-10 space-y-3">
                                    <div>
                                        <h1 className="text-[16px] font-[500]">Name</h1>
                                        <p className="text-[14px] text-[#555555]">Md Rasif</p>
                                    </div>
                                    <div>
                                        <h1 className="text-[16px] font-[500]">Email</h1>
                                        <p className="text-[14px] text-[#555555]">
                                            mahmud@gmail.com
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="text-[16px] font-[500]">Contact No</h1>
                                        <p className="text-[14px] text-[#555555]">
                                            +919355574544
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="text-[16px] font-[500]">Date of birth</h1>
                                        <p className="text-[14px] text-[#555555]">17 dec, 2024</p>
                                    </div>
                                    <div>
                                        <h1 className="text-[16px] font-[500]">Subscription Type</h1>
                                        <p className="text-[14px] text-[#555555]">
                                            Premium subscription
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="text-[16px] font-[500]">Address</h1>
                                        <p className="text-[14px] text-[#555555]">
                                            68/ Joker Vila, Gotham City
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
