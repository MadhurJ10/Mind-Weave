import React from "react";
import ApiClient from "../services/ApiClient";

const MapSavebutton = ({ data, depth }) => {
  const handleClick = async () => {
    if (!data || !data["1"]) return;

    const title = data["1"].label;
    const fix = Number(depth);

    try {
      await ApiClient.post("map/save", {
        title: title,
        data: { data },
        depth: fix,
      });
      // you can add toast/snackbar here for success feedback
    } catch (error) {
      console.error("Error saving map:", error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        bg-red-500 
        text-white 
        font-medium 
        px-5 py-2 
        rounded-lg
        shadow-md 
        hover:bg-red-600 
        active:scale-95
        transition
      "
    >
      Save Map
    </button>
  );
};

export default MapSavebutton;
