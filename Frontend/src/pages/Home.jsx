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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black">
  
  {/* Card 1 */}
  <div className="rounded-2xl  bg-[linear-gradient(45deg,hsl(0_0%_5%)_61%,hsl(17_18%_8%)_79%,hsl(17_24%_10%)_85%,hsl(16_29%_12%)_88%,hsl(16_33%_14%)_91%,hsl(16_36%_16%)_92%,hsl(16_39%_18%)_93%,hsl(16_41%_20%)_94%,hsl(16_43%_23%)_95%,hsl(16_44%_25%)_95%,hsl(16_45%_27%)_96%,hsl(16_47%_29%)_96%,hsl(16_48%_32%)_97%,hsl(16_49%_34%)_97%,hsl(16_49%_36%)_98%,hsl(16_50%_39%)_98%,hsl(16_51%_41%)_99%,hsl(16_51%_43%)_99%,hsl(16_52%_46%)_100%)] p-8 text-center shadow-lg">
    <h3 className="text-2xl font-bold text-white mb-3">Meta Ads</h3>
    <p className="text-gray-300">
      Our team has decades of combined experience creating winning Facebook & Instagram campaigns.
    </p>
  </div>

  {/* Card 2 */}
  <div className="rounded-2xl bg-[linear-gradient(315deg,hsl(0_0%_5%)_11%,hsl(214_21%_11%)_57%,hsl(212_32%_15%)_74%,hsl(211_40%_20%)_84%,hsl(210_47%_25%)_91%,hsl(208_53%_30%)_96%,hsl(207_59%_34%)_100%,hsl(206_66%_38%)_101%,hsl(205_74%_42%)_100%)] p-8 text-center shadow-lg">
    <h3 className="text-2xl font-bold text-white mb-3">Google Ads</h3>
    <p className="text-gray-300">
      Put your products in front of active buyers and beat out the competition with expert Google Shopping services.
    </p>
  </div>

  {/* Card 3 */}
  <div className="rounded-2xl bg-[linear-gradient(45deg,hsl(11_52%_43%)_0%,hsl(11_45%_41%)_0%,hsl(11_40%_39%)_0%,hsl(11_34%_37%)_0%,hsl(11_29%_35%)_0%,hsl(11_25%_32%)_1%,hsl(11_21%_29%)_2%,hsl(11_17%_26%)_3%,hsl(11_13%_22%)_4%,hsl(11_9%_18%)_7%,hsl(11_6%_14%)_10%,hsl(11_3%_10%)_15%,hsl(0_0%_5%)_50%,hsl(206_4%_11%)_85%,hsl(206_8%_16%)_90%,hsl(206_12%_20%)_93%,hsl(206_17%_25%)_96%,hsl(206_22%_28%)_97%,hsl(206_27%_32%)_98%,hsl(206_34%_35%)_99%,hsl(206_40%_37%)_100%,hsl(206_48%_40%)_100%,hsl(206_56%_41%)_100%,hsl(206_65%_42%)_100%,hsl(206_76%_43%)_100%)] md:col-span-2 p-8 text-center shadow-lg">
    <h3 className="text-2xl font-bold text-white mb-3">TikTok Ads</h3>
    <p className="text-gray-300">
      With over 800 million monthly users, TikTok is the strongest link between your brand and the next generation.
    </p>
  </div>

</div>

    </div>
  )
}

export default Home
