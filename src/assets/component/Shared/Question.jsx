import { useState, useEffect } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdArrowBack, MdDeleteOutline } from "react-icons/md";
import { data, NavLink, useParams } from "react-router-dom";
import { useGetQuestionDataQuery, useCreateQuestionSetionMutation, useDeleteQuestionSectionMutation, useEditQuestionMutation } from "../../../redux/feature/ApiSlice";

const Question = () => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [questions, setQuestions] = useState([""]);
    const [createQuestionSetion, { error }] = useCreateQuestionSetionMutation(); // API Hook
    const [deleteQuestionSection] = useDeleteQuestionSectionMutation();
    const [selectedQuestionId, setSelectedQuestionId] = useState(null); // <-- Store selected question ID
    const [editQuestionSection] = useEditQuestionMutation()


    const { id } = useParams() || {};
    const qusId = parseInt(id)

    const { data: questionData, isLoading, isError } = useGetQuestionDataQuery(qusId, {
        skip: !qusId
    })

    // Log the fetched data if it exists
    console.log("Fetched Data:", questionData);
    if (isLoading) {
        return <div>Loading ....</div>
    }

    if (isError) {
        return <div>Error</div>
    }




    // add a new input feld
    const handleAddQuestion = () => {
        setQuestions([...questions, ""]);
    };

    // ইনপুট আপডেট করার ফাংশন
    const handleInputChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = value;
        setQuestions(updatedQuestions);
    };
    // remove input feld
    const handleRemoveQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    // **Submit Function**
    const handleSubmit = async () => {
        const formattedQuestions = questions
            .filter((q) => q.trim() !== "") // ফাঁকা ইনপুট বাদ দেওয়া
            .map((q) => ({ question: q })); // প্রশ্ন ফরম্যাট করা
        if (formattedQuestions.length === 0) {
            alert("Please add at least one question!");
            return;
        }
        const payload = {
            section: qusId, // section ID useParams() থেকে
            questions: formattedQuestions,
        };
        console.log("Submitting Data:", payload);
        try {
            await createQuestionSetion(payload).unwrap();
            setIsOpen(false); // Modal বন্ধ করা              
        } catch (err) {
            console.error("Error submitting data:", err);
            alert("Failed to add questions!");
        }
    };


    // **Delete Function**
    const handleDelete = async () => {
        if (!selectedQuestionId) return; // Ensure an ID is selected
        try {
            console.log("Deleting Question with ID:", selectedQuestionId);
            await deleteQuestionSection(selectedQuestionId).unwrap();
            setIsOpenDelete(false);
            setSelectedQuestionId(null);
        } catch (err) {
            console.error("Error deleting question:", err);
            alert("Failed to delete question!");
        }
    };

    return (
        <div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 mb-4 mt-2">
                    <NavLink to="/addquestionnaire">
                        <div className="text-white bg-[#8CAB91] px-4 py-2 hover:bg-[#7a9c82] transition">
                            <MdArrowBack className="text-xl" />
                        </div>
                    </NavLink>
                    <h1 className="text-2xl font-bold">Childhood</h1>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-[185px] h-[38px] bg-[#8CAB91] text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl cursor-pointer">
                    <FaPlus className="text-sm" />
                    <h1>Add New Section</h1>
                </button>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                <FaTimes size={18} />
                            </button>

                            {/* Modal Heading */}
                            <h2 className="text-lg font-semibold mb-4">ADD New Section</h2>

                            {/* Questions Dynamic Input Fields */}
                            {questions.map((question, index) => (
                                <div key={index} className="mb-2 flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={question}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        placeholder={`Question ${index + 1}`}
                                        className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                    />
                                    {index > 0 && (
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => handleRemoveQuestion(index)}
                                        >
                                            <FaTimes />
                                        </button>
                                    )}
                                </div>
                            ))}

                            {/* Add More Question Button */}
                            <div className="mb-4">
                                <button
                                    className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 rounded-md text-sm font-[100] text-start"
                                    onClick={handleAddQuestion}
                                >
                                    Add more question <FaPlus className="text-[10px]" />
                                </button>
                            </div>

                            {/* Publish Button */}
                            <button
                                className="px-3 py-2 bg-[#8CAB91] text-white rounded-md hover:bg-[#7A9B80] transition"
                                onClick={handleSubmit}
                                disabled={isLoading}
                            >
                                {isLoading ? "Submitting..." : "Publish"}
                            </button>

                            {/* Error Message */}
                            {error && <p className="text-red-500 mt-2">Failed to submit data!</p>}
                        </div>
                    </div>
                )}
            </div>
            <div className="bg-white p-10 mt-2">
                {questionData.map((category, index) => (
                    <div
                        key={index}
                        className="flex h-[70px] justify-between items-center p-4 border border-green-300 rounded-lg bg-[#FAF1E6] mb-5"
                    >
                        {/* Left Section: Title & Subtitle */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {category.question}
                            </h3>
                        </div>

                        {/* Right Section: Icons */}
                        <div className="flex items-center gap-3 text-green-700 text-[24px]">
                            {/* Delete Button */}
                            <button
                                onClick={() => {
                                    setIsOpenDelete(true);
                                    setSelectedQuestionId(category.id);
                                }}
                            >
                                <MdDeleteOutline className="cursor-pointer hover:text-red-500 transition" />
                            </button>

                            {/* Delete Modal */}
                            {isOpenDelete && (
                                <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
                                    <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] relative">
                                        <button className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer" onClick={() => setIsOpenDelete(false)}>
                                            <FaTimes size={18} />
                                        </button>
                                        <h2 className="text-[14px] font-[500] text-center">Are you sure?</h2>
                                        <p className="text-[16px] text-[#997D00] text-center my-5">Do you want to delete this content?</p>
                                        <div className="flex justify-center text-[16px] space-x-4 mt-4">
                                            <button className="px-4 py-2 bg-[#8CAB91] text-white rounded-lg cursor-pointer" onClick={handleDelete}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={() => setEditModalOpen(true)}
                            >
                                <FaRegEdit className="cursor-pointer hover:text-blue-500 transition " />
                            </button>
                            {editModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
                                    {/* Modal Content */}
                                    <div className="bg-white p-5 rounded-lg shadow-lg w-[400px] relative">
                                        {/* Close Button */}
                                        <button
                                            className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
                                            onClick={() => setEditModalOpen(false)}
                                        >
                                            <FaTimes size={18} />
                                        </button>

                                        {/* Modal Heading */}
                                        <h2 className="text-lg text-black font-semibold mb-4">Edit Question</h2>

                                        {/* Input Fields */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Question</label>
                                            <input
                                                type="text"
                                                className="w-full mt-3 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                            />
                                        </div>

                                        {/* Publish Button */}
                                        <button
                                            className="px-3 py-2 bg-[#8CAB91] text-[18px] text-white rounded-md hover:bg-[#7A9B80] transition"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Publish
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Question;
