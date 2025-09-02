import React from "react";

const ClientsSection = () => {
  const clients = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/65.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/71.jpg",
  ];

  return (
    <div className="flex items-center  bg-black text-white p-4 rounded-xl">
      {/* Profile Images */}
      <div className="flex -space-x-3">
  {clients.map((img, i) => (
    <img
      key={i}
      src={img}
      alt="client"
      className="w-10 h-10 rounded-full border-2 border-black object-cover
                 transform transition-transform duration-300 
                 hover:scale-110 hover:-translate-y-1"
    />
  ))}
</div>


      {/* Stars + Text (stacked vertically) */}
      <div className="flex flex-col items-start ">
        {/* Stars */}
        <div className="flex text-yellow-400">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <i key={i} className="ri-star-fill text-[1rem] text-white"></i>
            ))}
        </div>
        {/* Text below */}
        <p className="text-[#8B8B8B] text-sm font-medium">115+ happy clients</p> 
      </div>
    </div>
  );
};

export default ClientsSection;
