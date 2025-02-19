import { useState } from "react";
import { FaPlus, FaRegEdit, FaTimes } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useCreateQuestionMutation, useEditQuestionMutation, useGetQuestionQuery, useDeleteQuestionMutation } from "../../../redux/feature/ApiSlice";


const AddQuestionnaire = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [createQuestion] = useCreateQuestionMutation()
    const { data = [], isLoading, isError } = useGetQuestionQuery()
    const [sectionName, setSectionName] = useState();
    const [questionCount, setQuestionCount] = useState(0);
    const [editQuestion, { isLoading: isUpdating }] = useEditQuestionMutation()
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editedData, setEditedData] = useState({ name: "", question_count: "" });
    const [deleteQuestion] = useDeleteQuestionMutation();
    const [selectedDeleteCategory, setSelectedDeleteCategory] = useState(null); // Store the category to be deleted



    // Use the mutation hook
    const handleEditClick = (category) => {
        setSelectedCategory(category);
        setEditedData({ name: category.name, question_count: category.question_count });
        setEditModalOpen(true);
    };

    const handleUpdate = async () => {
        try {
            // Call the mutation with the selected ID and updated data
            await editQuestion({
                id: selectedCategory.id,
                question: editedData,
            }).unwrap(); // unwrap() to handle the result properly

            // Close the modal after successful update
            setEditModalOpen(false);
        } catch (error) {
            console.error("Failed to update the question:", error);
        }
    };

    const handlePublish = () => {
        if (!sectionName || !questionCount) {
            alert("Please enter both section name and number of questions.");
            return;
        }
        const questionData = {
            name: sectionName,
            question_count: parseInt(questionCount), // Ensure question_count is an integer
        };
        const response = createQuestion(questionData).unwrap();
        console.log("Section created successfully:", response);
        setSectionName(null)
        setQuestionCount(0)
        setIsOpen(false);

    };

    // Open delete modal for selected category
    const handleOpenDeleteModal = (category) => {
        setSelectedDeleteCategory(category);
    };

    // Handle delete action
    const handleDelete = async () => {
        if (!selectedDeleteCategory) return;

        try {
            await deleteQuestion(selectedDeleteCategory.id).unwrap();
            setSelectedDeleteCategory(null); // Close modal after delete
        } catch (error) {
            console.error("Failed to delete question:", error);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-bold  ">Ouestionnaire</h1>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-[185px] h-[38px] bg-[#8CAB91] mt-2 text-[#FAF1E6] flex items-center justify-between px-5 rounded-xl cursor-pointer">
                    <FaPlus className="text-sm" />
                    <h1>Add New Section</h1>
                </button>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                            <button
                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6]"
                                onClick={() => setIsOpen(false)}
                            >
                                <FaTimes size={18} />
                            </button>

                            <h2 className="text-lg font-semibold mb-4">ADD New Section</h2>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Section Name</label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                    value={sectionName}
                                    onChange={(e) => setSectionName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Number of questions</label>
                                <input
                                    type="number"
                                    placeholder="Type here"
                                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                    value={questionCount}
                                    onChange={(e) => setQuestionCount(parseInt(e.target.value, 10))}
                                />
                            </div>

                            <button
                                className="px-3 py-2 bg-[#8CAB91] text-white rounded-md hover:bg-[#7A9B80] transition"
                                onClick={handlePublish}
                            >
                                Publish
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <div className="bg-white p-10   mt-6">
                    {data.map((category, index) => (
                        <div
                            key={index}
                            className="flex h-[103px] justify-between items-center p-4 border border-green-300 rounded-lg bg-[#FAFAF5] mb-5"
                        >
                            {/* Left Section: Title & Subtitle */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {category.added_question_count} /{category.question_count} Question Added
                                </p>
                            </div>

                            {/* Right Section: Icons */}
                            <div className="flex items-center gap-3 text-green-700 text-[24px]">
                                <NavLink to={`/question/${category.id}`}>
                                    <IoEyeOutline className="cursor-pointer hover:text-green-500 transition" />
                                </NavLink>
                                <button onClick={() => handleOpenDeleteModal(category)}>
                                    <MdDeleteOutline className="cursor-pointer hover:text-red-500 transition" />
                                </button>
                                {/* Modal Popup */}
                                {selectedDeleteCategory && (
                                    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm z-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] relative">
                                            <button
                                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6] cursor-pointer"
                                                onClick={() => setSelectedDeleteCategory(null)}
                                            >
                                                <FaTimes size={18} />
                                            </button>

                                            <h2 className="text-[14px] font-[500] text-center">Are you sure?</h2>
                                            <p className="text-[16px] text-[#997D00] text-center my-5">
                                                Do you want to delete "{selectedDeleteCategory.name}"?
                                            </p>

                                            <div className="flex text-[16px] font-[500] justify-center space-x-4 mt-4">
                                                <button
                                                    className="px-4 py-2 bg-[#8CAB91] text-white rounded-lg cursor-pointer"
                                                    onClick={handleDelete}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <button
                                    onClick={() => handleEditClick(category)}>

                                    <FaRegEdit className="cursor-pointer hover:text-blue-500 transition" />
                                </button>
                                {editModalOpen && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                                            <button
                                                className="absolute top-2 right-2 bg-[#8CAB91] rounded-full text-[#FAF1E6]"
                                                onClick={() => setEditModalOpen(false)}
                                            >
                                                <FaTimes size={18} />
                                            </button>

                                            <h2 className="text-lg text-black font-semibold mb-4">Edit Section</h2>

                                            <div className="mb-4">
                                                <label className="block text-[14px]  font-medium text-gray-700">Section Name</label>
                                                <input
                                                    type="text"
                                                    value={editedData.name}
                                                    onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                                                    className="w-full text-[16px] pl-2 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700">Number of questions</label>
                                                <input
                                                    type="text"
                                                    value={editedData.question_count}
                                                    onChange={(e) => setEditedData({ ...editedData, question_count: e.target.value })}
                                                    className="w-full text-[16px] pl-2 py-2 border rounded-md focus:ring focus:ring-[#8CAB91] outline-none"
                                                />
                                            </div>

                                            <button
                                                className="px-3 py-2 bg-[#8CAB91] text-[18px] text-white rounded-md hover:bg-[#7A9B80] transition"
                                                onClick={handleUpdate}
                                                disabled={isUpdating} // Disable the button while the mutation is in progress
                                            >
                                                {isUpdating ? "Updating..." : "Publish"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddQuestionnaire;