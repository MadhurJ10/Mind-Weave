import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen   overflow-hidden bg-black  top-[20rem]">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 z-0 ">
        {/* Top-center warm light */}
        <div
          className="absolute top-[10%] left-[50%] h-[350px] w-[350px] -translate-x-1/2 
                     rounded-full bg-orange-400 opacity-40 blur-3xl"
        />
        {/* Center blue light */}
        <div
          className="absolute top-[50%] left-[50%] h-[450px] w-[600px] -translate-x-1/2 
                     -translate-y-1/2 rounded-full bg-cyan-400 opacity-25 blur-3xl"
        />
        {/* Left red light */}
        <div
          className="absolute top-[15%] left-[15%] h-[200px] w-[200px] rounded-full
                     bg-red-500 opacity-30 blur-3xl"
        />
        {/* Bottom-right purple/dark light */}
        <div
          className="absolute  bottom-[10%] right-[10%] h-[300px] w-[300px] rounded-full
                     bg-indigo-700 opacity-30 blur-3xl"
        />
      </div>

      {/* UI Content */}
      <div className="relative z-10 flex h-full flex-col items-center">
        {/* Navigation */}
        <nav className="flex w-full items-center justify-between p-8">
          {/* Logo Dot */}
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
          </div>
        </nav>

        {/* You can add more hero content here */}
      </div>
    </div>
  );
};

export default HeroSection;