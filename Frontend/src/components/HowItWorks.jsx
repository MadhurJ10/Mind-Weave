import React from 'react'

const HowItWorks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-[2rem] sm:p-[6rem]">
            <div className="flex flex-col justify-center rounded-2xl h-[15rem] p-8 text-center shadow-lg 
          bg-[radial-gradient(circle_600px_at_top_left,rgba(30,90,800,0.25),transparent_50%),radial-gradient(circle_600px_at_bottom_right,rgba(30,90,200,0.15),transparent_50%)] 
          border border-[#252525]">
                <h3 className="text-3xl font-bold text-white mb-3">Enter Your Idea</h3>
                <p className="text-[#8B8B8B] text-[1rem]">
                    Start with a single topic or concept. Just type it in and let the system do the rest.
                </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl h-[15rem] p-8 text-center shadow-lg 
          bg-[radial-gradient(circle_600px_at_top_right,rgba(165,79,46,0.3),transparent_40%),radial-gradient(circle_600px_at_bottom_left,rgba(165,79,46,0.15),transparent_50%)] 
          border border-[#252525]">
                <h3 className="text-3xl font-bold text-white mb-3">AI Expands Connections</h3>
                <p className="text-[#8B8B8B] text-[1rem]">
                    MindWeave instantly generates related concepts and shows how they connect.
                </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl h-[15rem] bg-[radial-gradient(circle_600px_at_top_right,rgba(0,100,255,0.25),transparent_40%),radial-gradient(circle_600px_at_bottom_left,rgba(255,50,0,0.25),transparent_40%)] md:col-span-2 p-8 text-center shadow-lg border border-[#252525]">
                <h3 className="text-3xl font-bold text-white mb-3">Explore & Share</h3>
                <p className="text-[#8B8B8B] text-[1rem]">
                    Refine your map, zoom in on details, and share or export it with your team.
                </p>
            </div>
        </div>
    )
}

export default HowItWorks
