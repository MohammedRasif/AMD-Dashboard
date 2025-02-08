import { HiMiniUserGroup } from "react-icons/hi2";

const Home = () => {
    return (
        <div className="bg-white  min-h-full">
            <div className="flex items-center justify-between">
                <div className="w-[1,206px] h-[130px] flex items-center justify-between shadow-2xl space-x-20 ">
                    <div className="w-[36px] h-[36px] ">
                        <HiMiniUserGroup />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-5 ">
                        <h1 className="text-[24px] montserrat font-[700]">10</h1>
                        <p>Total User</p>
                    </div>
                </div>
                <div className="w-[1,206px] h-[130px] flex items-center justify-between px-5 shadow-2xl space-x-20">
                    <div>
                        <HiMiniUserGroup />
                    </div>
                    <div className="w-[137px] h-[80px] space-y-5">
                        <h1 className="text-[24px] montserrat font-[700]">10</h1>
                        <p className=" font-[500] text-[16px]">Total User</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
