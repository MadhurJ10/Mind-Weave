import React from 'react';
import Card from '../components/Card';
import imgg from '../assets/imgg.png';
import imggg from '../assets/imggg.png';
import ReviewCard from '../components/ReviewCard';
import { Link } from 'react-router-dom';
import ClientsSection from '../components/ClientsSection';
import Footer from '../components/Footer';
import HeroSection from './HeroSection';
import HowItWorks from '../components/HowItWorks';
import ReviewsGrid from '../components/ReviewsGrid';

const review = {
  "Mindweave_Reviews": [
    {
      "name": "Rebecca Down",
      "date": "2022-03-17",
      "review": "MindWeave transformed the way I organize my thoughts. It turned my messy ideas into clear, structured maps that made complex projects easier to manage. I now approach every challenge with confidence and clarity, saving hours each week.",
      "img": { "src": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", "alt": "Smiling young woman with long hair" }
    },
    {
      "name": "Francesca Cox",
      "date": "2021-12-26",
      "review": "Using MindWeave feels like having a personal assistant for my brain. The AI-driven maps made brainstorming faster, smoother, and surprisingly fun. It gave me focus when I was overwhelmed, and now it’s an essential tool for my studies.",
      "img": { "src": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe", "alt": "Confident woman in glasses smiling" }
    },
    {
      "name": "Sarah Robinson",
      "date": "2021-11-30",
      "review": "MindWeave helped me break down complex topics into simple, visual pathways. It’s like zooming out on my thoughts and instantly seeing the bigger picture. I’ve used it for research, projects, and even daily planning—it never disappoints.",
      "img": { "src": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", "alt": "Smiling woman with curly hair" }
    },
    {
      "name": "Helen Brown",
      "date": "2021-09-02",
      "review": "I used MindWeave to prepare for a major presentation, and it completely changed my process. Instead of scattered notes, I had a beautifully structured flow of ideas. My audience said it was the clearest talk I’d ever given.",
      "img": { "src": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", "alt": "Professional woman smiling in office" }
    },
    {
      "name": "Anonymous",
      "review": "As a developer, MindWeave has become my go-to tool for planning projects. The ability to visually connect APIs, features, and workflows makes collaboration so much easier. My team now uses it regularly to align ideas before coding begins.",
      "img": { "src": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61", "alt": "Male software developer working at desk" }
    },
    {
      "name": "Anonymous",
      "review": "MindWeave is more than just a concept-mapping tool—it’s a creativity booster. I’ve used it for hackathon planning, project design, and even personal goals. Every time, it helps me cut through chaos and build something meaningful with clarity.",
      "img": { "src": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", "alt": "Young man smiling outdoors" }
    }
  ]
};

const Home = () => {
  return (
    <div className="min-h-full flex flex-col bg-black relative">

      {/* Hero Section with gradient and overlay */}
      <div className="relative h-screen w-full">
        <HeroSection className="absolute inset-0 z-0" /> {/* Gradient behind everything */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <ClientsSection />
          <div className="flex flex-col gap-[1.5rem] mt-8">
            <h1 className="text-6xl font-dm text-white">
              Visualize,Connect, <br /> and  <span className='font-instrumentitalic'>Expand</span>  Your Mind.
            </h1>
            <p className="text-[#8B8B8B] font-bold">
              Turn your messy brainstorms into organized, meaningful maps - MindWeave <br />
              makes thinking, connecting, and learning beautifully simple.
            </p>
            <Link
              className="self-center bg-[#FF4533] px-6 py-3 font-medium border border-[#9B170B] border-dashed rounded-lg hover:bg-[#FF2410] transition-colors duration-300"
              to="/chat"
            >
              Start Mapping
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="cards flex flex-col bg-black gap-[2rem] py-16 relative z-0">
        <div className='bg-[#111111] rounded-lg border border-[#252525] font-medium self-center px-5 py-1.5 text-white'>Features</div>
        <div className='flex flex-col gap-[2rem] sm:flex-row sm:gap-0'>
          <Card title={'AI Map Creation'} heading={'Generate structured, connected maps instantly from just a single topic.'} icon={'ri-mind-map text-white text-8xl'} />
          <Card title={'Ask AI'} heading={'Get instant explanations or discover hidden connections between nodes.'} icon={'ri-chat-ai-fill text-white text-8xl'} />
          <Card title={'Export & Share'} heading={'Download as PNG or PDF, or import into other tools for seamless use.'} icon={'ri-share-2-line text-white text-8xl'} />
        </div>
      </div>

      {/* Chaos to Clarity Section */}
      <div className='flex flex-col justify-center bg-black text-white py-16'>
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              From Chaos to <span className="text-red-500 font-instrumentitalic">Clarity</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-4">
              Ideas are scattered, disconnected, and hard to structure with traditional tools.
            </p>
            <p className="text-base lg:text-lg text-gray-300">
              MindWeave organizes your thoughts visually—helping you connect, simplify, and see the bigger picture.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img className="w-full max-w-md h-auto" src={imggg} alt="Visual representation of organized thoughts" />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className='bg-[#111111] rounded-lg border border-[#252525] font-medium self-center px-5 py-1.5 text-white'>How It Works</div>
      <HowItWorks/>

      {/* Testimonials */}
      <div className="Testimonial flex flex-col justify-center bg-black py-16 px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <div className='bg-[#111111] rounded-lg border border-[#252525] font-medium self-center px-5 py-1.5 text-white mb-10'>Testimonials</div>
          <h1 className='text-white text-[3.2rem] font-medium leading-[4rem]'>
            There's a reason people <br /> are <span className='font-instrumentitalic'>raving</span> about us.
          </h1>
        </div>
        <ReviewsGrid reviews={review.Mindweave_Reviews}/>
      </div>

      {/* Glowing Orb + Footer */}
      <div className="h-screen bg-black flex items-center justify-center flex-col relative">
        <div className="w-[400px] h-[500px] rounded-full 
          bg-[radial-gradient(circle,rgba(255,0,0,0.7)_0%,rgba(139,0,0,0.7)_25%,rgba(75,0,130,0.7)_50%,rgba(0,0,139,0.7)_75%,rgba(0,0,0,0.7)_100%)] 
          opacity-90 blur-3xl">
        </div>
        <Footer className="absolute bottom-0 left-0 right-0" />
      </div>

    </div>
  );
};

export default Home;
