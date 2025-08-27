import React from 'react';

const Card = ({ title, heading, icon }) => {
  return (
    <div className="max-w-sm w-full mx-auto p-8 bg-[#0D0D0D] rounded-3xl border border-[#252525]  ">
      <div className=' text-white flex items-center justify-center mb-[3rem] tex'>
        <i className={icon}></i>
        {/* <i className="ri-chat-ai-fill text-white text-7xl"></i> */}

      </div>
      <p className="text-lg font-semibold text-gray-800 dark:text-white py-2">
        {title}
      </p>
      <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
        {heading}
      </p>
    </div>
  );
}

export default Card;
