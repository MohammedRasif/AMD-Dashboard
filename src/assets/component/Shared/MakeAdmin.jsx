import { FaPlus } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MakeAdmin = () => {
    // Sample user data
    const users = [
        {
            id: 1,
            name: "Hart Hagerty",
            country: "United States",            
            email: "hart@example.com",
            role: "admin",
            subscription: "Premium",
            income: "$20",
        },
        {
            id: 2,
            name: "Brice Swyre",
            country: "China",          
            email: "brice@example.com",
            role: "user",
            subscription: "Free",
            income: "$15",
        },
        {
            id: 5,
            name: "Mohammad Rasif",
            country: "Bangladesh",
            email: "mohammadrasif001@gmail.com",
            role: "admin",
            subscription: "Premium",
            income: "$30",
        },
    ];
    

    return (
        <div>
            <div className="flex items-center justify-between">
            <h1 className="text-[24px] font-bold  ">Ouestionnaire</h1>
            <button
                // onClick={() => setIsOpen(true)}
                className="w-[160px] uppercase h-[38px] bg-[#8CAB91] mt-2 text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl">
                <FaPlus className="text-sm" />
                <h1>Make Admin</h1>
            </button>
        </div>
        <div>
        <table className="table-auto w-full border-collapse mt-6 bg-white">
                <thead>
                    <tr className="text-gray-700">
                        <th className="p-3">S No.</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">User Type</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id} className="hover:bg-gray-100 transition-all duration-200">
                            <td className="p-3 text-center">{index + 1}</td>
                            <td className="p-3 flex items-center gap-3">
                                
                                <div>
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.country}</div>
                                </div>
                            </td>
                            <td className="p-3 text-gray-700">{user.email}</td>
                            <td className="p-3 text-gray-600">{user.role}</td>
                            <td className="p-3 text-center">
                                <NavLink to="/oderDetails">
                                <button className="text-xl text-gray-700 hover:text-blue-500">
                                    <IoEyeOutline />
                                </button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default MakeAdmin;
