import JoditEditor from "jodit-react";
import { useMemo, useRef, useState, useEffect } from "react";
import { useSettingQuery, useEditSettingMutation } from "../../../redux/feature/ApiSlice";
import "./Term.css"; // Import custom styles

const TermCondition = () => {
    const editor = useRef(null);

    // ✅ Fetch data from the API
    const { data, isLoading, error } = useSettingQuery();
    const [editSetting, { isLoading: isUpdating, error: updateError }] = useEditSettingMutation(); // Handle loading/error for mutation
    console.log(data);

    const defaultText = `
        <h2 style="padding-top: 1rem; padding-bottom: 2.5rem;">Terms and Conditions</h2>
        No terms and conditions available. Please update the terms.
    `;

    const [content, setContent] = useState(defaultText);
    const [message, setMessage] = useState(""); // State for success/error message

    useEffect(() => {
        if (data) {
            console.log("Fetched data:", data); // Log the data fetched from the API
            setContent(data?.terms ?? defaultText); // Set the content if available, else use defaultText
        }
    }, [data]);

    // ✅ Custom Toolbar Config for the Jodit Editor
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: "Start typing...",
            toolbarButtonSize: "small",
            buttons: "bold,italic,underline,ul,ol",
            toolbarAdaptive: false,
            height: "calc(100vh - 50px)",
        }),
        []
    );

    // Handle the submit action
    const handleSubmit = async () => {
        setMessage(""); // Clear previous message before new submission

        console.log("Submitting updated terms..."); // Debug: Log when submit is clicked

        try {
            // Ensure the data structure is correct before submitting
            const response = await editSetting({ terms: content }).unwrap(); // Send content as 'terms'
            console.log("Terms and conditions updated successfully:", response);
            setMessage("Terms and conditions updated successfully!"); // Success message
            alert("submite successfully")
        } catch (error) {
            console.error("Failed to update terms and conditions:", error);
            setMessage("Failed to update terms and conditions. Please try again."); // Error message
        }
    };

    // Show loading or error message
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data.</p>;

    return (
        <div className="editor-wrapper">
            <div className="flex items-center justify-between mb-3">
                <h1 className="text-[24px] font-[500] pb-5">Terms And Conditions</h1>
                <button
                    className="text-[#FAF1E6] bg-[#8CAB91] font-[500] text-[18px] px-4 py-2 rounded-md cursor-pointer"
                    onClick={handleSubmit} // Trigger handleSubmit on button click
                    disabled={isUpdating} // Disable button while submitting
                >
                    {isUpdating ? "Updating..." : "Submit"}
                </button>
            </div>


            <div className="editor-container">
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={(newContent) => setContent(newContent)} // Update state on blur
                />
            </div>
        </div>
    );
};

export default TermCondition;
