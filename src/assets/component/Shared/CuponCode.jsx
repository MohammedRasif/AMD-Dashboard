import { useState } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useCuponDataQuery, useCuponDeleteMutation } from "../../../redux/feature/ApiSlice";

const CuponCode = () => {
    const { data: copun, isLoading, error } = useCuponDataQuery();
    const [deleteCupon] = useCuponDeleteMutation();

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [selectedCouponId, setSelectedCouponId] = useState(null);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading coupons!</p>;

    // মডাল ওপেন করার ফাংশন
    const handleOpenDeleteModal = (id) => {
        setSelectedCouponId(id);
        setIsOpenDelete(true);
    };

    // ডিলিট করার ফাংশন
    const handleDelete = async () => {
        if (!selectedCouponId) return;
        try {
            await deleteCupon(selectedCouponId).unwrap();
            
        } catch (error) {
            console.error("Error deleting coupon:", error);
            alert("Failed to delete coupon!");
        }
        setIsOpenDelete(false);
        setSelectedCouponId(null);
    };

    return (
        <div className="mt-3">
            {/* Add Coupon Button */}
            <NavLink to="/AddCoupon" className="flex justify-end text-[#FAF1E6]">
                <div className="flex items-center w-[80px] pl-2 py-2 rounded-md mb-3 space-x-2 bg-[#8CAB91]">
                    <FaPlus />
                    <button>ADD</button>
                </div>
            </NavLink>

            {/* Coupon Table */}
            <table className="table w-full bg-white">
                <thead>
                    <tr className="text-gray-700">
                        <th className="p-3">S.ID</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 pl-10">Edit</th>
                        <th className="p-3 pl-10">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {copun?.map((coupon, index) => (
                        <tr key={coupon.id} className="hover:bg-gray-100 transition-all duration-200">
                            <th className="p-3">
                                <h1 className="text-[14px] font-[500] text-[#555555]">{index + 1}</h1>
                            </th>

                            <td className="p-3">
                                <span className="text-gray-700 font-semibold">{coupon.name}</span>
                            </td>

                            {/* Edit Button */}
                            <th className="p-3">
                                <NavLink to={`/editCupon/${coupon.id}`}>
                                    <button className="text-xl text-[#8CAB91] cursor-pointer">
                                        <FaRegEdit className="ml-10" />
                                    </button>
                                </NavLink>
                            </th>

                            {/* Delete Button */}
                            <th className="p-3">
                                <button onClick={() => handleOpenDeleteModal(coupon.id)} className="text-xl">
                                    <RiDeleteBin6Line className="ml-10 text-red-500 cursor-pointer" />
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Delete Confirmation Modal */}
            {isOpenDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] relative">
                        {/* Close (Cancel) Icon */}
                        <button
                            className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
                            onClick={() => setIsOpenDelete(false)}
                        >
                            <FaTimes size={18} />
                        </button>

                        {/* Modal Heading */}
                        <h2 className="text-[14px] font-[500] text-center">Are you sure?</h2>
                        <p className="text-[16px] text-[#997D00] text-center my-5">
                            Do you want to delete this content?
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="px-4 py-2 bg-[#8CAB91] text-white rounded-lg cursor-pointer" onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CuponCode;
