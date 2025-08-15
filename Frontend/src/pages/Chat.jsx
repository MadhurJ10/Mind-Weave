import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatArea from '../components/ChatArea';
import MapBar from '../components/MapBar';

const Chat = () => {
  const [ IsSideBarOpen, setIsSideBarOpen ] = React.useState(true);
  const [ IsMapBarOpen, setIsMapBarOpen ] = React.useState(true);
  
  function toggleButton() {
    setIsSideBarOpen(prev => !prev)
  }

  function toggleMapBar() {
    setIsMapBarOpen(prev => !prev)
  }

  return (
    <div className='flex w-full min-h-screen'>
      <div className='flex-shrink-0'>
        {IsSideBarOpen && <SideBar toggleButton={toggleButton} IsOpen={IsSideBarOpen} />}
        {!IsSideBarOpen && <button className='p-2' onClick={toggleButton}>open</button>}
      </div>
      <div className='flex flex-1 relative'>
        <ChatArea IsSideBarOpen={IsSideBarOpen} />
        <div className='absolute right-0 top-0 h-full'>
          {IsMapBarOpen ? (
            <MapBar onClose={toggleMapBar} />
          ) : (
            <button 
              className='bg-blue-500 text-white p-2 rounded-l-md'
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
