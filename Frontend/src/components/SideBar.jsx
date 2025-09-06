import React, { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { useDispatch, useSelector } from "react-redux";
import { addData, setLatest } from "../features/conceptMapSlice";
import { BsLayoutSidebar } from "react-icons/bs";

const SideBar = ({ toggleButton, IsOpen, setIsDepth, setIsMapBarOpen }) => {
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const conceptMapData = useSelector((state) => state.conceptMap.data);
  const latestData = useSelector((state) => state.conceptMap.latest);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await ApiClient.post("map/get");
        setHistory(res.data.getMap || []);
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };
    fetchHistory();
  }, []);

  function submitt(item) {
    const snenene = item.data.data;
    setIsDepth(item.depth);
    dispatch(addData(snenene));
    dispatch(setLatest(snenene));
    setIsMapBarOpen(true);
  }

  async function deleteMap(item) {
    try {
      await ApiClient.post("map/delete", { id: item.id });
      setHistory((prev) => prev.filter((h) => h.id !== item.id)); // instantly update UI
    } catch (err) {
      console.error("Error deleting map:", err);
    }
  }

  return (
    <div
      className="sidebar w-[11rem] h-screen 
                 bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] 
                 flex flex-col text-gray-200 border-r border-red-600/30"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
        <h1 className="text-sm font-medium tracking-wide text-gray-300">
          Chats
        </h1>
        <button
          onClick={toggleButton}
          className="p-1 rounded-md hover:bg-zinc-800 transition"
        >
          <BsLayoutSidebar className="text-red-500 text-lg" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 p-2 space-y-2 overflow-y-auto text-sm custom-scrollbar">
        {history.length > 0 ? (
          history.map((item) => (
            <div
              key={item.id}
              onClick={() => submitt(item)}
              className="p-2 rounded-md bg-zinc-900/60 hover:bg-zinc-800 cursor-pointer 
                         flex items-center justify-between transition"
            >
              <span className="truncate">{item.title}</span>
              <button
                className="p-1 rounded-md text-gray-400 
                           hover:text-red-500 hover:bg-red-500/10 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteMap(item);
                }}
              >
                <i className="ri-delete-bin-7-line text-sm"></i>
              </button>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-500 text-center mt-4">
            No chats found
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800">
        <h1
          className="text-center py-2 text-sm bg-red-600 hover:bg-red-700 
                     text-white cursor-pointer transition"
        >
          Login
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
