import { IoSettingsSharp } from "react-icons/io5";
import { LiaAddressCardSolid } from "react-icons/lia";
import { LuUserPlus } from "react-icons/lu";
import { MdDashboard, MdElectricBolt } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>

            <div className="flex items-center justify-center w-[249.99px] h-[73px] pt-[12px] ">
                <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738995829/Group_1000004237_awy135.png" className="w-[53.99px] h-[53.99px] pt-[4.86]" alt="" />
                <h1 className="font-[500] text-[14px] text-[#8CAB91]">una historia para siempre</h1>
            </div>
            <div className="text-[#364636] pt-5">
                <NavLink to="/" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91] text-[#FAF1E6]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91]" : ""}`}>
                                <MdDashboard className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Dashboard</h1>
                            </div>
                        </div>
                    )}
                </NavLink>

                <NavLink to="/odermanagement" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91]" : ""}`}>
                                <RiShoppingBag3Line className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Order management</h1>
                            </div>
                        </div>
                    )}
                </NavLink>

                <NavLink to="/addquestionnaire" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91]" : ""}`}>
                                <LiaAddressCardSolid className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Add questionnaire</h1>
                            </div>
                        </div>
                    )}
                </NavLink>

                <NavLink to="/makeadmin" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91]" : ""}`}>
                                <LuUserPlus className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Make Admin</h1>
                            </div>
                        </div>
                    )}
                </NavLink>

                <NavLink to="/managesubscription" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91]" : ""}`}>
                                <MdElectricBolt className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Manage Subscription</h1>
                            </div>
                        </div>
                    )}
                </NavLink>

                <NavLink to="/setting" className={({ isActive }) => "flex items-center justify-between w-[280px]"}>
                    {({ isActive }) => (
                        <div className="flex items-center justify-between w-[280px]">
                            <div className={`p-[3px] h-[70px] rounded-r-2xl ${isActive ? "bg-[#8CAB91]" : ""}`}></div>
                            <div className={`flex items-center space-x-2 justify-start w-[250px] h-[72px] pl-[30px] ${isActive ? "bg-[#8CAB91]" : ""}`}>
                                <IoSettingsSharp className="text-[18px]" />
                                <h1 className="text-[16px] font-[500]">Settings</h1>
                            </div>
                        </div>
                    )}
                </NavLink>
            </div>



        </div>

    );
}

export default Sidebar;
