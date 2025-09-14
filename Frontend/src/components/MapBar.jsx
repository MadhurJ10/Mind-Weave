import React, { useContext } from 'react'
import Test3 from './Test3'
import Test4 from './Test4'
import Test5 from './Test5'
// import {} from 'module'
import {ChatContext} from '../context/ChatProvider'


const MapBar = ({ onClose, setIsDepth, IsDepth }) => {
  const {messages} = useContext(ChatContext);
  // console.log(messages)
  return (
    <div className="w-[40rem] h-full bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] 
                    border-l border-red-600/40 shadow-xl flex flex-col text-gray-200">

      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/60">
        <h2 className="font-semibold text-lg tracking-wide text-red-500">Map View</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition text-white shadow-md"
        >
          ✕
        </button>
      </div>

      {/* Map Container */}
      <div className="p-4 flex-1">
        <div className="h-[25rem] w-full rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
          {IsDepth == 3 && <Test3 IsDepth={IsDepth}/>}
          {IsDepth == 4 && <Test4 IsDepth={IsDepth}/>}
          {/* {IsDepth == 5 && <Test5 />} */}
        </div>
        {/* <button>ehhe</button> */}
      </div>
    </div>
  )
}

export default MapBar
