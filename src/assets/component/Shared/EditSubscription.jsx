import { useState, useEffect } from "react";
import { FiTriangle } from "react-icons/fi";
import { useSubscriptionDataQuery, useEditsubcriptionMutation } from "../../../redux/feature/ApiSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditSubscription = () => {
    const { id } = useParams(); // Get the subscription ID from URL
    const navigate = useNavigate();

    const [price, setPrice] = useState(30);
    const [discount, setDiscount] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [checkedItems, setCheckedItems] = useState({
        chat: false,
        fullBook: false,
        images: false,
        pdf: false,
        discount: false,
    });
    const [packageName, setPackageName] = useState("");

    // Fetch subscription data
    const { data: subscriptions, isLoading, error } = useSubscriptionDataQuery();
    const [editSubscription, { isLoading: isUpdating }] = useEditsubcriptionMutation();

    useEffect(() => {
        if (subscriptions && subscriptions.length > 0) {
            // Find the subscription by the ID from URL (converted to number)
            const subscription = subscriptions.find(sub => sub.id === parseInt(id));

            if (subscription) {
                setPackageName(subscription.name);
                setPrice(subscription.price);
                setDiscount(subscription.discount);

                // Format dates to "YYYY-MM-DD"
                setStartDate(subscription.start_at.split("T")[0]);
                setEndDate(subscription.expires_at.split("T")[0]);

                setCheckedItems({
                    chat: subscription.unlimited_ai_chat,
                    fullBook: subscription.allow_full_book_access,
                    images: subscription.allowed_images > 0,
                    pdf: subscription.allow_soft_copy_access,
                    discount: subscription.discount_on_physical_book > 0,
                });
            } else {
                console.error("Subscription not found");
            }
        }
    }, [subscriptions, id]); // Add `id` as dependency to ensure the effect runs when `id` changes

    // Function to toggle the checked status
    const toggleCheck = (key) => {
        setCheckedItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleUpdate = async () => {
        const updatedSubscription = {
            name: packageName,
            price: Number(price),
            discount: Number(discount),
            start_at: startDate,
            expires_at: endDate,
            unlimited_ai_chat: checkedItems.chat,
            allow_full_book_access: checkedItems.fullBook,
            allowed_images: checkedItems.images ? 200 : 0,
            allow_soft_copy_access: checkedItems.pdf,
            discount_on_physical_book: checkedItems.discount ? 10 : 0,
        };

        try {
            const response = await editSubscription({
                id: parseInt(id), // Use the dynamic subscription ID (convert to number)
                updateSubcription: updatedSubscription,
            }).unwrap();

            console.log("Subscription updated successfully:", response);
            navigate("/subscription");
        } catch (error) {
            console.error("Failed to update subscription:", error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div className="flex items-center justify-center mt-2">
            <div className="w-[651px] h-[823px] bg-white p-2 shadow-lg">
                {/* Header Section */}
                <div className="w-full h-[178px] bg-[#FAF1E6] flex items-center justify-center space-x-5">
                    <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png" alt="Logo" className="h-20" />
                    <p className="text-[14px] text-[#8CAB91] font-[500]">una historia para siempre</p>
                </div>

                {/* Package Details */}
                <div className="flex items-center space-x-3">
                    <div className="mt-4 w-1/2">
                        <label className="text-sm font-medium">Package Name</label>
                        <select
                            className="w-full p-2 border border-[#8CAB91] text-[#8CAB91] mt-1 hover:bg-[#758f79]"
                            value={packageName} // Bind the selected value to the state
                            onChange={(e) => setPackageName(e.target.value)} // Update the state on change
                        >
                            <option value="Order Hard Copy" className="bg-[#8CAB91] text-white hover:bg-[#758f79]">Order Hard Copy</option>
                            <option value="Digital Copy" className="bg-[#8CAB91] text-white hover:bg-[#758f79]">Digital Copy</option>
                            <option value="Premium Package" className="bg-[#8CAB91] text-white hover:bg-[#758f79]">Premium Package</option>
                            <option value="Limited Edition" className="bg-[#8CAB91] text-white hover:bg-[#758f79]">Limited Edition</option>
                        </select>
                    </div>

                    <div className="mt-4 w-1/2">
                        <label className="text-sm font-medium">Package Price</label>
                        <div className="flex items-center border border-[#8CAB91] text-[#8CAB91] mt-1 relative bg-white">
                            <div className="absolute left-2 text-[#8CAB91]">$</div>
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
                                    className="text-gray-600 rotate-180"
                                    onClick={() => setPrice((prev) => Math.max(Number(prev) - 1, 0))}
                                >
                                    <FiTriangle size={12} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Discount Section */}
                <h1 className="text-[18px] font-[500] mt-10">Discount</h1>
                <div className="mt-4 w-1/2 pr-[7px]">
                    <label className="text-sm font-medium">Amount</label>
                    <div className="flex items-center border border-[#8CAB91] text-[#8CAB91] mt-1 relative bg-white">
                        <div className="absolute left-2 text-[#8CAB91]">%</div>
                        <input
                            type="text"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="w-full p-2 pl-6 border-none bg-transparent focus:outline-none"
                        />
                        <div className="absolute right-2 flex space-x-1 text-[#8CAB91]">
                            <button
                                className="text-gray-600 hover:text-black"
                                onClick={() => setDiscount((prev) => Number(prev) + 1)}
                            >
                                <FiTriangle size={12} />
                            </button>
                            <button
                                className="text-gray-600 hover:text-black rotate-180"
                                onClick={() => setDiscount((prev) => Math.max(Number(prev) - 1, 0))}
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

                {/* Package Offer */}
                <div className="mt-4">
                    <h2 className="text-sm font-medium">Package Offer</h2>
                    <ul className="mt-2 text-[16px] font-[500] text-gray-700">
                        {/* List item 1 */}
                        <li className="flex items-center gap-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={checkedItems.chat}
                                    onChange={() => toggleCheck('chat')}
                                    className="hidden"
                                />
                                <span
                                    className={`w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center transition-colors ${checkedItems.chat ? 'bg-[#6f8673] border-[#6f8673]' : 'bg-white'}`}
                                >
                                    {checkedItems.chat && (
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </label>
                            <span>Unlimited chat with the AI Chat Bot.</span>
                        </li>

                        {/* List item 2 */}
                        <li className="flex items-center gap-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={checkedItems.fullBook}
                                    onChange={() => toggleCheck('fullBook')}
                                    className="hidden"
                                />
                                <span
                                    className={`w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center transition-colors ${checkedItems.fullBook ? 'bg-[#6f8673] border-[#6f8673]' : 'bg-white'}`}
                                >
                                    {checkedItems.fullBook && (
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </label>
                            <span>Access Full Book.</span>
                        </li>

                        {/* List item 3 */}
                        <li className="flex items-center gap-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={checkedItems.images}
                                    onChange={() => toggleCheck('images')}
                                    className="hidden"
                                />
                                <span
                                    className={`w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center transition-colors ${checkedItems.images ? 'bg-[#6f8673] border-[#6f8673]' : 'bg-white'}`}
                                >
                                    {checkedItems.images && (
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </label>
                            <span>200 images in Book.</span>
                        </li>

                        {/* List item 4 */}
                        <li className="flex items-center gap-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={checkedItems.pdf}
                                    onChange={() => toggleCheck('pdf')}
                                    className="hidden"
                                />
                                <span
                                    className={`w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center transition-colors ${checkedItems.pdf ? 'bg-[#6f8673] border-[#6f8673]' : 'bg-white'}`}
                                >
                                    {checkedItems.pdf && (
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </label>
                            <span>Downloadable soft copy PDF book.</span>
                        </li>

                        {/* List item 5 */}
                        <li className="flex items-center gap-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={checkedItems.discount}
                                    onChange={() => toggleCheck('discount')}
                                    className="hidden"
                                />
                                <span
                                    className={`w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center transition-colors ${checkedItems.discount ? 'bg-[#6f8673] border-[#6f8673]' : 'bg-white'}`}
                                >
                                    {checkedItems.discount && (
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </label>
                            <span>$10 off on physical book.</span>
                        </li>
                    </ul>
                </div>

                {/* Update Button */}
                <button
                    className="w-96 ml-32 bg-[#8CAB91] text-white py-2 mt-20 rounded-full hover:bg-[#6f8673]"
                    onClick={handleUpdate}
                    disabled={isUpdating}
                >
                    {isUpdating ? "Updating..." : "UPDATE"}
                </button>
            </div>
        </div>
    );
};

export default EditSubscription;