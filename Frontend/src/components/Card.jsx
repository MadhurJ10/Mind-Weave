import React from 'react';

const Card = ({ title , heading , icon}) => {
  return (
    <div className="max-w-sm w-full mx-auto p-8 mt-[5rem] rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group ">
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
