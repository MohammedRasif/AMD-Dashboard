import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const OrderManagement = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubscription, setSelectedSubscription] = useState("");

      // Sample user data
      const users = [
        {
            id: 1,
            name: "Hart Hagerty",
            country: "United States",
            img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
            email: "hart@example.com",
            contactNumber: "01607115111",
            subscription: "Premium",
            income: "$20",
        },
        {
            id: 2,
            name: "Brice Swyre",
            country: "China",
            img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
            email: "brice@example.com",
            contactNumber: "01607115112",
            subscription: "Free",
            income: "$15",
        },
        {
            id: 5,
            name: "Mohammad Rasif",
            country: "Bangladesh",
            img: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png",
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "Premium",
            income: "$30",
        },
    ];

    // Handle Subscription Selection
    const handleSubscriptionSelect = (subscriptionType) => {
        setSelectedSubscription(subscriptionType);
        setIsModalOpen(false); // Close modal after selection
    };

    // Filter Users
    const filteredUsers = users.filter((user) => {
        const searchMatch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.contactNumber.includes(searchQuery) ||
            user.country.toLowerCase().includes(searchQuery.toLowerCase());

        const subscriptionMatch = selectedSubscription === "" || user.subscription === selectedSubscription;

        return searchMatch && subscriptionMatch;
    });


    return (
        <div className="p-6 ">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-medium">Order List</h1>

                <div className="flex items-center space-x-4">
                    {/* Search Input */}
                    <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 w-72">
                        <FaSearch className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none w-full bg-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Subscription Filter Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 flex items-center hover:bg-gray-100 transition cursor-pointer "
                    >
                        {selectedSubscription || "Subscriber"} <span className="ml-2">▼</span>
                    </button>
                </div>
            </div>

            {/* Subscription Filter Modal */}
            {isModalOpen && (
                <div className="absolute top-48 right-0 mr-20 bg-white p-6 rounded-lg shadow-lg w-64">
                    <h2 className="text-lg font-semibold mb-4">Filter by Subscription</h2>
                    <button
                        onClick={() => handleSubscriptionSelect("Premium")}
                        className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                        Premium
                    </button>
                    <button
                        onClick={() => handleSubscriptionSelect("Free")}
                        className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                        Free
                    </button>
                    <button
                        onClick={() => handleSubscriptionSelect("")}
                        className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                        All
                    </button>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="mt-4 w-full bg-[#8CAB91] text-[#FAF1E6] px-4 py-2 rounded-lg "
                    >
                        Close
                    </button>
                </div>
            )}

            {/* User Table */}
            <table className="table-auto w-full border-collapse mt-6 bg-white">
                <thead>
                    <tr className="text-gray-700">
                        <th className="p-3">S No.</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Contact Number</th>
                        <th className="p-3 text-left">Subscription</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={user.id} className="hover:bg-gray-100 transition-all duration-200">
                            <td className="p-3 text-center">{index + 1}</td>
                            <td className="p-3 flex items-center gap-3">
                                <img src={user.img} className="h-12 w-12 rounded-full" alt={user.name} />
                                <div>
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-sm text-gray-500">{user.country}</div>
                                </div>
                            </td>
                            <td className="p-3 text-gray-700">{user.email}</td>
                            <td className="p-3 text-gray-600">{user.contactNumber}</td>
                            <td className="p-3 text-gray-600">{user.subscription}</td>
                            <td className="p-3 text-center">
                                <NavLink to="/oderDetails">
                                <button className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer ">
                                    <IoEyeOutline />
                                </button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManagement;
