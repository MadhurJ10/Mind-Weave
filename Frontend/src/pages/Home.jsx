import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import imggg from '../assets/imggg.png';
// import ClientsSection from '../components/ClientsSection';
// import Footer from '../components/Footer';
// import HeroSection from './HeroSection';
// import HowItWorks from '../components/HowItWorks';
// import ReviewsGrid from '../components/ReviewsGrid';
// import Card from '../components/Card';


const ClientsSection = React.lazy(() => import('../components/ClientsSection'));
const Footer = React.lazy(() => import('../components/Footer'));
const HeroSection = React.lazy(() => import('./HeroSection'));
const HowItWorks = React.lazy(() => import('../components/HowItWorks'));
const ReviewsGrid = React.lazy(() => import('../components/ReviewsGrid'));
const Card = React.lazy(() => import('../components/Card'));

const Home = () => {
  return (
    <div className="min-h-full flex flex-col bg-black relative">

      {/* Hero Section with gradient and overlay */}
      <div className="relative h-screen w-full">
        <HeroSection className="absolute inset-0 z-0" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <ClientsSection />
          <div className="flex flex-col gap-[1.5rem] mt-8">
            <motion.h1
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{ duration:2,  ease: "easeIn" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dm text-white leading-snug">
              Visualize, Connect, <br /> and <span className="font-instrumentitalic">Expand</span> Your Mind.
            </motion.h1>

            <p className="text-[#8B8B8B] font-bold">
              Turn your messy brainstorms into organized, meaningful maps - MindWeave <br />
              makes thinking, connecting, and learning beautifully simple.
            </p>
            <Link
              className="self-center bg-[#FF4533] hover:bg-[#FF2410] transition-colors duration-300 px-6 py-3 font-medium border border-[#9B170B] border-dashed rounded-lg "
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
      <HowItWorks />

      {/* Testimonials */}
      <div className="Testimonial flex flex-col justify-center bg-black py-16 px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <div className='bg-[#111111] rounded-lg border border-[#252525] font-medium self-center px-5 py-1.5 text-white mb-10'>Testimonials</div>
          <h1 className='text-white text-[3.2rem] font-medium leading-[4rem]'>
            There's a reason people <br /> are <span className='font-instrumentitalic'>raving</span> about us.
          </h1>
        </div>
        <ReviewsGrid />
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
