import React, { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { useDispatch, useSelector } from "react-redux";
import { addData, setLatest } from "../features/conceptMapSlice";


const SideBar = ({ toggleButton, IsOpen, setIsDepth, setIsMapBarOpen }) => {
  const [ history, setHistory ] = useState([]);
  const dispatch = useDispatch();
  const conceptMapData = useSelector((state) => state.conceptMap.data);
  const latestData = useSelector((state) => state.conceptMap.latest);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await ApiClient.post("map/get");
        console.log(res.data); // check API response
        setHistory(res.data.getMap || []); // store in state
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    fetchHistory();
  }, []);

  function submitt(item) {
    console.log(`id = ${item.id}`)
    console.log(item.data)
    const snenene = item.data.data
    setIsDepth(item.depth);
    dispatch(addData(snenene));
    dispatch(setLatest(snenene));
    setIsMapBarOpen(true);
  }

  return (
    <div>
      <div
        className="sidebar w-[12rem] h-screen 
                      bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] 
                      flex flex-col text-gray-200 border-r border-red-600/40 shadow-lg"
      >
        {/* Close Button */}
        <button
          onClick={toggleButton}
          className="self-end m-2 px-3 py-1 text-sm rounded-md 
                     bg-red-600 hover:bg-red-700 transition text-white"
        >
          Close
        </button>

        {/* Header */}
        <div className="w-full h-[3rem] bg-red-600 flex items-center justify-center shadow-md">
          <h1 className="text-lg font-semibold tracking-wide">Chats</h1>
        </div>

        {/* Body */}
        <div className="flex-1 p-3 space-y-2 overflow-y-auto">
          {history.length > 0 ? (
            history.map((item) => (
              <div
                key={item.id}
                onClick={() => submitt(item)}
                className="p-2 rounded-md bg-zinc-900/60 hover:bg-zinc-800 cursor-pointer"
              >
                {item.title} {/* show title, or item.data.obj if you prefer */}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400">No chats found</p>
          )}
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 w-[12rem] border-t border-zinc-800">
          <h1 className="text-center py-3 bg-red-600 hover:bg-red-700 text-white cursor-pointer">
            Login
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
