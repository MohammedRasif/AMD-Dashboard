import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCuponDataQuery, useEidtCuponMutation } from "../../../redux/feature/ApiSlice";

const EditCupon = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const qusId = parseInt(id); // Ensure it's a number

    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [couponName, setCouponName] = useState("");
    const [couponCode, setCouponCode] = useState("");  // Add state for coupon code
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    console.log(couponName);

    // Fetch coupon data based on the ID
    const { data: coupons, isLoading, error } = useCuponDataQuery(qusId, { skip: !qusId });
    const [eidtCupon] = useEidtCuponMutation();


    useEffect(() => {
        if (coupons && Array.isArray(coupons)) {
            const matchedCoupon = coupons.find(coupon => coupon.id === qusId);

            if (matchedCoupon) {
                setCouponName(matchedCoupon.name);
                setCouponCode(matchedCoupon.code);
                setPrice(matchedCoupon.discount);
                setAmount(matchedCoupon.limit);

                // Format the dates to 'YYYY-MM-DD' format
                const startDateFormatted = matchedCoupon.start_at ? new Date(matchedCoupon.start_at).toISOString().slice(0, 10) : "";
                const endDateFormatted = matchedCoupon.expires_at ? new Date(matchedCoupon.expires_at).toISOString().slice(0, 10) : "";

                setStartDate(startDateFormatted);
                setEndDate(endDateFormatted);

                console.log("Coupon Data:", matchedCoupon); 
            } else {
                console.error("No coupon found with the given ID.");
            }
        }
    }, [coupons, qusId]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare the updated coupon object with the modified state values
        const updatedCoupon = {
            id: qusId,
            name: couponName,
            code: couponCode,
            discount: parseFloat(price), // Ensure it's a number
            limit: parseInt(amount),    // Ensure it's an integer
            start_at: new Date(startDate).toISOString(), // Convert to ISO format
            expires_at: new Date(endDate).toISOString(), // Convert to ISO format
        };

        console.log("Updated Coupon:", updatedCoupon);  // Log the state values before submitting

        try {
            // Trigger the mutation to update the coupon and get the response data
            const response = await eidtCupon({updatedCoupon ,id}).unwrap();  // unwrap() helps handle success/failure

            console.log("Coupon updated successfully:", response);  // Log the success response

            navigate("/coupon-code");
        } catch (error) {
            // Log the error if the mutation fails
            console.error("Failed to update the coupon:", error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data.</div>;

    return (
        <div className="flex items-center justify-center mt-3">
            <div className="w-[651px] h-[823px] bg-white p-2 shadow-lg">
                {/* Header Section */}
                <div className="w-full h-[178px] bg-[#FAF1E6] flex items-center justify-center space-x-5">
                    <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png" alt="Logo" className="h-20" />
                    <p className="text-[14px] text-[#8CAB91] font-[500]">una historia para siempre</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex items-center space-x-4">
                        <div className="my-10 w-1/2">
                            <h1 className="text-sm font-medium">Coupon Name</h1>
                            <input
                                type="text"
                                value={couponName}
                                onChange={(e) => setCouponName(e.target.value)}
                                className="w-full p-2 border border-[#8CAB91] bg-transparent focus:outline-none"
                            />
                        </div>
                        <div className="my-10 w-1/2">
                            <h1 className="text-sm font-medium">Coupon Code</h1>
                            <input
                                type="text"
                                value={couponCode}  // Bind couponCode state here
                                onChange={(e) => setCouponCode(e.target.value)}  // Allow editing of coupon code
                                className="w-full p-2 border border-[#8CAB91] bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    <h1 className="text-[18px] font-[500] mt-10">Discount</h1>
                    {/* Discount Section */}
                    <div className="flex items-center space-x-[10px]">
                        <div className="mt-4 w-1/2 pr-[7px]">
                            <label className="text-sm font-medium">Discount</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full p-2 border border-[#8CAB91] bg-transparent focus:outline-none"
                            />
                        </div>
                        <div className="mt-4 w-1/2 pr-[7px]">
                            <label className="text-sm font-medium">Usage Limit</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full p-2 border border-[#8CAB91] bg-transparent focus:outline-none"
                            />
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

                    {/* Update Button */}
                    <button
                        type="submit"
                        className="w-96 ml-32 bg-[#8CAB91] text-white py-2 mt-28 uppercase rounded-full hover:bg-[#6f8673]"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCupon;
