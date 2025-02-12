import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { LiaAddressCardSolid } from "react-icons/lia";
import { LuUserPlus } from "react-icons/lu";
import { MdDashboard, MdElectricBolt } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isSetting, setIsSetting] = useState(false)

    // Checking for routes
    const isActiveo = location.pathname.startsWith("/addquestionnaire") || location.pathname.startsWith("/question");
    const isActiveb = location.pathname.startsWith("/odermanagement") || location.pathname.startsWith("/oderDetails");
    const isActivec = location.pathname.startsWith("/subscription") || location.pathname.startsWith("/createSubcription") || location.pathname.startsWith("/editSubcription");
    const isActived = location.pathname.startsWith("/coupon-code") || location.pathname.startsWith("/AddCoupon");
    const isActivee = location.pathname.startsWith("/termsCondition") || location.pathname.startsWith("/porivacyPolicy");
    const isManageSubscriptionActive =
        location.pathname.startsWith('/subscription') ||
        location.pathname.startsWith('/createSubcription') ||
        location.pathname.startsWith('/editSubcription') ||
        location.pathname.startsWith('/coupon-code') ||
        location.pathname.startsWith('/AddCoupon');
    const isSettingActive = location.pathname.startsWith('/termsCondition') || location.pathname.startsWith('/porivacyPolicy');


    return (
        <div className="">
            <div className="flex fixed items-center justify-center w-[249.99px] h-[73px] pt-[12px]">
                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738995829/Group_1000004237_awy135.png" className="w-[53.99px] h-[53.99px] pt-[4.86]" alt="" />
                <h1 className="font-[500] text-[14px] text-[#8CAB91]">una historia para siempre</h1>
            </div>

            <div className="text-[#364636] pt-24 fixed ">
                {/* Dashboard */}
                <NavLink to="/" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                                <MdDashboard className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Dashboard</h1>
                            </div>
                        </div>
                    )}
                </NavLink>

                {/* Order Management */}
                <NavLink to="/odermanagement">
                    <div className="flex items-center justify-between w-[280px]">
                        <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActiveb ? "bg-[#8CAB91]" : ""}`}></div>
                        <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActiveb ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                            <RiShoppingBag3Line className="text-[18px]" />
                            <h1 className="text-[16px] font-[500]">Order management</h1>
                        </div>
                    </div>
                </NavLink>

                {/* Add Questionnaire */}
                <NavLink to="/addquestionnaire">
                    <div className="flex items-center justify-between w-[280px]">
                        <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActiveo ? "bg-[#8CAB91]" : ""}`}></div>
                        <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActiveo ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                            <LiaAddressCardSolid className="text-[18px]" />
                            <h1 className="text-[16px] font-[500]">Add questionnaire</h1>
                        </div>
                    </div>
                </NavLink>


                <NavLink to="/makeadmin" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                                <LuUserPlus className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Make Admin</h1>
                            </div>
                        </div>
                    )}
                </NavLink>

                {/* Manage Subscription */}

                <div className={`${isManageSubscriptionActive ? 'bg-[#8CAB91] rounded-r-2xl w-[6px]' : ''}`}>
                    <div className="pl-[30px]">
                        <button
                            className="flex items-center justify-between w-[280px]"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div
                                className={`flex items-center space-x-2 justify-between w-[250px] h-[72px] pl-[30px] transition-all duration-300 ${isManageSubscriptionActive ? 'bg-[#8CAB91] text-[#FAF1E6]  ' : ''}`}
                            >
                                <MdElectricBolt className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Manage Subscription</h1>
                                {isOpen ? <GoChevronUp className="mr-2" /> : <GoChevronDown className="mr-2" />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Submenu (Animated Expand) */}
                <div
                    className={` ml-[30px] w-[250px] overflow-hidden transition-all bg-white  duration-300 ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <NavLink
                        to="/subscription"
                        className={({ isActive }) =>
                            ` h-[70px] flex items-center w-[300px] pl-16 mr-[30px]   text-gray-700 hover:bg-[#8CAB91] hover:text-white font-[500] transition  ${isActivec ? 'bg-[#CBD9CC]' : ''}`
                        }
                    >
                        Subscription
                    </NavLink>
                    <NavLink
                        to="/coupon-code"
                        className={({ isActive }) =>
                            `flex items-center h-[70px] w-[300px] pl-16 mr-[30px] text-gray-700 hover:bg-[#8CAB91] hover:text-white font-[500] transition  ${isActived ? 'bg-[#CBD9CC]' : ''}`
                        }
                    >
                        Coupon Code
                    </NavLink>
                </div>

                {/* Settings */}
                {/* <NavLink to="/setting" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px] mt-2">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}>
                                <IoSettingsSharp className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Settings</h1>
                            </div>
                        </div>
                    )}
                </NavLink> */}
                <div className={`${isSettingActive ? 'bg-[#8CAB91] rounded-r-2xl w-[6px]' : ''}`}>
                    <div className="pl-[30px]">
                        <button
                            className="flex items-center justify-between w-[280px]"
                            onClick={() => setIsSetting(!isSetting)}
                        >
                            <div
                                className={`flex items-center space-x-2 w-[250px] h-[72px] pl-[30px] transition-all duration-300 ${isSettingActive ? 'bg-[#8CAB91] text-[#FAF1E6]' : ''}`}
                            >
                                <CiSettings className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Setting</h1>
                                {isSetting ? <GoChevronUp className="ml-[110px]" /> : <GoChevronDown className="ml-[110px]" />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Submenu (Animated Expand) */}
                <div
                    className={`ml-[30px] w-[250px] overflow-hidden transition-all bg-white duration-300 ${isSetting ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <NavLink
                        to="/termsCondition"
                        className={({ isActive }) =>
                            `h-[70px] flex items-center w-[300px] pl-16 mr-[30px] text-gray-700 hover:bg-[#8CAB91] hover:text-white font-[500] transition ${isActive ? 'bg-[#CBD9CC] text-[#FAF1E6]' : ''}`
                        }
                    >
                        Terms & condition
                    </NavLink>
                    <NavLink
                        to="/porivacyPolicy"
                        className={({ isActive }) =>
                            `flex items-center h-[70px] w-[300px] pl-16 mr-[30px] text-gray-700 hover:bg-[#8CAB91] hover:text-white font-[500] transition ${isActive ? 'bg-[#CBD9CC] text-[#FAF1E6]' : ''}`
                        }
                    >
                        Privacy policy
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
