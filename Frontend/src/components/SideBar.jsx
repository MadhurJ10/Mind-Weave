import React from 'react'

const SideBar = ({ toggleButton, IsOpen }) => {
  return (
    <div>
      <div className="sidebar w-[12rem] h-screen 
                      bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] 
                      flex flex-col text-gray-200 border-r border-red-600/40 shadow-lg">

        {/* Close Button */}
        <button 
          onClick={toggleButton} 
          className="self-end m-2 px-3 py-1 text-sm rounded-md 
                     bg-red-600 hover:bg-red-700 transition text-white">
          Close
        </button>

        {/* Header */}
        <div className="w-full h-[3rem] bg-red-600 flex items-center justify-center shadow-md">
          <h1 className="text-lg font-semibold tracking-wide">Chats</h1>
        </div>

        {/* Body Placeholder */}
        <div className="flex-1 p-3 space-y-2 overflow-y-auto">
          <div className="p-2 rounded-md bg-zinc-900/60 hover:bg-zinc-800 cursor-pointer">
            Sample Chat 1
          </div>
          <div className="p-2 rounded-md bg-zinc-900/60 hover:bg-zinc-800 cursor-pointer">
            Sample Chat 2
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 w-[12rem] border-t border-zinc-800">
          <h1 className="text-center py-3 bg-red-600 hover:bg-red-700 text-white cursor-pointer">
            Login
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SideBar
