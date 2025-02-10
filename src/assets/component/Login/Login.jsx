import { AnimatePresence, motion } from "framer-motion";

const Login = ({ setIsProfileOpen }) => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex justify-end bg-white min-h-screen items-center z-50 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 25 }}
                onClick={() => setIsProfileOpen(false)} // Close when clicking outside
            >
                <motion.div
                    className="relative w-full  bg-white rounded-lg"
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: "0", opacity: 1 }}
                    exit={{ y: "100vh", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                >
                    <div className="flex items-center justify-center w-[1146px]">
                        <div className="w-[573px] h-[810px]">
                            <img
                                src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png"
                                className="w-[483px] h-[280.5px]"
                                alt="Login Image"
                            />
                        </div>
                        <div className="w-[573px] h-[810px]">
                           <h1 className="text-[48px] font-[500] text-center">Login to Account</h1>
                           <p className="text-[14px] font-[500] text-center">Please enter your email and password to continue</p>
                           <div className="pt-10">
                           <h1 className=" text-[16px] mb-3">Email</h1>
                           <input type="email" name="" className="w-full h-[50px] border border-gray-400 rounded-md" id="" placeholder="Enter you email"/>
                           </div>
                           <div className="pt-2">
                           <h1 className=" text-[16px] mb-3">Password</h1>
                           <input type="email" name="" className="w-full h-[50px] border border-gray-400 rounded-md" id="" placeholder="****************"/>
                           </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Login; 
