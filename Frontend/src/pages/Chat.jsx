import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatArea from '../components/ChatArea';


const Chat = () => {
  const [ IsSideBarOpen, setIsSideBarOpen ] = React.useState(true);

  function toggleButton() {
    setIsSideBarOpen(prev => !prev)
    console.log('hehe')
  }

  return (
    <div className='flex'>
      {IsSideBarOpen && <SideBar toggleButton={toggleButton} IsOpen={IsSideBarOpen} />}
      {!IsSideBarOpen && <button onClick={toggleButton}>open</button>}
      <ChatArea IsSideBarOpen={IsSideBarOpen} />

    </div>
  )
}

export default Chat
