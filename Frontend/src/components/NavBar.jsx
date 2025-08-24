import React from 'react'

const NavBar = () => {
  return (
    <div className="flex fixed left-1/2 transform -translate-x-1/2 justify-between items-center 
                    w-[22rem] bg-white/10 backdrop-blur-sm text-white p-4 top-0 mt-2.5 z-50 
                    rounded-2xl sm:w-[70rem] border-[0.001rem]">
      <h1>Mind Weave</h1>
      <h1>Get started</h1>
    </div>
  )
}

export default NavBar
