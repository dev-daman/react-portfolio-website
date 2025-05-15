import { useEffect, useState } from "react";    

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Loading...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                // You can add any completion logic here if needed

                setTimeout(() => {
                    onComplete(); // Call the onComplete function after the loading is done
                }, 1000); // Delay before calling onComplete
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]); // Empty dependency array

    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-gray-100 z-50">
            <div className="mb-4 text-4xl font-bold font-mono ">
                {text}
                <span className="animate-blink ml-1">|</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                </div>
            </div>
        </div>
    );
};