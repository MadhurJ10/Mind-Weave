import React, { useState } from 'react'
import { BsLayoutSidebar } from "react-icons/bs";


const SideBar = React.lazy(() => import('../components/SideBar'));
const ChatArea = React.lazy(() => import('../components/ChatArea'));
const MapBar = React.lazy(() => import('../components/MapBar'));


const Chat = () => {
  const [ IsSideBarOpen, setIsSideBarOpen ] = React.useState(true);
  const [ IsMapBarOpen, setIsMapBarOpen ] = React.useState(false);
  const [ IsDepth, setIsDepth ] = React.useState(null);

  function toggleButton() {
    setIsSideBarOpen(prev => !prev)
  }

  function toggleMapBar() {
    setIsMapBarOpen(prev => !prev)
  }

  return (
    <div className='flex w-full min-h-screen'>
      <div className='flex-shrink-0  text-white bg-[#121212] border-r border-[#9B170B] border-dashed'>
        {IsSideBarOpen && <SideBar toggleButton={toggleButton} IsOpen={IsSideBarOpen} setIsDepth={setIsDepth} setIsMapBarOpen={setIsMapBarOpen}/>}
        {!IsSideBarOpen && <button className='p-2 mt-2 text-2xl' onClick={toggleButton}><BsLayoutSidebar/></button>}
      </div>
      <div className='flex flex-1 relative'>
        <ChatArea IsSideBarOpen={IsSideBarOpen} IsMapBarOpen={IsMapBarOpen} setIsMapBarOpen={setIsMapBarOpen} setIsDepth={setIsDepth} />
        <div className='absolute right-0 top-0 h-full'>
          {IsMapBarOpen ? (
            <MapBar onClose={toggleMapBar} setIsDepth={setIsDepth} IsDepth={IsDepth} />
          ) : (
            <button
              className='backdrop-blur-md bg-red-600/80 rounded-full shadow-lg text-white p-2 '
              onClick={toggleMapBar}
            >
              Open Map
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Chat
