import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="pr-10">
            <div className="flex items-center justify-end pt-6 space-x-2">
                <div className="w-[39.33px] h-[40px] rounded-full bg-[#F2F2F2]  flex items-center justify-center">
                <IoMdNotificationsOutline className=" "  />
                </div>
                <div className="flex items-center space-x-2">
                    <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png" className="h-[48px] w-[48px]" alt="" />
                    <h1 className="font-[600] text-[18px]">Md Rasif</h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
