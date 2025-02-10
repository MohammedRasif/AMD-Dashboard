import { useEffect, useRef, useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);


    const calendarRef = useRef(null);

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

    const users = [
        {
            id: 1,
            name: "Hart Hagerty",
            country: "United States",
            company: "Zemlak, Daniel and Leannon",
            role: "Desktop Support Technician",
            favoriteColor: "Purple",
            img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
            number: '#12333',
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "Premium",
            income: "$20"
        },
        {
            id: 2,
            name: "Brice Swyre",
            country: "China",
            company: "Carroll Group",
            role: "Tax Accountant",
            favoriteColor: "Red",
            img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
            number: '#12333',
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "free",
            income: "$20"
        },
        {
            id: 3,
            name: "Marjy Ferencz",
            country: "Russia",
            company: "Rowe-Schoen",
            role: "Office Assistant I",
            favoriteColor: "Crimson",
            img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
            number: '#12333',
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "free",
            income: "$20"
        },
        {
            id: 4,
            name: "Yancy Tear",
            country: "Brazil",
            company: "Wyman-Ledner",
            role: "Community Outreach Specialist",
            favoriteColor: "Indigo",
            img: "https://img.daisyui.com/images/profile/demo/5@94.webp",
            number: '#12333',
            email: "mohammadrasif001@gmail.com",
            contactNumber: "01607115111",
            subscription: "free",
            income: "$20"
        },
    ];


    // const dataset = [
    //     { name: 'Austria', code: 'AT', gdp: 471 },
    //     { name: 'Belgium', code: 'BE', gdp: 583 },
    //     { name: 'Bulgaria', code: 'BG', gdp: 90.35 },
    //     { name: 'Croatia', code: 'HR', gdp: 71.6 },
    //     { name: 'Czech Republic', code: 'CZ', gdp: 291 },
    //     { name: 'Denmark', code: 'DK', gdp: 400 },
    //     { name: 'Finland', code: 'FI', gdp: 283 },
    //     { name: 'France', code: 'FR', gdp: 2779 },
    //     { name: 'Germany', code: 'DE', gdp: 4082 },
    //     { name: 'Greece', code: 'GR', gdp: 218 },
    //     { name: 'Hungary', code: 'HU', gdp: 177 },
    //     { name: 'Ireland', code: 'IE', gdp: 533 },
    //     { name: 'Italy', code: 'IT', gdp: 2050 },
    //     { name: 'Netherlands', code: 'NL', gdp: 1009 },
    //     { name: 'Poland', code: 'PL', gdp: 688 },
    //     { name: 'Portugal', code: 'PT', gdp: 255 },
    //     { name: 'Romania', code: 'RO', gdp: 301 },
    //     { name: 'Slovakia', code: 'SK', gdp: 115 },
    //     { name: 'Spain', code: 'ES', gdp: 1418 },
    //     { name: 'Sweden', code: 'SE', gdp: 591 },
    //   ];

    //   const chartParams = {
    //     yAxis: [
    //       {
    //         label: 'GDP (million $USD)',
    //       },
    //     ],
    //     series: [
    //       {
    //         label: 'GDP',
    //         dataKey: 'gdp',
    //         valueFormatter: (v) =>
    //           new Intl.NumberFormat('en-US', {
    //             style: 'currency',
    //             currency: 'USD',
    //             compactDisplay: 'short',
    //             notation: 'compact',
    //           }).format((v || 0) * 1_000_000),
    //       },
    //     ],
    //     slotProps: { legend: { hidden: true } },
    //     dataset,
    //     width: 600,
    //     height: 400,
    //     sx: {
    //       [`.${axisClasses.left} .${axisClasses.label}`]: {
    //         transform: 'translate(-20px, 0)',
    //       },
    //     },
    //   };

    return (
        <div className="  min-h-full">
            <div className="grid grid-cols-3 gap-10 px-7 py-5 bg-white">
                <div className="w-[1,206px] h-[130px] flex items-center justify-center space-x-16 shadow-2xl pl-5 ">
                    <div className=" ">
                        <HiOutlineUserGroup className="text-[36px]" />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-5 text-center ">
                        <h1 className="text-[24px] montserrat font-[700]">10</h1>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total User</p>
                    </div>
                </div>
                <div className="w-[1,206px] h-[130px] flex items-center justify-center space-x-16 shadow-2xl pl-5 ">
                    <div className=" ">
                        <FiUsers className="text-[36px]" />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-5 text-center ">
                        <div className="flex items-center pl-7">
                            <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]" />
                            <h1 className=" absolute text-[24px] montserrat ml-5">1k</h1>
                            <p className="text-[#8CAB91] text-[14px]  pl-7 pt-1">70%</p>
                        </div>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total  subscriber</p>
                    </div>
                </div>
                <div className="w-[1,206px] h-[130px] flex items-center justify-center space-x-16 shadow-2xl pl-5 ">
                    <div className=" ">
                        <FaSackDollar className="text-[36px]" />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-3 text-center ">
                        <div className="flex items-center pl-7">
                            <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]" />
                            <h1 className=" absolute text-[24px] montserrat ml-5">1k</h1>
                            <AiOutlineRise className="ml-8 mb-4 text-[#8CAB91] text-2xl" />

                            <p className="absolute text-[#8CAB91] text-[14px] pl-14  pt-1">70%</p>
                        </div>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total Income</p>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* <BarChart
                xAxis={[
                    {
                        scaleType: 'band',
                        dataKey: 'code',
                        valueFormatter: (code, context) =>
                            context.location === 'tick'
                                ? code
                                : `Country: ${dataset.find((d) => d.code === code)?.name} (${code})`,
                    },
                ]}
                {...chartParams}
            /> */}

            {/* ----------------------------------------------user inpormation--------------------- */}
            <div className="overflow-x-auto p-6 bg-white shadow-lg mt-5">
                <div>
                    <h1 className="text-[18px]">Subscriber</h1>
                    <div className="flex items-center space-x-4 bg-white p-4 shadow-md rounded-lg">
                        {/* 🔍 Search Input */}
                        <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 w-72">
                            <FaSearch className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="outline-none w-full bg-transparent"
                            />
                        </div>

                        {/* 📩 Subscription Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="border border-gray-300 px-4 py-2 rounded-lg flex items-center text-gray-700"
                        >
                            Subscriber <span className="ml-2">▼</span>
                        </button>

                        {/* 🗓️ Date Picker */}
                        <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 cursor-pointer">
                            {/* 📅 Calendar Icon */}
                            <FaCalendarAlt className="text-gray-500 mr-2" />

                            {/* 📌 Toggle Calendar on Click */}
                            <span
                                className="text-gray-700"
                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                            >
                                Starting - Ending ▼
                            </span>

                            {/* 📅 DatePicker (Appears on Click) */}
                            {isCalendarOpen && (
                                <div
                                    ref={calendarRef}
                                    className="absolute top-12 left-0 bg-white shadow-lg rounded-lg p-4 z-50 flex space-x-4"
                                >
                                    {/* 📌 First Date Picker (Start Date) */}
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        inline
                                        initialMonth={new Date(2023, 1)} // February 2023
                                    />

                                    {/* 📌 Second Date Picker (End Date) */}
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        inline
                                        initialMonth={new Date(2023, 2)} // March 2023
                                    />
                                </div>
                            )}
                        </div>
                        {/* 📌 Modal for Subscription */}
                        {isModalOpen && (
                            <div className="fixed inset-0 flex justify-center items-center">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-xl font-semibold mb-3">Select Subscription</h2>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <table className="table w-full ">
                    {/* Table Header */}
                    <thead>
                        <tr className=" text-gray-700">
                            <th className="p-3 ">
                                <h1>S no.</h1>
                            </th>
                            <th className="p-3  text-left">Name</th>
                            <th className="p-3  text-left">Email</th>
                            <th className="p-3  text-left">Contact Number</th>
                            <th className="p-3  text-left">Location</th>
                            <th className="p-3  text-left">Subcription Type</th>
                            <th className="p-3  text-left">Income</th>
                            <th className="p-3 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-100 transition-all duration-200"
                            >
                                <th className="p-3 ">
                                    <h1 className="text-[14px] font-[500] text-[#555555]">{user.number}</h1>
                                </th>
                                <td className="p-3 ">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={user.img} className="rounded-2xl" alt={user.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.country}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 ">
                                    <span className="text-gray-700 font-semibold">{user.email}</span>

                                </td>
                                <td className="p-3  text-gray-600">{user.contactNumber}</td>
                                <td className="p-3  text-gray-600">{user.country}</td>
                                <td className="p-3  text-gray-600">{user.subscription}</td>
                                <td className="p-3  text-gray-600">{user.income}</td>
                                <th className="p-3 ">
                                    <NavLink className="text-xl">
                                        <IoEyeOutline />
                                    </NavLink>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
