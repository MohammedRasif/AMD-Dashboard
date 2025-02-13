import { useState, useRef } from "react";

const Verification = () => {
    const [otp, setOtp] = useState(["", "", "", ""]); // State for OTP input values
    const inputs = useRef([]); // Ref array for input fields

    // Handle input change
    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return; // Only allow digits

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input field if filled
        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    // Handle backspace (moving to previous input)
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    // Handle paste event
    const handlePaste = (e) => {
        const pasteData = e.clipboardData.getData("text").slice(0, 4).split(""); // Take first 4 digits
        if (!/^\d{1,4}$/.test(pasteData.join(""))) return; // Validate only digits

        const newOtp = [...otp];
        pasteData.forEach((digit, i) => {
            newOtp[i] = digit;
        });
        setOtp(newOtp);

        // Move focus to the last filled input
        const lastFilledIndex = pasteData.length - 1;
        if (lastFilledIndex < 3) {
            inputs.current[lastFilledIndex + 1].focus();
        }
    };

    return (

        <div className="flex items-center pl-80 pt-36 space-x-10">
            <div className="w-[573px] h-[810px] pt-20">
                <img
                    src="https://res.cloudinary.com/dfsu0cuvb/image/upload/v1739188231/Path_7_nfvlbc.png"
                    className="w-[483px] h-[280.5px]"
                    alt="Login Image"
                />
            </div>
            <div className="w-[573px] h-[810px] pt-36">
                <p className="text-[14px] font-[500] text-center pt-10 text-[#364636] ">Congratulations! <br />
                    Pleas enter your 4 digit code </p>

                {/* OTP Inputs */}
                <div className="flex justify-center mt-10 space-x-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputs.current[index] = el)} // Store refs
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleInputChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={handlePaste}
                            className="w-12 h-12 text-center border rounded-md text-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#8CAB91] bg-gray-200"
                        />
                    ))}
                </div>

                {/* Verify Button */}
                <button
                    className="w-full mt-8 h-[48px] rounded-full bg-[#8CAB91] text-[#FAF1E6] font-medium text-base leading-[24px] hover:opacity-90 cursor-pointer  focus:outline-none focus:ring-2 focus:ring-blue-400 "
                >
                    VERIFY
                </button>

                {/* Resend Option */}
                <p className="text-center text-sm mt-5">
                    You have not received the email?{" "}
                    <a href="/resend" className="text-blue-400 hover:underline cursor-pointer">
                        Resend
                    </a>
                </p>
            </div>
        </div>

    );
};

export default Verification;
