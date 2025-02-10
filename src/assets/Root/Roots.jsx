import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";

const Roots = () => {
    return (
        <div className="flex">
            <div className="w-[280px] bg-[#FAF1E6] min-h-screen">
                <Sidebar/>
            </div>
            <div className="bg-gray-200 w-full">
                <div className="h-[90px] bg-white ">
                <Navbar/>
                </div>
                <div className="m-5 mr-10   ">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Roots;
 