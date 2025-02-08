import { FiUsers } from "react-icons/fi";
import { HiMiniUserGroup, HiOutlineUserGroup } from "react-icons/hi2";

const Home = () => {
    return (
        <div className="bg-white  min-h-full">
            <div className="grid grid-cols-3 gap-10 px-7 pt-5">
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
                        <h1 className="text-[24px] montserrat font-[700]">10</h1>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total User</p>
                    </div>
                </div>
                <div className="w-[1,206px] h-[130px] flex items-center justify-center space-x-16 shadow-2xl pl-5 ">
                    <div className=" ">
                        <HiOutlineUserGroup className="text-[36px]" />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-5 text-center ">
                        <h1 className="text-[24px] montserrat font-[700]">10</h1>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total User</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
