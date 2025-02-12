import { useState } from "react";
import { FiTriangle } from "react-icons/fi";
const AddCupon = () => {
    const [price, setPrice] = useState(30);
    const [amount, setAmount] = useState(30);

    return (
        <div className="flex items-center justify-center">
            <div className="w-[651px] h-[823px] bg-white p-2 shadow-lg">
                {/* Header Section */}
                <div className="w-full h-[178px] bg-[#FAF1E6] flex  items-center justify-center space-x-5 ">
                    <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png" alt="Logo" className="h-20" />
                    <p className="text-[14px] text-[#8CAB91] font-[500]">una historia para siempre</p>
                </div>


                <div className="flex items-center space-x-4">
                    <div className="my-10 w-1/2">
                        <h1 className="text-sm font-medium">Coupon Name</h1>
                        <input type="text" className="w-full  p-2 border border-[#8CAB91] bg-transparent focus:outline-none" />
                    </div>
                    <div className="my-10 w-1/2">
                        <h1 className="text-sm font-medium">Coupon Name</h1>
                        <input type="text" className="w-full  p-2 border border-[#8CAB91] bg-transparent focus:outline-none" />
                    </div>
                </div>


                <h1 className="text-[18px] font-[500] mt-10">Discount</h1>
                {/* Discount Section */}
                <div className="flex items-center space-x-[10px]">
                    <div className="mt-4 w-1/2 pr-[7px]">
                        <label className="text-sm font-medium">Percentage</label>
                        <div className="flex items-center border border-[#8CAB91] text-[#8CAB91] mt-1 relative bg-white">
                            {/* Static dollar sign */}
                            <div className="absolute left-2 text-[#8CAB91]">$
                            </div>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full pl-6 p-2 border-none bg-transparent focus:outline-none"
                            />
                            <div className="absolute right-2 flex space-x-1 text-[#8CAB91]">
                                <button
                                    className="text-gray-600 hover:text-black"
                                    onClick={() => setPrice((prev) => Number(prev) + 1)}
                                >
                                    <FiTriangle size={12} />
                                </button>
                                <button
                                    className="text-gray-600  rotate-180"
                                    onClick={() => setPrice((prev) => Math.max(Number(prev) - 1, 0))}
                                >
                                    <FiTriangle size={12} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 w-1/2 pr-[7px]">
                        <label className="text-sm font-medium">Usage limit</label>
                        <div className="flex items-center border border-[#8CAB91] text-[#8CAB91] mt-1 relative bg-white">
                            <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full  p-2 border-none bg-transparent focus:outline-none"
                            />
                            <div className="absolute right-2 flex space-x-1 text-[#8CAB91]">
                                <button
                                    className="text-gray-600 hover:text-black"
                                    onClick={() => setAmount((prev) => Number(prev) + 1)}
                                >
                                    <FiTriangle size={12} />
                                </button>
                                <button
                                    className="text-gray-600  rotate-180"
                                    onClick={() => setAmount((prev) => Math.max(Number(prev) - 1, 0))}
                                >
                                    <FiTriangle size={12} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date Pickers */}
                <div className="mt-4 flex gap-4 ">
                    <div className="w-1/2">
                        <label className="text-sm font-medium">Start Date</label>
                        <input type="date" className="w-full p-2 border border-[#8CAB91] text-[#8CAB91] mt-1" />
                    </div>
                    <div className="w-1/2">
                        <label className="text-sm font-medium">End Date</label>
                        <input type="date" className="w-full p-2 border  border-[#8CAB91] text-[#8CAB91] mt-1" />
                    </div>
                </div>



                {/* Create Button */}
                <button className=" w-96 ml-32  bg-[#8CAB91] text-white py-2  mt-28  rounded-full hover:bg-[#6f8673] ">
                    CREATE
                </button>
            </div>
        </div>
    );
}

export default AddCupon;
