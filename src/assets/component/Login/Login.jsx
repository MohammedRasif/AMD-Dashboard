
const Login = () => {
    return (

        <div className="flex items-center pl-80 pt-36 space-x-10 ">
            <div className="w-[573px] h-[810px] pt-20">
                <img
                    src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png"
                    className="w-[483px] h-[280.5px]"
                    alt="Login Image"
                />
            </div>
            <div className="w-[573px] h-[810px]">
                <h1 className="text-[48px] font-[500] text-center">Login to Account</h1>
                <p className="text-[14px] font-[500] text-center pt-10 text-[#364636] ">Please enter your email and password to continue</p>
                <div className="pt-10">
                    <h1 className=" text-[16px] mb-2">Email</h1>
                    <input type="email" name="" className="w-full h-[50px] border border-gray-400 rounded-md text-[#364636] pl-3 " id="" placeholder="Enter you email" />
                </div>
                <div className="pt-2">
                    <h1 className=" text-[16px] mb-2 mt-3">Password</h1>
                    <input type="email" name="" className="w-full h-[50px] border border-gray-400 rounded-md text-[#364636] pl-3" id="" placeholder="****************" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 pt-5">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="remember"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Remember me
                        </label>
                    </div>
                    <a
                        href="#"
                        className="text-sm text-red-600 hover:text-red-700"
                    >
                        Forgot password?
                    </a>
                </div>
                <button className="mt-10 bg-[#8CAB91] w-full px-7 rounded-full h-12 text-[16px] text-[#FAF1E6] cursor-pointer"> SIGN IN</button>
            </div>
        </div>

    );
};

export default Login; 
