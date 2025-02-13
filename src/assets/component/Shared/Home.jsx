import { useEffect, useRef, useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import Calendar from "react-calendar";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid, AreaChart, Area } from "recharts";
import "react-calendar/dist/Calendar.css";
import { GoChevronDown } from "react-icons/go";
import "./Charts.css";
import "./Celander.css";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const calendarRef = useRef(null); // Reference for the calendar modal
    const modalRef = useRef(null);
    const [selectedSubscription, setSelectedSubscription] = useState(''); // Track selected subscription
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Handle date selection
    const handleDateChange = (date) => {
        if (!startDate || (startDate && endDate)) {
            // If no start date is selected or both start and end dates are selected, reset
            setStartDate(date);
            setEndDate(null);
        } else {
            // If start date is selected, set the end date
            setEndDate(date);
        }
    };

    // // Format the selected date range
    // const formattedDateRange = startDate && endDate
    //     ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
    //     : startDate
    //     ? `${startDate.toLocaleDateString()} - (Select End Date)`
    //     : 'Select a date range';

    // Initialize state to handle both single date or date range
    const [value, onChange] = useState(new Date());

    const [searchQuery, setSearchQuery] = useState("");

    // Close calendar when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setIsCalendarOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close the modal when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        // Attach the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Sample user data
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
        {
            id: 4,
            name: "Yancy Tear",
            country: "Brazil",
            company: "Wyman-Ledner",
            role: "Community Outreach Specialist",
            favoriteColor: "Indigo",
            img: "https://img.daisyui.com/images/profile/demo/5@94.webp",
            number: "#12333",
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "Free",
            income: "$20",
        },
        {
            id: 5,
            name: "Mohammad Rasif",
            country: "Bangladesh",
            company: "Wyman-Ledner",
            role: "Community Outreach Specialist",
            favoriteColor: "Indigo",
            img: "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png",
            number: "#12333",
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "Premium",
            income: "$20",
        },
    ];

    const filteredUsers = users.filter((user) => {
        // Filter by search query
        const searchMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.contactNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.subscription.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.income.toLowerCase().includes(searchQuery.toLowerCase());

        // Filter by selected subscription type
        const subscriptionMatch = selectedSubscription === 'All' || selectedSubscription === '' || user.subscription === selectedSubscription;

        return searchMatch && subscriptionMatch;
    });


    // Handle clicking on subscription type
    const handleSubscriptionSelect = (subscriptionType) => {
        setSelectedSubscription(subscriptionType);
        setIsModalOpen(false); // Close the modal after selection
    };

    // Charts data
    const data = [
        { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
        { name: "May", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
        { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
        { name: "Sep", uv: 3140, pv: 4300, amt: 2100 },
        { name: "Oct", uv: 1648, pv: 4300, amt: 2100 },
        { name: "Nov", uv: 2344, pv: 4300, amt: 2100 },
        { name: "Dec", uv: 1245, pv: 4300, amt: 2100 },
    ];

    // Chart 2 data
    const secondData = [
        { name: "Jan", subscribers: 70 },
        { name: "Feb", subscribers: 60 },
        { name: "Mar", subscribers: 40 },
        { name: "Apr", subscribers: 55 },
        { name: "May", subscribers: 45 },
        { name: "Jun", subscribers: 20 },
        { name: "Jul", subscribers: 75 },
        { name: "Aug", subscribers: 40 },
        { name: "Sep", subscribers: 65 },
        { name: "Oct", subscribers: 80 },
        { name: "Nov", subscribers: 70 },
        { name: "Dec", subscribers: 50 },
    ];

    // Chart 3 data
    const theadData = [
        { name: "Jan", subscribers: 70 },
        { name: "Feb", subscribers: 60 },
        { name: "Mar", subscribers: 40 },
        { name: "Apr", subscribers: 55 },
        { name: "May", subscribers: 45 },
        { name: "Jun", subscribers: 20 },
        { name: "Jul", subscribers: 75 },
        { name: "Aug", subscribers: 40 },
        { name: "Sep", subscribers: 65 },
        { name: "Oct", subscribers: 80 },
        { name: "Nov", subscribers: 70 },
        { name: "Dec", subscribers: 50 },
    ];

    const maxValue = Math.max(...theadData.map((item) => item.subscribers));

    return (
        <div className="min-h-full relative">
            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-10 px-7 py-5 bg-white">
                {/* Card 1 */}
                <div className="w-[1,206px] h-[130px] flex items-center justify-center space-x-16 shadow-2xl pl-5">
                    <div>
                        <HiOutlineUserGroup className="text-[36px]" />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-5 text-center">
                        <h1 className="text-[24px] montserrat font-[700]">10</h1>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total User</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-[1,206px] h-[130px] flex items-center justify-center space-x-16 shadow-2xl pl-5">
                    <div>
                        <FiUsers className="text-[36px]" />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-5 text-center">
                        <div className="flex items-center pl-7">
                            <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]" />
                            <h1 className="absolute text-[24px] montserrat ml-5">1k</h1>
                            <p className="text-[#8CAB91] text-[14px] pl-7 pt-1">70%</p>
                        </div>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total Subscriber</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-[1,206px] h-[130px] flex items-center justify-center space-x-16 shadow-2xl pl-5">
                    <div>
                        <FaSackDollar className="text-[36px]" />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-3 text-center">
                        <div className="flex items-center pl-7">
                            <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]" />
                            <h1 className="absolute text-[24px] montserrat ml-5">1k</h1>
                            <AiOutlineRise className="ml-8 mb-4 text-[#8CAB91] text-2xl" />
                            <p className="absolute text-[#8CAB91] text-[14px] pl-14 pt-1">70%</p>
                        </div>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total Income</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div>
                {/* Subscriber Growth Chart */}
                <div className="bg-white p-6 mt-5 shadow-lg grid grid-cols-2 items-center">
                    <div>
                        <div className="flex items-center justify-between px-8">
                            <div>
                                <h2 className="text-lg font-semibold text-center mb-4">Subscriber Growth</h2>
                            </div>
                            <div className="w-[84px] h-[34px] bg-[#F1F1F1] flex items-center justify-center space-x-2">
                                <button>Yearly</button>
                                <GoChevronDown />
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
                                <Tooltip />
                                <Bar dataKey="uv" fill="#8CAB91" barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* User Growth Chart */}
                    <div>
                        <div className="bg-white p-6 rounded-lg w-full">
                            <div className="flex items-center justify-between px-8">
                                <div>
                                    <h2 className="text-lg font-semibold text-center mb-4">User Growth</h2>
                                </div>
                                <div className="w-[84px] h-[34px] bg-[#F1F1F1] flex items-center justify-center space-x-2">
                                    <button>Yearly</button>
                                    <GoChevronDown />
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={secondData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                                    <XAxis dataKey="name" tick={{ fill: "#555" }} />
                                    <YAxis tick={{ fill: "#555" }} domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="subscribers" stroke="#8CAB91" fill="#8CAB91" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Income Report Chart */}
                <div className="bg-white mt-5">
                    <div className="flex items-center justify-between px-5 py-5">
                        <div>
                            <h1 className="text-lg font-semibold text-center mb-4">Income Report</h1>
                        </div>
                        <div className="w-[84px] h-[34px] bg-[#F1F1F1] flex items-center justify-center space-x-2">
                            <button>Yearly</button>
                            <GoChevronDown />
                        </div>
                    </div>
                    <div>
                        <ResponsiveContainer width="100%" height={300} className="">
                            <AreaChart data={theadData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                                <XAxis dataKey="name" tick={{ fill: "#555" }} />
                                <YAxis tick={{ fill: "#555" }} domain={[0, maxValue]} tickFormatter={(value) => `${(value).toFixed(0)}k`} />
                                <Tooltip />
                                <Area type="monotone" dataKey="subscribers" stroke="#8CAB91" fill="#8CAB91" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* User Information Table */}
            <div className="overflow-x-auto p-6 bg-white shadow-lg mt-5">
                <div className="flex items-center justify-between">
                    <h1 className="text-[18px]">Subscriber</h1>
                    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
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

                        {/* Subscription Button */}
                        <div className="border border-gray-300 py-2 px-2 rounded-md">
                            <label className="form-control">

                                <select
                                    className=" "
                                    value={selectedSubscription}
                                    onChange={(e) => setSelectedSubscription(e.target.value)}
                                >
                                    <option value="All">All</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Free">Free</option>
                                </select>

                            </label>
                            </div>

                        {/* Calendar Icon */}
                        <div className="flex items-center border p-2 rounded-md border-gray-300">
                            <FaCalendarAlt className="text-gray-500 mr-2" />
                            <span
                                className="text-gray-700 cursor-pointer"
                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                            >
                                Starting - Ending ▼
                            </span>
                        </div>

                        {isCalendarOpen && (
                            <div ref={calendarRef} className="absolute bottom-0 right-14">

                                <div className="calender"> <DatePicker
                                    showIcon
                                    selected={startDate}
                                    onChange={(dates) => {
                                        const [start, end] = dates;
                                        setStartDate(start);
                                        setEndDate(end);
                                        if (end) setOpen(false); // Close when date is selected
                                    }}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    monthsShown={1} // Show 2 months
                                    inline
                                    className="p-2"
                                    calendarClassName="gap-4 p-4 " // 👈 THIS MAKES MONTHS SHOW IN A ROW

                                /></div>
                            </div>
                        )}

                        
                    </div>
                </div>

                {/* Table with Users */}
                <table className="table w-full">
                    <thead>
                        <tr className="text-gray-700">
                            <th className="p-3">S no.</th>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Contact Number</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Subscription Type</th>
                            <th className="p-3 text-left">Income</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
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
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.img}
                                                    className="rounded-2xl"
                                                    alt={user.name}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.country}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <span className="text-gray-700 font-semibold">{user.email}</span>
                                </td>
                                <td className="p-3 text-gray-600">{user.contactNumber}</td>
                                <td className="p-3 text-gray-600">{user.country}</td>
                                <td className="p-3 text-gray-600">{user.subscription}</td>
                                <td className="p-3 text-gray-600">{user.income}</td>
                                <th className="p-3">
                                    <button onClick={() => setIsProfileOpen(true)} className="text-xl cursor-pointer">
                                        <IoEyeOutline className="ml-10" />
                                    </button>
                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                className="fixed inset-0 flex justify-end -mt-20 pr-10  items-center z-50"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 100, damping: 25 }}
                                                onClick={() => setIsProfileOpen(false)} // Close when clicking outside
                                            >
                                                <motion.div
                                                    className="relative w-[503px] shadow-lg bg-white rounded-lg"
                                                    initial={{ y: "-100vh", opacity: 0 }}
                                                    animate={{ y: "0", opacity: 1 }}
                                                    exit={{ y: "100vh", opacity: 0 }}
                                                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                                                >
                                                    <div>
                                                        <div className="w-[503px] h-[238px] bg-[#8CAB91] flex items-center justify-center">
                                                            <div className="text-center">
                                                                <img
                                                                    src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png"
                                                                    className="w-[115.98px] h-[124.08px] rounded-full border"
                                                                    alt=""
                                                                />
                                                                <div className="pt-2">
                                                                    <h1 className="text-[24px] font-[500] text-[#FAF1E6]">
                                                                        Md Rasif
                                                                    </h1>
                                                                    <p className="text-[14px] font-[500]">User</p>
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-2 right-2 cursor-pointer">
                                                                <MdOutlineCancel
                                                                    className="text-[20px] text-[#FAF1E6]"
                                                                    onClick={() => setIsProfileOpen(false)} // Close when clicking the cancel icon
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="p-10 space-y-3 text-start">
                                                            <div>
                                                                <h1 className="text-[16px] font-[500]">Name</h1>
                                                                <p className="text-[14px] text-[#555555]">Md Rasif</p>
                                                            </div>
                                                            <div>
                                                                <h1 className="text-[16px] font-[500]">Email</h1>
                                                                <p className="text-[14px] text-[#555555]">
                                                                    mahmud@gmail.com
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <h1 className="text-[16px] font-[500]">Contact No</h1>
                                                                <p className="text-[14px] text-[#555555]">
                                                                    +919355574544
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <h1 className="text-[16px] font-[500]">Date of birth</h1>
                                                                <p className="text-[14px] text-[#555555]">17 dec, 2024</p>
                                                            </div>
                                                            <div>
                                                                <h1 className="text-[16px] font-[500]">Subscription Type</h1>
                                                                <p className="text-[14px] text-[#555555]">
                                                                    Premium subscription
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <h1 className="text-[16px] font-[500]">Address</h1>
                                                                <p className="text-[14px] text-[#555555]">
                                                                    68/ Joker Vila, Gotham City
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;