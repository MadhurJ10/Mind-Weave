import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatArea from '../components/ChatArea';

const Chat = () => {
  const [ IsSideBarOpen, setIsSideBarOpen ] = React.useState(true);

  function toggleButton() {
    setIsSideBarOpen(prev => !prev)
  }

  return (
    <div className='flex w-full min-h-screen'>
      <div className='flex-shrink-0'>
        {IsSideBarOpen && <SideBar toggleButton={toggleButton} IsOpen={IsSideBarOpen} />}
        {!IsSideBarOpen && <button className='p-2' onClick={toggleButton}>open</button>}
      </div>
      <ChatArea IsSideBarOpen={IsSideBarOpen} />
    </div>
  )
}

export default Chat
