import JoditEditor from "jodit-react";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { useSettingQuery } from "../../../redux/feature/ApiSlice";

const Terms = () => {
    const editor = useRef(null);

    const { data, isLoading } = useSettingQuery();

    const defaultText = `
        <h2 style="padding-top: 1rem; padding-bottom: 2.5rem;">Terms & Conditions</h2>
        No terms & conditions available. Please update the terms.
    `;

    const [content, setContent] = useState(defaultText);

    useEffect(() => {
        if (data) {
            setContent(data?.privacy ?? defaultText); 
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
                <h1 className="text-[24px] font-[500] pb-5">Terms & Conditions</h1>
                <button className="text-[#FAF1E6] bg-[#8CAB91] font-[500] text-[18px] px-4 py-2 rounded-md cursor-pointer">
                    Submit
                </button>
            </div>

            {isLoading ? (
                <p>Loading...</p> // 
            ) : (
                <div className="editor-container">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1}
                        onBlur={(newContent) => setContent(newContent)} 
                    />
                </div>
            )}
        </div>
    );
};

export default Terms;
