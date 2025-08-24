import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addData, setLatest } from "../features/conceptMapSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const MessageInput = ({ setIsMapBarOpen, setIsDepth }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const conceptMapData = useSelector((state) => state.conceptMap.data);
    const latestData = useSelector((state) => state.conceptMap.latest);

    async function cleanAndParse(jsonString) {
        const cleared = jsonString.replace(/```json|```/g, "").trim();
        return JSON.parse(cleared);
    }

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/map/create",
                {
                    content: data.text,
                    depth: data.depth,
                },
                { headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZGFhMGEzLTY3MzgtNDhkYi1iYzcwLWFiMDYxN2QzNzkwOSIsImlhdCI6MTc1NjAxNjI1NywiZXhwIjoxNzU2MTAyNjU3fQ.OxIFQzB1c-x6LmredrCj4GHI5vUgqfxMbZpXIiQ5YkY" } }
            );

            const cleaned = await cleanAndParse(response.data.text);
            setIsDepth(data.depth);
            dispatch(addData(cleaned));
            dispatch(setLatest(cleaned));
            setIsMapBarOpen(true); //to open concept map after receving data from backend
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("latest map data changed:", latestData);
        console.log("map data changed:", conceptMapData);
    }, [ latestData ]);

    return (
        <div className="flex justify-center w-full px-6 py-3 bg-black">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center gap-4 w-full max-w-4xl bg-gray-800 rounded-3xl px-4 py-2"
            >
                {/* Depth Selector with Tooltip */}
                <div className="flex flex-col text-sm text-gray-300 relative group">
                    <span className="font-medium text-gray-400 mb-1 cursor-help">
                        Depth
                    </span>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-0 hidden group-hover:block bg-gray-900 text-gray-200 text-xs rounded-md px-3 py-1 shadow-lg whitespace-nowrap">
                        Controls how detailed the concept map will be
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex bg-gray-700 rounded-lg overflow-hidden">
                        {[ 3, 4 ].map((num) => (
                            <label
                                key={num}
                                className="flex-1 text-center px-3 py-1 cursor-pointer hover:bg-gray-600 transition-colors"
                            >
                                <input
                                    type="radio"
                                    {...register("depth", { required: true })}
                                    value={num}
                                    className="hidden peer"
                                />
                                <span className="peer-checked:bg-blue-600 peer-checked:text-white block rounded-md px-2 py-1">
                                    {num}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Text Input */}
                <input
                    {...register("text", { required: true })}
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-700 h-11 rounded-3xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Send Button - circular FAB style */}
                <button
                    type="submit"
                    className="flex items-center justify-center w-11 h-11 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors shadow-md"
                >
                    <i className="ri-send-plane-fill text-white text-lg"></i>
                </button>
            </form>
        </div>
    );
};

export default MessageInput;
