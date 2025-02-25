import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useAdminProfileDataQuery } from "../../../redux/feature/ApiSlice";

const Navbar = () => {
        const { data: adminProfile } = useAdminProfileDataQuery();
    

    return (
        <div className="pr-10 pb-2 ">
            <div className="flex items-center w-full justify-end pt-6 space-x-2 ">
                {/* Notification Icon */}
                <NavLink to="/notification">
                    <div className=" relative w-[39.33px] h-[40px] rounded-full bg-[#F2F2F2] flex items-center justify-center">
                        <IoMdNotificationsOutline className=" " />
                    </div>
                    <div className="absolute bg-[#8CAB91]  rounded-full px-1 top-[28px] right-[203px]">
                        <h1 className="text-[10px] text-[#FAF1E6]">5</h1>
                    </div>
                </NavLink>

                {/* Profile Section - Click to Open Modal */}
                <NavLink to="/adminProfile">
                    <div
                        className="flex items-center space-x-2 cursor-pointer"

                    >
                        <img
                            src={adminProfile?.image}
                            className="h-[48px] w-[48px]"
                            alt=""
                        />
                        <h1 className="font-[600] text-[18px] ">{adminProfile?.full_name}</h1>
                    </div>
                </NavLink>
            </div>


        </div>
    );
};

export default Navbar;
