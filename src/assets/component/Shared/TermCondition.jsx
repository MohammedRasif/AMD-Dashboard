import JoditEditor from "jodit-react";
import { useMemo, useRef, useState, useEffect } from "react";
import "./Term.css"; // Import custom styles
import { useSettingQuery } from "../../../redux/feature/ApiSlice";

const TermCondition = () => {
    const editor = useRef(null);
    
    // ✅ API থেকে ডাটা আনুন
    const { data, isLoading } = useSettingQuery();
    console.log(data);

    const defaultText = `
        <h2 style="padding-top: 1rem; padding-bottom: 2.5rem;">Terms and Conditions</h2>
        No terms and conditions available. Please update the terms.
    `;

    const [content, setContent] = useState(defaultText);

    useEffect(() => {
        if (data) {
            setContent(data?.terms ?? defaultText); // terms null হলে defaultText সেট হবে
        }
    }, [data]);

    // ✅ Custom Toolbar Config
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

    return (
        <div className="editor-wrapper">
            <div className="flex items-center justify-between mb-3">
                <h1 className="text-[24px] font-[500] pb-5">Terms And Conditions</h1>
                <button className="text-[#FAF1E6] bg-[#8CAB91] font-[500] text-[18px] px-4 py-2 rounded-md cursor-pointer">
                    Submit
                </button>
            </div>

            {isLoading ? (
                <p>Loading...</p> // ✅ লোডিং UI
            ) : (
                <div className="editor-container">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1}
                        onBlur={(newContent) => setContent(newContent)} // Update state on blur
                    />
                </div>
            )}
        </div>
    );
};

export default TermCondition;
