import { AnimatePresence, motion } from "framer-motion";

const ForgetPassword = () => {
    return (
        <div>
            <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex justify-end bg-white min-h-screen items-center z-50 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{}}
                onClick={() => setIsProfileOpen(false)} // Close when clicking outside
            >
                <motion.div
                    className="relative w-full  bg-white rounded-lg"
                    initial={{}}
                    animate={{}}
                    exit={{}}
                    transition={{}}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                >
                    <div className="flex items-center pl-80 pt-36 space-x-10 ">
                        <div className="w-[573px] h-[810px] pt-20">
                            <img
                                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png"
                                className="w-[483px] h-[280.5px]"
                                alt="Login Image"
                            />
                        </div>
                        <div className="w-[573px] h-[810px] pt-36">
                            <div>
                            <h1 className="text-[48px] font-[500] text-[#364636] text-center">Forgot Password</h1>
                            <div className="pt-10">
                                <h1 className=" text-[16px] mb-2">Email</h1>
                                <input type="email" name="" className="w-full h-[50px] border border-gray-400 rounded-md text-[#364636] pl-3 " id="" placeholder="Enter you email" />
                            </div>
                            
                            
                            <button className="mt-10 bg-[#8CAB91] w-full px-7 rounded-full h-12 text-[16px] text-[#FAF1E6] uppercase">confirm</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
        </div>
    );
}

export default ForgetPassword;
