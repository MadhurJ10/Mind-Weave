import React from "react";

const RECT_WIDTH = 180;
const RECT_HEIGHT = 52;
const PADDING = 10;

const ExportExcalidraw = ({ nodes }) => {
  const exportExcalidraw = () => {
    const elements = [];

    nodes.forEach((node, i) => {
      // Rectangle element
      const rectId = node.id;
      elements.push({
        id: rectId,
        type: "rectangle",
        x: node.position.x,
        y: node.position.y,
        width: RECT_WIDTH,
        height: RECT_HEIGHT,
        angle: 0,
        strokeColor: "#000000",
        backgroundColor: node.style?.background || "#ffffff",
        fillStyle: "solid",
        strokeWidth: 1,
        roughness: 1,
        seed: i + 1,
        version: 1,
        isDeleted: false,
        groupIds: [],
        strokeSharpness: "sharp",
      });

      // Text element (vertically centered)
      const textId = node.id + "-text";
      const fontSize = 16;
      const textY = node.position.y + (RECT_HEIGHT - fontSize) / 2;

      elements.push({
        id: textId,
        type: "text",
        x: node.position.x + PADDING,
        y: textY,
        text: node.data.label || "Node",
        fontSize: fontSize,
        fontFamily: 1,
        angle: 0,
        strokeColor: "#000000",
        backgroundColor: "transparent",
        fillStyle: "solid",
        strokeWidth: 1,
        roughness: 0,
        seed: i + 1000,
        version: 1,
        isDeleted: false,
        groupIds: [rectId], // group with rectangle
        baseline: fontSize,
        width: RECT_WIDTH - 2 * PADDING,
      });
    });

    const excalidrawData = {
      type: "excalidraw",
      version: 2,
      source: "MindWeave",
      elements,
      appState: {
        viewBackgroundColor: "#ffffff",
      },
    };

    const blob = new Blob([JSON.stringify(excalidrawData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mindmap.excalidraw";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportExcalidraw}
      className="p-2 bg-blue-500 text-white rounded-lg shadow"
    >
      Export Excalidraw
    </button>
  );
};

export default ExportExcalidraw;
