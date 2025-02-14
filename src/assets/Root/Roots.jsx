import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";

const Roots = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar - Fixed and Unchanged */}
            <div className="w-[280px] bg-[#FAF1E6] h-full fixed">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col w-full ml-[280px]">
                {/* Fixed Full-Width Navbar */}
                <div className="fixed top-0 left-[280px] w-[calc(100%-280px)] bg-white z-50 shadow-md">
                    <Navbar />
                </div>

                {/* Scrollable Content Area */}
                <div className="h-full mt-16 overflow-auto p-5 bg-gray-200">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Roots;
