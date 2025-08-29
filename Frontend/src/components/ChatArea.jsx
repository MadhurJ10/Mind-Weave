import React, { useEffect, useState } from 'react';
import MessageInput from './MessageInput';
import { useSelector } from "react-redux";


const ChatArea = ({ setIsMapBarOpen, setIsDepth }) => {
    const [ showDropdown, setShowDropdown ] = useState(false);
    const conceptMapData = useSelector((state) => state.conceptMap.data);
    const latestData = useSelector((state) => state.conceptMap.latest);

    // Hardcoded nodes for now
    const nodes = [
        { id: 1, data: { label: "React Basics" } },
        { id: 2, data: { label: "Authentication Flow" } },
        { id: 3, data: { label: "Database Schema" } },
    ];


    const handleAskAi = (nodeId) => {
        console.log(latestData);
        const selectedNode = nodes.find((n) => n.id === nodeId);
        if (selectedNode) {
            console.log("Sending to API:", selectedNode.data.label);
            // Later you can replace this with API call
        }
        setShowDropdown(false); // close dropdown
    };

    return (
        <div className="flex-grow">
            <div className="h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] w-full flex flex-col">

                {/* Chat messages */}
                <div className="flex-grow p-4 overflow-y-auto text-white">
                    {/* Chat messages will go here */}
                    <p>Chat messages appear here...</p>
                </div>

                {/* Ask AI button + dropdown */}
                <div className="p-2 flex flex-col items-center relative top-7">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="px-4 py-2 bg-red-600/80 text-white rounded-lg "
                    >
                        Ask AI
                    </button>

                    {showDropdown && (
                        <div className="absolute bottom-14 bg-gray-800 text-white rounded-lg shadow-lg p-2 w-48">
                            {nodes.map((node) => (
                                <div
                                    key={node.id}
                                    onClick={() => handleAskAi(node.id)}
                                    className="px-3 py-2 cursor-pointer hover:bg-gray-700 rounded-md"
                                >
                                    {node.data.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Message input */}
                <div className="p-4">
                    <MessageInput setIsMapBarOpen={setIsMapBarOpen} setIsDepth={setIsDepth} />
                </div>
            </div>
        </div>
    );
};

export default ChatArea;
