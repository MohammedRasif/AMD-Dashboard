import { AiOutlineRise } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiCurrencyDollarSimple } from "react-icons/pi";



const Home = () => {
    // const dataset = [
    //     { name: 'Austria', code: 'AT', gdp: 471 },
    //     { name: 'Belgium', code: 'BE', gdp: 583 },
    //     { name: 'Bulgaria', code: 'BG', gdp: 90.35 },
    //     { name: 'Croatia', code: 'HR', gdp: 71.6 },
    //     { name: 'Czech Republic', code: 'CZ', gdp: 291 },
    //     { name: 'Denmark', code: 'DK', gdp: 400 },
    //     { name: 'Finland', code: 'FI', gdp: 283 },
    //     { name: 'France', code: 'FR', gdp: 2779 },
    //     { name: 'Germany', code: 'DE', gdp: 4082 },
    //     { name: 'Greece', code: 'GR', gdp: 218 },
    //     { name: 'Hungary', code: 'HU', gdp: 177 },
    //     { name: 'Ireland', code: 'IE', gdp: 533 },
    //     { name: 'Italy', code: 'IT', gdp: 2050 },
    //     { name: 'Netherlands', code: 'NL', gdp: 1009 },
    //     { name: 'Poland', code: 'PL', gdp: 688 },
    //     { name: 'Portugal', code: 'PT', gdp: 255 },
    //     { name: 'Romania', code: 'RO', gdp: 301 },
    //     { name: 'Slovakia', code: 'SK', gdp: 115 },
    //     { name: 'Spain', code: 'ES', gdp: 1418 },
    //     { name: 'Sweden', code: 'SE', gdp: 591 },
    //   ];

    //   const chartParams = {
    //     yAxis: [
    //       {
    //         label: 'GDP (million $USD)',
    //       },
    //     ],
    //     series: [
    //       {
    //         label: 'GDP',
    //         dataKey: 'gdp',
    //         valueFormatter: (v) =>
    //           new Intl.NumberFormat('en-US', {
    //             style: 'currency',
    //             currency: 'USD',
    //             compactDisplay: 'short',
    //             notation: 'compact',
    //           }).format((v || 0) * 1_000_000),
    //       },
    //     ],
    //     slotProps: { legend: { hidden: true } },
    //     dataset,
    //     width: 600,
    //     height: 400,
    //     sx: {
    //       [`.${axisClasses.left} .${axisClasses.label}`]: {
    //         transform: 'translate(-20px, 0)',
    //       },
    //     },
    //   };

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
                            <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]" />
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
                            <PiCurrencyDollarSimple className="text-2xl text-[#8CAB91]" />
                            <h1 className=" absolute text-[24px] montserrat ml-5">1k</h1>
                            <AiOutlineRise className="ml-8 mb-4 text-[#8CAB91] text-2xl" />

                            <p className="absolute text-[#8CAB91] text-[14px] pl-14  pt-1">70%</p>
                        </div>
                        <p className="text-[#8CAB91] text-[16px] font-[500] montserrat">Total Income</p>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {/* <BarChart
                xAxis={[
                    {
                        scaleType: 'band',
                        dataKey: 'code',
                        valueFormatter: (code, context) =>
                            context.location === 'tick'
                                ? code
                                : `Country: ${dataset.find((d) => d.code === code)?.name} (${code})`,
                    },
                ]}
                {...chartParams}
            /> */}
        </div>
    );
}

export default Home;
