import React from "react";

const Features = () => {
  const features = [
    {
      title: "AI Map Creation",
      desc: "Generate concept maps instantly with AI-driven layouts.",
      icon: "ri-brain-line",
    },
    {
      title: "Ask AI",
      desc: "Chat with AI inside your workspace for instant insights.",
      icon: "ri-chat-3-line",
    },
    {
      title: "Export & Share",
      desc: "Export maps as images or PDFs and share with ease.",
      icon: "ri-share-forward-line",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-16 tracking-tight">
          Features that empower your workflow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center 
                         transition-transform duration-300 hover:-translate-y-2"
            >
              <i
                className={`${f.icon} text-4xl text-red-400 mb-6`}
              ></i>
              <h3 className="text-lg font-medium mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[16rem]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
