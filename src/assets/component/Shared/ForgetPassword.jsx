
const ForgetPassword = () => {
    return (
        <div>

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


                        <button className="mt-10 bg-[#8CAB91] w-full px-7 rounded-full h-12 text-[16px] text-[#FAF1E6] uppercase cursor-pointer">confirm</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ForgetPassword;
