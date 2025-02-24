import JoditEditor from "jodit-react";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { useSettingQuery } from "../../../redux/feature/ApiSlice";

const Privacy = () => {
    const editor = useRef(null);

    // ✅ API থেকে data আনুন
    const { data, isLoading } = useSettingQuery();

    // ✅ Default Content যদি API থেকে data না আসে
    const defaultText = `
        <h2 style="padding-top: 1rem; padding-bottom: 2.5rem;">Privacy Policy</h2>
        No privacy policy available. Please update the privacy terms.
    `;

    // ✅ State তৈরি করা হয়েছে
    const [content, setContent] = useState(defaultText);

    // ✅ API থেকে data পাওয়ার পর সেট করা
    useEffect(() => {
        if (data) {
            setContent(data?.privacy ?? defaultText); // `privacy` null হলে defaultText সেট হবে
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
                <h1 className="text-[24px] font-[500] pb-5">Privacy Policy</h1>
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

export default Privacy;
