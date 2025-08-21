import React from 'react'
import Test3 from './Test3'
import Test4 from './Test4'
import Test5 from './Test5'

const MapBar = ({ onClose }) => {
  return (
    <div className='w-[40rem] h-full bg-white border-l shadow-lg'>
      <div className='p-4 border-b flex justify-between items-center'>
        <h2 className='font-semibold'>Map View</h2>
        <button
          onClick={onClose}
          className='bg-gray-200 p-2 rounded-full hover:bg-gray-300'
        >
          ✕
        </button>
      </div>
      <div className='p-4'>
        {/* Add your map content here */}
        <div className='h-[25rem] w-full bg-black'>

          {/* <Test3 /> */}
          <Test4 />
          {/* <Test5/> */}
        </div>
      </div>
    </div>
  )
}

export default MapBar
