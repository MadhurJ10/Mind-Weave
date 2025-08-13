import React from 'react'

const SideBar = ( {toggleButton , IsOpen} ) => {
    return (
        <div>
            <div className='sideabar w-[12rem] h-screen bg-blue-600 flex flex-col'>
                <button onClick={toggleButton}>close</button>
                <div className='w-full h-[3rem] bg-pink-400 flex justify-center'>
                    <h1 className='text'>Chats</h1>
                </div>
                <div className='fixed bottom-0'>
                    <h1>login</h1>
                </div>
            </div>
        </div>
    )
}

export default SideBar
