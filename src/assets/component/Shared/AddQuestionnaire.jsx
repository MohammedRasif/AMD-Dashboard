import { FaPlus } from "react-icons/fa";

const AddQuestionnaire = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-bold  ">Ouestionnaire</h1>
                <button className="w-[185px] h-[38px] bg-[#8CAB91] text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl">
                <FaPlus  className="text-sm"/>
                    <h1>Add New Section</h1>
                </button>
            </div>
        </div>
    );
}

export default AddQuestionnaire;
 