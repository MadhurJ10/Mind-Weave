import React from 'react'
import Card from '../components/Card'
import imgg from '../assets/imgg.png'
import img from '../assets/img.png'
import imggg from '../assets/imggg.png'





const Home = () => {
  return (
    <div className='min-h-full flex flex-col'>
      <div className='Herosection bg-black text-white flex flex-col items-center h-lvh text-center justify-center '>
        <div className='flex flex-col gap-[1.5rem]'>
          <h1 className='text-5xl font-dm '>From scattered thoughts to structured clarity <br /> - that's MindWeave</h1>
          <p className='text-[#8B8B8B] font-bold'>Turn your messy brainstorms into organized, meaningful maps - MindWeave <br /> makes thinking, connecting, and learning beautifully simple.</p>
          <button className='self-center bg-[#FF4533] px-6 py-3 font-medium border border-[#9B170B] border-dashed rounded-lg hover:bg-[#FF2410]'>Start Mapping</button>
        </div>
      </div>
      <div className='cards flex flex-col bg-black gap-[2rem]'>
        <div className='bg-[#111111] rounded-lg border border-[#252525] font-medium self-center px-5 py-1.5  text-white'>Features</div>

        <div className='flex '>
          <Card title={'AI Map Creation'} heading={'Generate structured, connected maps instantly from just a single topic.'} icon={'ri-mind-map text-white text-8xl'} />
          <Card title={'Ask AI'} heading={'Get instant explanations or discover hidden connections between nodes.'} icon={'ri-chat-ai-fill text-white text-8xl'} />
          <Card title={'Export & Share'} heading={'Download as PNG or PDF, or import into other tools for seamless use.'} icon={'ri-share-2-line text-white text-8xl'} />
        </div>




      </div>
      <div className='flex  flex-col justify-center bg-black text-white'>
        {/* <h1 className='text-4xl'>From Chaos to Clarity</h1> */}
        <div className="flex flex-row bg-black text-white py-16 px-6">
          {/* Left Column - Text */}
          <div className="flex-1 flex flex-col justify-center max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              From Chaos to <span className="text-red-500 font-instrumentitalic">Clarity</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-4">
              Ideas are scattered, disconnected, and hard to structure with traditional tools.
            </p>
            <p className="text-base lg:text-lg text-gray-300">
              MindWeave organizes your thoughts visually—helping you connect, simplify,
              and see the bigger picture.
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="flex-1 flex justify-center items-center">
            <img className="w-[20rem] lg:w-[30rem] h-[20rem] lg:h-[30rem]" src={imggg} alt="" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home
