import  { useState } from "react";
import { FiTriangle } from "react-icons/fi";

const CreateSubscription = () => {
    const [price, setPrice] = useState(30);

    return (
        <div className="flex items-center justify-center">
            <div className="w-[651px] h-[823px] bg-white p-2 shadow-lg">
            {/* Header Section */}
            <div className="w-full h-[178px] bg-[#FAF1E6] flex  items-center justify-center space-x-5 ">
                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png" alt="Logo" className="h-20" />
                <p className="text-[14px] text-[#8CAB91] font-[500]">una historia para siempre</p>
            </div>

            {/* Package Details */}
            <div className="flex items-center space-x-3 ">
                <div className="mt-4 w-1/2 ">
                    <label className="text-sm font-medium">Package Name</label>
                    <select className="w-full p-2 border border-[#8CAB91] text-[#8CAB91] mt-1">
                        <option>Order Hard Copy</option>
                    </select>
                </div>

                <div className="mt-4 w-1/2">
                    <label className="text-sm font-medium">Package Price</label>
                    <div className="flex items-center border border-[#8CAB91] text-[#8CAB91]  mt-1 relative bg-white">
                        <input
                            type="text"
                            value={`$${price}`}
                            readOnly
                            className="w-full  p-2 border-none bg-transparent focus:outline-none"
                        />
                        <div className="absolute right-2 flex space-x-1 text-[#8CAB91]">
                            <button
                                className="text-gray-600 hover:text-black"
                                onClick={() => setPrice((prev) => prev + 1)}
                            >
                                <FiTriangle size={12} />
                            </button>
                            <button
                                className="text-gray-600 hover:text-black rotate-180"
                                onClick={() => setPrice((prev) => Math.max(prev - 1, 0))}
                            >
                                <FiTriangle size={12} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discount Section */}
            <div className="mt-4 w-1/2 pr-[7px]">
                <label className="text-sm font-medium">Package Price</label>
                <div className="flex items-center border border-[#8CAB91] text-[#8CAB91]  mt-1 relative bg-white">
                    <input
                        type="text"
                        value={`$${price}`}
                        readOnly
                        className="w-full  p-2 border-none bg-transparent focus:outline-none"
                    />
                    <div className="absolute right-2 flex space-x-1 text-[#8CAB91]">
                        <button
                            className="text-gray-600 hover:text-black"
                            onClick={() => setPrice((prev) => prev + 1)}
                        >
                            <FiTriangle size={12} />
                        </button>
                        <button
                            className="text-gray-600 hover:text-black rotate-180"
                            onClick={() => setPrice((prev) => Math.max(prev - 1, 0))}
                        >
                            <FiTriangle size={12} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Date Pickers */}
            <div className="mt-4 flex gap-4">
                <div className="w-1/2">
                    <label className="text-sm font-medium">Start Date</label>
                    <input type="date" className="w-full p-2 border border-[#8CAB91] text-[#8CAB91] mt-1" />
                </div>
                <div className="w-1/2">
                    <label className="text-sm font-medium">End Date</label>
                    <input type="date" className="w-full p-2 border  border-[#8CAB91] text-[#8CAB91] mt-1" />
                </div>
            </div>

            {/* Package Offer */}
            <div className="mt-4">
                <h2 className="text-sm font-medium">Package Offer</h2>
                <ul className="mt-2 text-[16px] font-[500] text-gray-700">
                    <li>✅ Unlimited chat with the AI Chat Bot.</li>
                    <li>✅ Access Full Book.</li>
                    <li>✅ 200 images in Book.</li>
                    <li>✅ Downloadable soft copy PDF book.</li>
                    <li>✅ $10 off on physical book.</li>
                </ul>
            </div>

            {/* Create Button */}
            <button className=" w-96 ml-32  bg-[#8CAB91] text-white py-2  mt-28  rounded-full hover:bg-[#6f8673] ">
                CREATE
            </button>
        </div>
        </div>
    );
};

export default CreateSubscription;
