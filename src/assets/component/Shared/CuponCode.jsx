import { FaPlus, FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const CuponCode = () => {
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
        <div>
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
                            <th className="p-3 pl-10">Action</th>
                            <th className="p-3 pl-10">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-100 transition-all duration-200"
                            >
                                <th className="p-3">
                                    <h1 className="text-[14px] font-[500] text-[#555555]">
                                        {index + 1}
                                    </h1>
                                </th>

                                <td className="p-3">
                                    <span className="text-gray-700 font-semibold">{user.name}</span>
                                </td>
                                <th className="p-3">
                                    <NavLink >
                                    <button  className="text-xl text-[#8CAB91]">
                                        <FaRegEdit className="ml-10" />
                                    </button>
                                    </NavLink>
                                </th>
                                <th className="p-3">
                                    <button 
                                    
                                     className="text-xl">
                                        <RiDeleteBin6Line className="ml-10 text-red-500" />
                                    </button>
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
