import React from 'react';

const OderDetails = () => {
    return (
        <div className='w-[651px] h-[837px] bg-white flex items-center justify-center'>
            <div>
                <div className='w-[631px] h-[200px] bg-[#8CAB91] text-center py-5'>
                    <img src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1738148405/fotor-2025010923230_1_u9l6vi.png" className='w-[120.98px] h-[124.08px] ml-64 ' alt="" />
                    <h1 className='text-[20px] font-500 text-[#FAF1E6]'>Mohammed Rasif</h1>
                    <p className='text-[12px] font-[500] text-[#FAF1E6]'>User</p>
                </div>
                <div className="pt-10 space-y-3">
                    <div>
                        <h1 className="text-[16px] font-[500]">Name</h1>
                        <p className="text-[14px] text-[#555555]">Md Rasif</p>
                    </div>
                    <div>
                        <h1 className="text-[16px] font-[500]">Email</h1>
                        <p className="text-[14px] text-[#555555]">
                            mahmud@gmail.com
                        </p>
                    </div>
                    <div>
                        <h1 className="text-[16px] font-[500]">Contact No</h1>
                        <p className="text-[14px] text-[#555555]">
                            +919355574544
                        </p>
                    </div>
                    <div>
                        <h1 className="text-[16px] font-[500]">Date of birth</h1>
                        <p className="text-[14px] text-[#555555]">17 dec, 2024</p>
                    </div>
                    <div>
                        <h1 className="text-[16px] font-[500]">Subscription Type</h1>
                        <p className="text-[14px] text-[#555555]">
                            Premium subscription
                        </p>
                    </div>
                    <div>
                        <h1 className="text-[16px] font-[500]">Address</h1>
                        <p className="text-[14px] text-[#555555]">
                            68/ Joker Vila, Gotham City
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[16px] font-[500] pt-5'>Dindiya’s  Book collection</h1>
                </div>
            </div>
        </div>
    );
}

export default OderDetails;
