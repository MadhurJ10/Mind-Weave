import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex fixed left-1/2 transform -translate-x-1/2 justify-between items-center gap-6 w-[20rem] sm:w-[36rem] bg-black/80 text-white px-6 py-3 top-6 z-50 rounded-xl border border-white/10 shadow-lg">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-8 h-8 text-white"
        >
          <path d="M18 7C15 7 12 12 12 12s-3-5-6-5-5 2-5 5 2 5 5 5 6-5 6-5 3 5 6 5 5-2 5-5-2-5-5-5z" />
        </svg>
        {/* <span className="text-xl font-bold">MindWeave</span> */}
      </div>


      {/* Menu */}
      <div className="flex gap-3 text-sm font-medium">
        <Link  to="login" className="flex justify-center items-center px-5 rounded-lg hover:bg-[#1A1A1A] transition-colors duration-300">Login</Link>
        {/* <button className="hover:text-gray-300">Blog</button>
        <button className="hover:text-gray-300">Services</button>
        <button className="hover:text-gray-300">Process</button>
        <button className="hover:text-gray-300">Pages</button> */}
      <Link to='/chat' className="bg-[#FF4533] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#FF2410] transition-colors duration-300 ">
        Start Mapping
      </Link>
    </div>
      </div>

  )
}

export default NavBar
