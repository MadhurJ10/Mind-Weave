import React from "react";

const ReviewCard = ({ review, name, img }) => {
  return (
    <div className="bg-[#111] text-white rounded-3xl p-6 flex flex-col gap-6 border border-[#252525] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform hover:scale-[1.02] duration-300">
      
      {/* Quote Section */}
      <div className="flex items-start">
        <p className="text-base leading-relaxed text-[#cfcfcf] font-normal">
          “{review}”
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 pt-2 border-t border-[#252525]">
        <img
          src={img}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover border border-[#2f2f2f]"
        />
        <div>
          <h4 className="font-semibold text-white text-lg">{name}</h4>
          <p className="text-sm text-[#959595] font-medium">
            Co-founder of Monday
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
