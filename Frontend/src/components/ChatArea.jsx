import React from 'react'

const ChatArea = ({ IsSideBarOpen }) => {
    return (
        <div>
            <div className={`chatarea h-screen bg-green-700 transition-all duration-300 
          ${IsSideBarOpen ? 'w-[68rem]' : 'w-full'}`}>
            
            </div>
        </div>
    )
}

export default ChatArea
