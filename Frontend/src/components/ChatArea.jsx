import React, { useContext, useState } from 'react';
import MessageInput from './MessageInput';
import { useSelector } from "react-redux";
import { ChatContext } from '../context/ChatProvider';
import ApiClient from '../services/ApiClient';
import { FaRobot, FaUser } from "react-icons/fa";

const ChatArea = ({ setIsMapBarOpen, setIsDepth }) => {
    const { messages, setMessages } = useContext(ChatContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const latestData = useSelector((state) => state.conceptMap.latest);

    const handleAskAi = async (nodeId, label) => {
        setMessages((prev) => [...prev, { sender: "user", text: label }]);
        setShowDropdown(false);

        try {
            const response = await ApiClient.post('ai/askai', {
                word: label,
            });
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: response.data.text },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "⚠️ Something went wrong. Try again." },
            ]);
        }
    };

    return (
        <div className="flex-grow">
            <div className="h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] flex flex-col">
                
                {/* Chat messages */}
                <div className="flex-grow p-4 overflow-y-auto text-white space-y-4">
                    {messages.length > 0 ? (
                        messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start gap-2 max-w-[75%] ${
                                    msg.sender === "user" ? "ml-auto flex-row-reverse" : "flex-row"
                                }`}
                            >
                                {/* Avatar */}
                                <div
                                    className={`p-2 rounded-full shadow-md ${
                                        msg.sender === "user"
                                            ? "bg-red-600 text-white"
                                            : "bg-gray-900 text-red-500"
                                    }`}
                                >
                                    {msg.sender === "user" ? (
                                        <FaUser size={18} />
                                    ) : (
                                        <FaRobot size={18} />
                                    )}
                                </div>

                                {/* Message bubble */}
                                <div
                                    className={`px-4 py-2 rounded-2xl shadow-md text-sm leading-relaxed ${
                                        msg.sender === "user"
                                            ? "bg-red-600/90 text-white"
                                            : "bg-gray-800 text-gray-200"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 italic">Chat messages appear here...</p>
                    )}
                </div>

                {/* Ask AI button + dropdown */}
                <div className="p-3 flex flex-col items-center relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition"
                    >
                        Ask AI
                    </button>

                    {showDropdown && (
                        <div className="absolute bottom-14 bg-[#111] border border-red-600 text-white rounded-lg shadow-lg p-2 w-60 max-h-52 overflow-y-auto">
                            {Object.values(latestData).map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAskAi(item.id, item.label)}
                                    className="w-full text-left px-3 py-2 hover:bg-red-600/30 rounded transition"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Message input */}
                <div className="p-4 border-t border-gray-800">
                    <MessageInput setIsMapBarOpen={setIsMapBarOpen} setIsDepth={setIsDepth} />
                </div>
            </div>
        </div>
    );
};

export default ChatArea;
