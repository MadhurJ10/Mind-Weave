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

const rawNodes = [
  { id: "1", data: { label: "Operating Systems" }, style: { ...baseStyle, background: "#e67e22", color: "#fff" } },

  { id: "2", data: { label: "Types of OS" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
  { id: "3", data: { label: "Functions" }, style: { ...baseStyle, background: "#d4f8f2", color: "#111" } },
  { id: "4", data: { label: "System Calls" }, style: { ...baseStyle, background: "#e6d4f8", color: "#111" } },

  { id: "5", data: { label: "Windows" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
  { id: "6", data: { label: "Linux" }, style: { ...baseStyle, background: "#d4f8d0", color: "#111" } },

  { id: "7", data: { label: "Process Management" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
  { id: "8", data: { label: "Memory Management" }, style: { ...baseStyle, background: "#d4f8f2", color: "#111" } },

  { id: "9", data: { label: "File Operations" }, style: { ...baseStyle, background: "#e6d4f8", color: "#111" } },
  { id: "10", data: { label: "Device Management" }, style: { ...baseStyle, background: "#fde2e0", color: "#111" } },
];

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
