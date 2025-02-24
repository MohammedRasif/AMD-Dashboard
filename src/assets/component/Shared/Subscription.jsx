import { useState } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useSubscriptionDataQuery, useDeleteSubcriptionMutation } from "../../../redux/feature/ApiSlice";

const Subscription = () => {
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [subscriptionIdToDelete, setSubscriptionIdToDelete] = useState(null);
    const { data: subscriptions, isLoading, error } = useSubscriptionDataQuery();
    const [deleteSubscription, { isLoading: isDeleting }] = useDeleteSubcriptionMutation();
    
    const handleDelete = async () => {
        if (subscriptionIdToDelete) {
            try {
                await deleteSubscription(subscriptionIdToDelete).unwrap();
                // Remove subscription from the UI after successful deletion
                setIsOpenDelete(false);
            } catch (error) {
                console.error("Failed to delete subscription:", error);
            }
        }
    };

    if (isLoading) return <p>Loading subscriptions...</p>;
    if (error) return <p className="text-red-500">Failed to load subscriptions.</p>;

    return (
        <div className="mt-2">
            <NavLink to="/createSubcription" className="flex justify-end text-[#FAF1E6]">
                <div className="flex items-center w-[80px] pl-2 py-2 rounded-md mb-3 space-x-2 bg-[#8CAB91]">
                    <FaPlus />
                    <button>ADD</button>
                </div>
            </NavLink>
            <div>
                <table className="table w-full bg-white">
                    <thead>
                        <tr className="text-gray-700">
                            <th className="p-3">S.ID</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 pl-10">Action</th>
                            <th className="p-3 pl-10">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions?.map((subscription, index) => (
                            <tr key={subscription.id} className="hover:bg-gray-100 transition-all duration-200">
                                <th className="p-3">
                                    <h1 className="text-[14px] font-[500] text-[#555555]">{index + 1}</h1>
                                </th>
                                <td className="p-3">
                                    <span className="text-gray-700 font-semibold">{subscription.name}</span>
                                </td>
                                <th className="p-3">
                                    <NavLink to={`/editSubcription/${subscription.id}`}>
                                        <button className="text-xl text-[#8CAB91] cursor-pointer">
                                            <FaRegEdit className="ml-10" />
                                        </button>
                                    </NavLink>
                                </th>
                                <th className="p-3">
                                    <button 
                                        onClick={() => {
                                            setIsOpenDelete(true);
                                            setSubscriptionIdToDelete(subscription.id);
                                        }} 
                                        className="text-xl cursor-pointer"
                                    >
                                        <RiDeleteBin6Line className="ml-10 text-red-500" />
                                    </button>
                                    {isOpenDelete && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
                                            <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] relative">
                                                <button
                                                    className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
                                                    onClick={() => setIsOpenDelete(false)}
                                                >
                                                    <FaTimes size={18} />
                                                </button>
                                                <h2 className="text-[14px] font-[500] text-center">Are you sure?</h2>
                                                <p className="text-[16px] text-[#997D00] text-center my-5">
                                                    Do you want to delete this content?
                                                </p>
                                                <div className="flex justify-center space-x-4 mt-4">
                                                    <button 
                                                        className="px-4 py-2 bg-[#8CAB91] text-white rounded-lg cursor-pointer" 
                                                        onClick={handleDelete} 
                                                        disabled={isDeleting}
                                                    >
                                                        {isDeleting ? "Deleting..." : "Delete"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscription;
