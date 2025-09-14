import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addData, setLatest } from "../features/conceptMapSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ApiClient from "../services/ApiClient";
import { ChatContext } from '../context/ChatProvider'



const MessageInput = ({ setIsMapBarOpen, setIsDepth }) => {
    const { messages, setMessages } = useContext(ChatContext);
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const conceptMapData = useSelector((state) => state.conceptMap.data);
    const latestData = useSelector((state) => state.conceptMap.latest);

    async function cleanAndParse(jsonString) {
        const cleared = jsonString.replace(/```json|```/g, "").trim();
        return JSON.parse(cleared);
    }

    const onSubmit = async (data) => {
        setMessages((prev) => [ ...prev, { sender: "user", text: data.text } ]);
        try {
            const responseIntro = await ApiClient.post('map/intro', {
                content: data.text
            })
            // console.log(responseIntro.data.text)
            setMessages((prev) => [ ...prev, { sender: "bot", text: responseIntro.data.text } ]);

            const response = await ApiClient.post(
                "map/create",
                {
                    content: data.text,
                    depth: data.depth,
                }
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
        <div className="flex justify-center w-full px-6 py-3 ">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center gap-4 w-full max-w-4xl 
             bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] 
             rounded-3xl px-4 py-2 shadow-lg border border-zinc-800"
            >
                {/* Depth Selector */}
                <div className="flex flex-col text-sm text-gray-400 relative group">
                    <span className="font-medium mb-1 cursor-help">Depth</span>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-0 hidden group-hover:block 
                    bg-black/90 text-gray-200 text-xs rounded-md 
                    px-3 py-1 shadow-lg whitespace-nowrap border border-red-600/40">
                        Controls how detailed the concept map will be
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex bg-[#1f1f1f] rounded-xl overflow-hidden border border-red-600/40">
                        {[ 3, 4 ].map((num) => (
                            <label
                                key={num}
                                className="flex-1 text-center px-3 py-1 cursor-pointer transition-colors"
                            >
                                <input
                                    type="radio"
                                    {...register("depth", { required: true })}
                                    value={num}
                                    className="hidden peer"
                                />
                                <span className="peer-checked:bg-red-600 peer-checked:text-white 
                           block rounded-md px-2 py-1 transition-all
                           hover:bg-red-700 hover:text-white">
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
                    className="flex-1 bg-transparent h-11 rounded-3xl px-4 
               text-white placeholder-gray-500 
               border border-zinc-700 
               focus:outline-none focus:ring-2 focus:ring-red-500 
               focus:border-red-600 transition-all"
                />

                {/* Send Button */}
                <button
                    type="submit"
                    className="flex items-center justify-center w-11 h-11 
               bg-red-600 rounded-full 
               hover:scale-105 hover:shadow-[0_0_10px_#ff0000] 
               transition-all"
                >
                    <i className="ri-send-plane-fill text-white text-lg"></i>
                </button>
            </form>

        </div>
    );
};

export default MessageInput;
