import React from 'react'
import MessageInput from './MessageInput'

const ChatArea = ({ IsSideBarOpen , setIsMapBarOpen , setIsDepth}) => {
    return (
        <div className='flex-grow'>
            <div className={`h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] transition-all duration-300 w-full flex flex-col`}>
                <div className="flex-grow">
                    {/* Chat messages will go here */}
                </div>
                <div className="p-4">
                    <MessageInput setIsMapBarOpen={setIsMapBarOpen} setIsDepth={setIsDepth}/>
                </div>
            </div>
        </div>
    )
}

export default ChatArea
