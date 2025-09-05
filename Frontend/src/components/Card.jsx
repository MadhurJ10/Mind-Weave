import React from "react";

const Card = ({ title, heading, icon }) => {
  return (
    <div className="max-w-sm w-full mx-auto p-6 bg-[#0D0D0D] rounded-3xl border border-[#252525]">
      
      {/* Icon */}
      <div className="flex items-center justify-center mb-6">
        <i className={`${icon} text-6xl text-white`}></i>
      </div>

      {/* Title */}
      <p className="text-xl font-bold text-white text-center mb-2">
        {title}
      </p>

      {/* Heading */}
      <p className="text-sm text-neutral-400 text-center leading-relaxed">
        {heading}
      </p>
    </div>
  );
};

export default Card;
