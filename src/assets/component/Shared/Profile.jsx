import { MdOutlineCancel } from "react-icons/md";

const Profile = () => {
    return (
        <div>
            <div className="w-[503px] h-[238px] bg-[#8CAB91] flex items-center justify-center">
                <div className="text-center">
                    <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png" className="w-[
115.98px] h-[124.08px] rounded-full border " alt="" />
                    <div className="pt-2">
                        <h1 className="text-[
24px] font-[500] text-[#FAF1E6]">Md Rasif</h1>
                        <p className="text-[14px] font-[500]">User</p>
                    </div>
                </div>
                <div className="absolute top-30 right-0">
                    <MdOutlineCancel />

                </div>
            </div>
            <div className="p-10 space-y-3">
                <div>
                    <h1 className="text-[16px] font-[500]">Name</h1>
                    <p className="text-[14px] text-[#555555] ">Md Rasif</p>
                </div>
                <div>
                    <h1 className="text-[16px] font-[500]">Email</h1>
                    <p className="text-[14px] text-[#555555] ">mahmud@gmail.com</p>
                </div>
                <div>
                    <h1 className="text-[16px] font-[500]">Contact No</h1>
                    <p className="text-[14px] text-[#555555] ">+919355574544</p>
                </div>
                <div>
                    <h1 className="text-[16px] font-[500]">Date of birth</h1>
                    <p className="text-[14px] text-[#555555] ">17 dec, 2024</p>
                </div>
                <div>
                    <h1 className="text-[16px] font-[500]">Subscription Type </h1>
                    <p className="text-[14px] text-[#555555] ">Premium subscription</p>
                </div>
                <div>
                    <h1 className="text-[16px] font-[500]">Address</h1>
                    <p className="text-[14px] text-[#555555] ">68/ Joker Vila, Gotham City</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
