import JoditEditor from "jodit-react";
import  { useMemo, useRef, useState } from "react";
import "./Term.css"; // Import custom styles

const TermCondition = () => {
    const editor = useRef(null);

    // ✅ Default Content with inline style on the <h2>
    const defaultText = `
        <h2 style="padding-top: 1rem; padding-bottom: 2.5rem;">When do we collect information?</h2>
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, 
        by injected humour, or randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
        embarrassing hidden in the middle of text. 
        
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
        making this the first true generator on the Internet. 
        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
        to generate Lorem Ipsum which looks reasonable.
    `;

    const [content, setContent] = useState(defaultText);

    // ✅ Custom Toolbar Config
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: "Start typing...",
            toolbarButtonSize: "small", // Small toolbar buttons
            buttons: "bold,italic,underline,ul,ol", // Only required buttons
            toolbarAdaptive: false, // Disable adaptive toolbar
            height: "calc(100vh - 50px)", // Set dynamic height
        }),
        []
    );

    return (
        <div className="editor-wrapper ">
            <div className="flex items-center justify-between mb-3">
            <h1 className="text-[24px] font-[500] pb-5">Terms And Conditions</h1>
            <button className="text-[#FAF1E6] bg-[#8CAB91] font-[500]  text-[18px] px-4 py-2 rounded-md cursor-pointer">
                Submit
            </button>
            </div>
            <div className="editor-container ">
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
