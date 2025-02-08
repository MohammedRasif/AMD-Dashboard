import { AiOutlineRise } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { HiMiniUserGroup, HiOutlineUserGroup } from "react-icons/hi2";
import { PiCurrencyDollarSimple } from "react-icons/pi";

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
                        <div className="flex items-center pl-7">
                        <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]"/>
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
                        <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]"/>
                        <h1 className=" absolute text-[24px] montserrat ml-5">1k</h1>
                        <AiOutlineRise className="ml-8 mb-4 text-[#8CAB91] text-2xl" />

                        <p className="absolute text-[#8CAB91] text-[14px] pl-14  pt-1">70%</p>
                        </div>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total Income</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
