import { useState } from "react";
import { FiTriangle } from "react-icons/fi";
import { useCreateCuponMutation } from "../../../redux/feature/ApiSlice";
import { useNavigate } from "react-router-dom";

const AddCupon = () => {
    const [couponName, setCouponName] = useState("");
    const [discount, setDiscount] = useState(30);
    const [usageLimit, setUsageLimit] = useState(30);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const navigate = useNavigate()


    // ✅ API Call Hook
    const [addCupon, { isLoading }] = useCreateCuponMutation();

    // ✅ Submit Function
    const handleSubmit = async () => {
        if (!couponName || !couponCode ||  !discount || !usageLimit || !startDate || !endDate) {
            alert("All fields are required!");
            return;
        }

        const newCoupon = {
            name: couponName,
            code: couponCode,
            limit: usageLimit,
            discount: discount,
            start_at: startDate,
            expires_at: endDate,
        };
        try {
            const response = await addCupon(newCoupon).unwrap();
            console.log("Coupon Created Successfully:", response);
            navigate("/coupon-code")

        } catch (error) {
            console.error("Error creating coupon:", error);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="w-[651px] h-[823px] bg-white p-2 shadow-lg">
                {/* Header Section */}
                <div className="w-full h-[178px] bg-[#FAF1E6] flex items-center justify-center space-x-5">
                    <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png" alt="Logo" className="h-20" />
                    <p className="text-[14px] text-[#8CAB91] font-[500]">una historia para siempre</p>
                </div>

                 {/* Coupon Name & Coupon Code in Flex */}
                 <div className="flex gap-4 mb-4 mt-20">
                    <div className="w-1/2">
                        <label className="text-sm font-medium">Coupon Name</label>
                        <input
                            type="text"
                            value={couponName}
                            onChange={(e) => setCouponName(e.target.value)}
                            placeholder="Enter Coupon Name"
                            className="w-full p-2 border border-gray-400 rounded"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-sm font-medium">Coupon Code</label>
                        <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter Coupon Code"
                            className="w-full p-2 border border-gray-400 rounded"
                        />
                    </div>
                </div>

                {/* Discount Section */}
                <h1 className="text-[18px] font-[500] mt-10">Discount</h1>
                <div className="flex items-center space-x-[10px]">
                    {/* Percentage */}
                    <div className="mt-4 w-1/2 pr-[7px]">
                        <label className="text-sm font-medium">Percentage</label>
                        <div className="flex items-center border border-[#8CAB91] text-[#8CAB91] mt-1 relative bg-white">
                            <input
                                type="number"
                                value={discount}
                                onChange={(e) => setDiscount(Number(e.target.value))}
                                className="w-full pl-6 p-2 border-none bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Usage Limit */}
                    <div className="mt-4 w-1/2 pr-[7px]">
                        <label className="text-sm font-medium">Usage limit</label>
                        <div className="flex items-center border border-[#8CAB91] text-[#8CAB91] mt-1 relative bg-white">
                            <input
                                type="number"
                                value={usageLimit}
                                onChange={(e) => setUsageLimit(Number(e.target.value))}
                                className="w-full p-2 border-none bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Date Pickers */}
                <div className="mt-4 flex gap-4">
                    <div className="w-1/2">
                        <label className="text-sm font-medium">Start Date</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full p-2 border border-[#8CAB91] text-[#8CAB91] mt-1"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="text-sm font-medium">End Date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full p-2 border border-[#8CAB91] text-[#8CAB91] mt-1"
                        />
                    </div>
                </div>

                {/* Create Button */}
                <button
                    className="w-96 ml-32 bg-[#8CAB91] text-white py-2 mt-28 rounded-full hover:bg-[#6f8673]"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? "Creating..." : "CREATE"}
                </button>
            </div>
        </div>
    );
};

export default AddCupon;
