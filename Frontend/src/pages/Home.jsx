import React from 'react'
import Card from '../components/Card'
import imgg from '../assets/imgg.png'
import img from '../assets/img.png'
import imggg from '../assets/imggg.png'
import ReviewCard from '../components/ReviewCard'
import { Link } from 'react-router-dom'
import ClientsSection from '../components/ClientsSection'




const review = {
  "Mindweave_Reviews": [
    {
      "name": "Rebecca Down",
      "date": "2022-03-17",
      "review": "MindWeave transformed the way I organize my thoughts. It turned my messy ideas into clear, structured maps that made complex projects easier to manage. I now approach every challenge with confidence and clarity, saving hours each week.",
      "img": {
        "src": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        "alt": "Smiling young woman with long hair"
      }
    },
    {
      "name": "Francesca Cox",
      "date": "2021-12-26",
      "review": "Using MindWeave feels like having a personal assistant for my brain. The AI-driven maps made brainstorming faster, smoother, and surprisingly fun. It gave me focus when I was overwhelmed, and now it’s an essential tool for my studies.",
      "img": {
        "src": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        "alt": "Confident woman in glasses smiling"
      }
    },
    {
      "name": "Sarah Robinson",
      "date": "2021-11-30",
      "review": "MindWeave helped me break down complex topics into simple, visual pathways. It’s like zooming out on my thoughts and instantly seeing the bigger picture. I’ve used it for research, projects, and even daily planning—it never disappoints.",
      "img": {
        "src": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        "alt": "Smiling woman with curly hair"
      }
    },
    {
      "name": "Helen Brown",
      "date": "2021-09-02",
      "review": "I used MindWeave to prepare for a major presentation, and it completely changed my process. Instead of scattered notes, I had a beautifully structured flow of ideas. My audience said it was the clearest talk I’d ever given.",
      "img": {
        "src": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        "alt": "Professional woman smiling in office"
      }
    },
    {
      "name": "Anonymous",
      "review": "As a developer, MindWeave has become my go-to tool for planning projects. The ability to visually connect APIs, features, and workflows makes collaboration so much easier. My team now uses it regularly to align ideas before coding begins.",
      "img": {
        "src": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
        "alt": "Male software developer working at desk"
      }
    },
    {
      "name": "Anonymous",
      "review": "MindWeave is more than just a concept-mapping tool—it’s a creativity booster. I’ve used it for hackathon planning, project design, and even personal goals. Every time, it helps me cut through chaos and build something meaningful with clarity.",
      "img": {
        "src": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
        "alt": "Young man smiling outdoors"
      }
    }
  ]
}






const Home = () => {
  return (
    <div className='min-h-full flex flex-col bg-black'>
      <div className='Herosection bg-black text-white flex flex-col items-center h-lvh text-center justify-center mt-6'>
        <ClientsSection />
        <div className='flex flex-col gap-[1.5rem]'>
          <h1 className='text-6xl font-dm '>From scattered thoughts to structured clarity <br /> - that's MindWeave</h1>
          <p className='text-[#8B8B8B] font-bold'>Turn your messy brainstorms into organized, meaningful maps - MindWeave <br /> makes thinking, connecting, and learning beautifully simple.</p>
          {/* <button className='self-center bg-[#FF4533] px-6 py-3 font-medium border border-[#9B170B] border-dashed rounded-lg hover:bg-[#FF2410]'>Start Mapping</button> */}
          <Link className='self-center bg-[#FF4533] px-6 py-3 font-medium border border-[#9B170B] border-dashed rounded-lg hover:bg-[#FF2410] transition-colors duration-300' to="/chat">Start Mapping</Link>
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
        <div className="flex flex-row bg-black text-white py-16 px-6 gap-[20rem]">
          {/* Left Column - Text */}
          <div className="flex-1 flex flex-col justify-center ">
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
        <div className='bg-[#111111] rounded-lg border border-[#252525] font-medium self-center px-5 py-1.5  text-white'>How It Works </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-[6rem]">
        

        {/* Card 1 */}
        <div className="flex flex-col justify-center rounded-2xl h-[15rem] bg-[linear-gradient(45deg,hsl(0_0%_5%)_61%,hsl(17_18%_8%)_79%,hsl(17_24%_10%)_85%,hsl(16_29%_12%)_88%,hsl(16_33%_14%)_91%,hsl(16_36%_16%)_92%,hsl(16_39%_18%)_93%,hsl(16_41%_20%)_94%,hsl(16_43%_23%)_95%,hsl(16_44%_25%)_95%,hsl(16_45%_27%)_96%,hsl(16_47%_29%)_96%,hsl(16_48%_32%)_97%,hsl(16_49%_34%)_97%,hsl(16_49%_36%)_98%,hsl(16_50%_39%)_98%,hsl(16_51%_41%)_99%,hsl(16_51%_43%)_99%,hsl(16_52%_46%)_100%)] p-8 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-3">Enter Your Idea</h3>
          <p className="text-[#8B8B8B] text-[1rem]">
            Start with a single topic or concept. Just type it in and let the system do the rest.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center rounded-2xl bg-[linear-gradient(315deg,hsl(0_0%_5%)_11%,hsl(214_21%_11%)_57%,hsl(212_32%_15%)_74%,hsl(211_40%_20%)_84%,hsl(210_47%_25%)_91%,hsl(208_53%_30%)_96%,hsl(207_59%_34%)_100%,hsl(206_66%_38%)_101%,hsl(205_74%_42%)_100%)] p-8 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-3">AI Expands Connections</h3>
          <p className="text-[#8B8B8B] text-[1rem]">
            MindWeave instantly generates related concepts and shows how they connect.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center rounded-2xl h-[15rem] bg-[linear-gradient(45deg,hsl(11_52%_43%)_0%,hsl(11_45%_41%)_0%,hsl(11_40%_39%)_0%,hsl(11_34%_37%)_0%,hsl(11_29%_35%)_0%,hsl(11_25%_32%)_1%,hsl(11_21%_29%)_2%,hsl(11_17%_26%)_3%,hsl(11_13%_22%)_4%,hsl(11_9%_18%)_7%,hsl(11_6%_14%)_10%,hsl(11_3%_10%)_15%,hsl(0_0%_5%)_50%,hsl(206_4%_11%)_85%,hsl(206_8%_16%)_90%,hsl(206_12%_20%)_93%,hsl(206_17%_25%)_96%,hsl(206_22%_28%)_97%,hsl(206_27%_32%)_98%,hsl(206_34%_35%)_99%,hsl(206_40%_37%)_100%,hsl(206_48%_40%)_100%,hsl(206_56%_41%)_100%,hsl(206_65%_42%)_100%,hsl(206_76%_43%)_100%)] md:col-span-2 p-8 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-3">Explore & Share</h3>
          <p className="text-[#8B8B8B] text-[1rem]">
            Refine your map, zoom in on details, and share or export it with your team.
          </p>
        </div>

      </div>

      <div className="Testimonial flex flex-col justify-center bg-black py-16 px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center">
          <div className='bg-[#111111] rounded-lg border border-[#252525] font-medium self-center px-5 py-1.5 text-white mb-10'>Testimonials</div>
          <h1 className='text-white text-[3.2rem] font-medium leading-[4rem]'>There's a reason people <br /> are <span className='font-instrumentitalic'>raving</span> about us.</h1>
        </div>

        {/* Grid of ReviewCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[4rem]">
          {review.Mindweave_Reviews.map((item, index) => (
            <ReviewCard key={index} name={item.name} review={item.review} img={item.img.src} />
          ))}
        </div>
      </div>

      <div className="h-screen bg-black flex items-center justify-center flex-col relative">
        {/* Glowing orb */}
        <div className="w-[500px] h-[500px] rounded-full 
                  bg-[radial-gradient(circle,rgba(255,0,0,0.7)_0%,rgba(139,0,0,0.7)_25%,rgba(75,0,130,0.7)_50%,rgba(0,0,139,0.7)_75%,rgba(0,0,0,0.7)_100%)] 
                  opacity-90 blur-3xl">
        </div>

        {/* Footer overlay */}

      </div>



    </div>
  )
}

export default Home
