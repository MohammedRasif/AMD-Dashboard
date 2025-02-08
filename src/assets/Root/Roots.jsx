import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";

const Roots = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div>
                <Navbar/>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Roots;
