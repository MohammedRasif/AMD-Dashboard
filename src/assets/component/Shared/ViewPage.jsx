import { MdArrowBack } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ViewPage = () => {
    return (
        <div>
            <div className="flex items-center gap-4 mb-4">
                    <NavLink to="/oderDetails">
                        <div className="text-white bg-[#8CAB91]  px-4 py-2 hover:bg-[#7a9c82] transition">
                            <MdArrowBack className="text-xl" />
                        </div>
                    </NavLink>
                    <h1 className="text-2xl font-bold">View Page</h1>
                </div>
                <div className="flex items-center justify-between mx-52">
                    <div className="w-[711px] h-[750px] bg-[#E2D3C0]">
                            <h1 className="text-[24px] font-[500] text-center pt-[102px]">Cover</h1>
                            <h1 className="text-[24px] font-[500] text-center items-center text-white pt-52">My Life</h1>
                    </div>
                    <div className="w-[378px] h-[750px] bg-white px-5 pt-28">
                            <h1 className="text-[18px] font-[500]">Order information</h1>
                            <div className="flex items-center justify-between py-5">
                                <h1>Number of copies:</h1>
                                <h1>1</h1>
                            </div>

                            <button className="text-[#FAF1E6] text-[16px] w-full bg-[#8CAB91] py-3 uppercase rounded-full mt-5">
                                Confirm order
                            </button>
                            <button className="bg-[#FAF1E6] text-[16px] w-full text-[#8CAB91] py-3 uppercase border border-[#8CAB91] rounded-full mt-3">
                                cancel order
                            </button>
                    </div>
                </div>
        </div>
    );
}

export default ViewPage;
