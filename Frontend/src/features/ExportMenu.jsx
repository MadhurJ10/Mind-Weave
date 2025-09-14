import React from "react";
import * as htmlToImage from "html-to-image";

const ExportMenu = () => {
  // Helper function to download file
  const downloadFile = (dataUrl, filename) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    link.click();
  };

  // Export as PNG
  const exportPNG = async () => {
    const node = document.getElementById("reactflow-wrapper");
    if (!node) return;

    try {
      const dataUrl = await htmlToImage.toPng(node, { backgroundColor: "black" });
      downloadFile(dataUrl, "mindweave-map.png");
    } catch (err) {
      console.error("Error exporting PNG:", err);
    }
  };

  // Export as SVG
  const exportSVG = async () => {
    const node = document.getElementById("reactflow-wrapper");
    if (!node) return;

    try {
      const dataUrl = await htmlToImage.toSvg(node, { backgroundColor: "black" });
      downloadFile(dataUrl, "mindweave-map.svg");
    } catch (err) {
      console.error("Error exporting SVG:", err);
    }
  };

  return (
    <div className="flex gap-2 ">
      <button
        onClick={exportPNG}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Export PNG
      </button>
      <button
        onClick={exportSVG}
        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
      >
        Export SVG
      </button>
    </div>
  );
};

export default ExportMenu;
