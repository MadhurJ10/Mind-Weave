import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#000000] text-white flex items-center justify-center min-h-screen">
      <div className="text-center flex flex-col gap-6">
        <h1 className="text-6xl font-dm [word-spacing:-0.1em] leading-snug">
          From scattered <span className='font-instrumentitalic font-light'>thoughts</span> to structured clarity
          <br />
          <span className="block text-center">— that's MindWeave.</span>
        </h1>
        <p className='text-[#8B8B8B] font-dm font-bold'>Turn your messy brainstorms into organized, meaningful maps — MindWeave <br /> makes thinking, connecting, and learning beautifully simple.</p>
      </div>
    </div>
  )
}

export default Home
