import React from "react";

const ReviewCard = ({ review, name, img }) => {
    return (
        <div className="bg-[#111] text-white rounded-4xl p-6 flex flex-col gap-6 border border-[#252525]">
            {/* Red Dot + Quote */}
            <div className="flex items-start gap-2">
                <p className=" text-sm leading-relaxed text-[#959595] font-medium">
                    {review}
                </p>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-3">
                <img
                    src={img}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-semibold text-white">{name}</h4>
                    <p className="text-sm text-[#959595] font-medium">Co-founder of Monday</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
