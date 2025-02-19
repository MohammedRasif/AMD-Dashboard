import { useState } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useCuponDataQuery } from "../../../redux/feature/ApiSlice";

const CuponCode = () => {
    const { data: copun, isLoading, error } = useCuponDataQuery();
    const [isOpenDelete, setIsOpenDelete] = useState(false);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading coupons!</p>;
    const handleDelete = () => {

        setIsOpenDelete(false);
    };

    const users = [
        {
            id: 1,
            name: "Hart Hagerty",
            country: "United States",
            company: "Zemlak, Daniel and Leannon",
            role: "Desktop Support Technician",
            favoriteColor: "Purple",
            img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
            number: "#12333",
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "Premium",
            income: "$20",
        },
        {
            id: 2,
            name: "Brice Swyre",
            country: "China",
            company: "Carroll Group",
            role: "Tax Accountant",
            favoriteColor: "Red",
            img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
            number: "#12333",
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "Free",
            income: "$20",
        },
        {
            id: 3,
            name: "Marjy Ferencz",
            country: "Russia",
            company: "Rowe-Schoen",
            role: "Office Assistant I",
            favoriteColor: "Crimson",
            img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
            number: "#12333",
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "Free",
            income: "$20",
        },

    ];
    return (
        <div className="mt-3"> 
            <NavLink to="/AddCoupon" className="flex justify-end text-[#FAF1E6]">
                <div className="flex  items-center  w-[80px] pl-2 py-2 rounded-md mb-3 space-x-2 bg-[#8CAB91] ">
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
                    <th className="p-3 pl-10">Edit</th>
                    <th className="p-3 pl-10">Delete</th>
                </tr>
            </thead>
            <tbody>
                {copun?.map((coupon, index) => (
                    <tr
                        key={coupon.id}
                        className="hover:bg-gray-100 transition-all duration-200"
                    >
                        <th className="p-3">
                            <h1 className="text-[14px] font-[500] text-[#555555]">
                                {index + 1}
                            </h1>
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
                            <button
                                onClick={() => setIsOpenDelete(true)}
                                className="text-xl"
                            >
                                <RiDeleteBin6Line className="ml-10 text-red-500 cursor-pointer" />
                            </button>

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
                                        <h2 className="text-[14px] font-[500] text-center">
                                            Are you sure?
                                        </h2>
                                        <p className="text-[16px] text-[#997D00] text-center my-5">
                                            Do you want to delete this content?
                                        </p>

                                        {/* Buttons */}
                                        <div className="flex justify-center space-x-4 mt-4">
                                            <button
                                                className="px-4 py-2 bg-[#8CAB91] text-white rounded-lg cursor-pointer"
                                                onClick={() => handleDelete(coupon.id)}
                                            >
                                                Delete
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
}

export default CuponCode;
