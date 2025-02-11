import { FaPlus } from "react-icons/fa";
import { FaEye, FaTrash, FaEdit } from "react-icons/fa";

const categories = [
    { name: "Childhood", questionsAdded: 5, totalQuestions: 10 },
    { name: "Family", questionsAdded: 5, totalQuestions: 10 },
    { name: "Love", questionsAdded: 5, totalQuestions: 10 },
    { name: "Friends", questionsAdded: 5, totalQuestions: 10 },
    { name: "Others", questionsAdded: 5, totalQuestions: 10 },
];

const AddQuestionnaire = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-bold  ">Ouestionnaire</h1>
                <button className="w-[185px] h-[38px] bg-[#8CAB91] text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl">
                    <FaPlus className="text-sm" />
                    <h1>Add New Section</h1>
                </button>
            </div>
            <div>
                <div className="bg-white py-10 px-5 mt-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-4 border border-green-300 rounded-lg bg-[#FAFAF5] mb-3"
                        >
                            {/* Left Section: Title & Subtitle */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {category.questionsAdded}/{category.totalQuestions} Questions Added
                                </p>
                            </div>

                            {/* Right Section: Icons */}
                            <div className="flex items-center gap-3 text-green-700">
                                <FaEye className="cursor-pointer hover:text-green-500 transition" />
                                <FaTrash className="cursor-pointer hover:text-red-500 transition" />
                                <FaEdit className="cursor-pointer hover:text-blue-500 transition" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddQuestionnaire;
