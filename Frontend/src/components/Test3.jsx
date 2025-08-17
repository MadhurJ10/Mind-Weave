import React, { useCallback, useState, useMemo } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import dagre from "dagre";

const nodeWidth = 180;
const nodeHeight = 52;

const baseStyle = {
  borderRadius: 8,
  padding: 10,
  width: nodeWidth,
  textAlign: "center",
  fontWeight: 600,
};

// const rawNodes = [
//   { id: "1", data: { label: "Operating Systems" }, style: { ...baseStyle, background: "#e67e22", color: "#fff" } },

//   { id: "2", data: { label: "Types of OS" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
//   { id: "3", data: { label: "Functions" }, style: { ...baseStyle, background: "#d4f8f2", color: "#111" } },
//   { id: "4", data: { label: "System Calls" }, style: { ...baseStyle, background: "#e6d4f8", color: "#111" } },

//   { id: "5", data: { label: "Windows" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
//   { id: "6", data: { label: "Linux" }, style: { ...baseStyle, background: "#d4f8d0", color: "#111" } },

//   { id: "7", data: { label: "Process Management" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
//   { id: "8", data: { label: "Memory Management" }, style: { ...baseStyle, background: "#d4f8f2", color: "#111" } },

//   { id: "9", data: { label: "File Operations" }, style: { ...baseStyle, background: "#e6d4f8", color: "#111" } },
//   { id: "10", data: { label: "Device Management" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
// ];

const rawEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },

  { id: "e2-5", source: "2", target: "5" },
  { id: "e2-6", source: "2", target: "6" },

  { id: "e3-7", source: "3", target: "7" },
  { id: "e3-8", source: "3", target: "8" },

  { id: "e4-9", source: "4", target: "9" },
  { id: "e4-10", source: "4", target: "10" },
];
//  const rawNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "Artificial Intelligence" }, style: { background: "#FFA500" } },

//   { id: "2", position: { x: 200, y: -100 }, data: { label: "Machine Learning" }, style: { background: "#FFB6C1" } },
//   { id: "3", position: { x: 200, y: 0 }, data: { label: "Deep Learning" }, style: { background: "#FFB6C1" } },
//   { id: "4", position: { x: 200, y: 100 }, data: { label: "Neural Networks" }, style: { background: "#FFB6C1" } },

//   { id: "5", position: { x: 400, y: -150 }, data: { label: "Natural Language Processing" }, style: { background: "#ADD8E6" } },
//   { id: "6", position: { x: 600, y: -200 }, data: { label: "Text Summarization" }, style: { background: "#ADD8E6" } },
//   { id: "7", position: { x: 600, y: -100 }, data: { label: "Sentiment Analysis" }, style: { background: "#ADD8E6" } },

//   { id: "8", position: { x: 400, y: 100 }, data: { label: "Computer Vision" }, style: { background: "#90EE90" } },
//   { id: "9", position: { x: 600, y: 50 }, data: { label: "Image Recognition" }, style: { background: "#90EE90" } },
//   { id: "10", position: { x: 600, y: 150 }, data: { label: "Object Detection" }, style: { background: "#90EE90" } },
// ];

// const rawNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "React" }, style: { background: "#FF8C00" } },

//   { id: "2", position: { x: 200, y: -100 }, data: { label: "Components" }, style: { background: "#FFB6C1" } },
//   { id: "3", position: { x: 400, y: -150 }, data: { label: "Functional Components" }, style: { background: "#FFB6C1" } },
//   { id: "4", position: { x: 400, y: -50 }, data: { label: "Class Components" }, style: { background: "#FFB6C1" } },

//   { id: "5", position: { x: 200, y: 50 }, data: { label: "JSX" }, style: { background: "#ADD8E6" } },
//   { id: "6", position: { x: 200, y: 150 }, data: { label: "Virtual DOM" }, style: { background: "#ADD8E6" } },
//   { id: "7", position: { x: 200, y: 250 }, data: { label: "React Elements" }, style: { background: "#ADD8E6" } },

//   { id: "8", position: { x: 200, y: 350 }, data: { label: "State Management" }, style: { background: "#90EE90" } },
//   { id: "9", position: { x: 400, y: 320 }, data: { label: "useState" }, style: { background: "#90EE90" } },
//   { id: "10", position: { x: 400, y: 380 }, data: { label: "Redux" }, style: { background: "#90EE90" } },

// ];

//  const rawNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "Nodejs" }, style: { background: "#FFA500" } },

//   { id: "2", position: { x: 200, y: -150 }, data: { label: "Runtime Environment" }, style: { background: "#FFB6C1" } },
//   { id: "3", position: { x: 200, y: -50 }, data: { label: "Event Loop" }, style: { background: "#FFB6C1" } },
//   { id: "4", position: { x: 200, y: 50 }, data: { label: "V8 Engine" }, style: { background: "#FFB6C1" } },

//   { id: "5", position: { x: 200, y: 150 }, data: { label: "Package Manager" }, style: { background: "#ADD8E6" } },
//   { id: "6", position: { x: 400, y: 120 }, data: { label: "npm" }, style: { background: "#ADD8E6" } },
//   { id: "7", position: { x: 400, y: 180 }, data: { label: "yarn" }, style: { background: "#ADD8E6" } },

//   { id: "8", position: { x: 200, y: 250 }, data: { label: "Frameworks/Libraries" }, style: { background: "#90EE90" } },
//   { id: "9", position: { x: 400, y: 220 }, data: { label: "Express.js" }, style: { background: "#90EE90" } },
//   { id: "10", position: { x: 400, y: 280 }, data: { label: "NestJS" }, style: { background: "#90EE90" } },

// ];

// const rawNodes =[
//   { "id": "1", "data": { "label": "React" }, "position": { "x": 0, "y": 0 }, "style": { "background": "#FF4136" } },
//   { "id": "2", "data": { "label": "Components" }, "position": { "x": 0, "y": 100 }, "style": { "background": "#F08080" } },
//   { "id": "3", "data": { "label": "State Management" }, "position": { "x": 0, "y": 200 }, "style": { "background": "#ADD8E6" } },
//   { "id": "4", "data": { "label": "Hooks" }, "position": { "x": 0, "y": 300 }, "style": { "background": "#90EE90" } },
//   { "id": "5", "data": { "label": "Functional" }, "position": { "x": 250, "y": 100 }, "style": { "background": "#F08080" } },
//   { "id": "6", "data": { "label": "Class-based" }, "position": { "x": 250, "y": 150 }, "style": { "background": "#F08080" } },
//   { "id": "7", "data": { "label": "Redux" }, "position": { "x": 250, "y": 200 }, "style": { "background": "#ADD8E6" } },
//   { "id": "8", "data": { "label": "Context API" }, "position": { "x": 250, "y": 250 }, "style": { "background": "#ADD8E6" } },
//   { "id": "9", "data": { "label": "useState" }, "position": { "x": 250, "y": 300 }, "style": { "background": "#90EE90" } },
//   { "id": "10", "data": { "label": "useEffect" }, "position": { "x": 250, "y": 350 }, "style": { "background": "#90EE90" } }
// ];

const nodesData = {
  "1": { label: "Operating System", background: "#FF4136" },
  "2": { label: "Memory Management", background: "#FFDAB9" },
  "3": { label: "Process Management", background: "#ADD8E6" },
  "4": { label: "File System", background: "#90EE90" },
  "5": { label: "Virtual Memory", background: "#FFDAB9" },
  "6": { label: "Paging", background: "#FFDAB9" },
  "7": { label: "Scheduling", background: "#ADD8E6" },
  "8": { label: "Context Switching", background: "#ADD8E6" },
  "9": { label: "Directories", background: "#90EE90" },
  "10": { label: "File Attributes", background: "#90EE90" }
};

const rawNodes = Object.entries(nodesData).map(([id, { label, background }]) => ({
  id,
  data: { label },
  style: { ...baseStyle, background, color: "#111" }  // you can tweak color logic if needed
}));





// Dagre layout helper (LEFT ➜ RIGHT)
function layoutLR(nodes, edges) {
  const g = new dagre.graphlib.Graph();
  g.setGraph({
    rankdir: "LR",
    ranksep: 110,
    nodesep: 40,
    edgesep: 30,
    marginx: 30,
    marginy: 30,
  });
  g.setDefaultEdgeLabel(() => ({}));

  nodes.forEach((n) => g.setNode(n.id, { width: nodeWidth, height: nodeHeight }));
  edges.forEach((e) => g.setEdge(e.source, e.target));

  dagre.layout(g);

  return nodes.map((n) => {
    const { x, y } = g.node(n.id);
    return {
      ...n,
      position: { x: x - nodeWidth / 2, y: y - nodeHeight / 2 },
      targetPosition: "left",
      sourcePosition: "right",
      draggable: true,
    };
  });
}

export default function Test3() {
  const { initialNodes, initialEdges } = useMemo(() => {
    return {
      initialNodes: layoutLR(rawNodes, rawEdges),
      initialEdges: rawEdges.map((e) => ({
        ...e,
        type: "default",
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed },
      })),
    };
  }, []);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls position="bottom-right" />
        <Background />
      </ReactFlow>
    </div>
  );
}
