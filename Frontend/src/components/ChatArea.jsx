import React from 'react'
import MessageInput from './MessageInput'

const ChatArea = ({ IsSideBarOpen }) => {
    return (
        <div className='flex-grow'>
            <div className={`h-screen bg-green-700 transition-all duration-300 w-full flex flex-col`}>
                <div className="flex-grow">
                    {/* Chat messages will go here */}
                </div>
                <div className="p-4">
                    <MessageInput/>
                </div>
            </div>
        </div>
    )
}

export default ChatArea
