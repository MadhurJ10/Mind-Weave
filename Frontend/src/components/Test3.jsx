import React, { useCallback, useState, useMemo, useEffect } from "react";
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
import { useSelector } from "react-redux";

const nodeWidth = 180;
const nodeHeight = 52;

const baseStyle = {
  borderRadius: 8,
  padding: 10,
  width: nodeWidth,
  textAlign: "center",
  fontWeight: 600,
};

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

  nodes.forEach((n) =>
    g.setNode(n.id, { width: nodeWidth, height: nodeHeight })
  );
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
  const conceptMapData = useSelector((state) => state.conceptMap.data);
  console.log("Redux Data:", conceptMapData);

  // ✅ Get latest entry safely
  const latestEntry =
    conceptMapData.length > 0 ? conceptMapData[ conceptMapData.length - 1 ] : null;

  // ✅ Build nodes only if latestEntry exists
  const rawNodes = latestEntry
    ? Object.entries(latestEntry).map(([ id, { label, background } ]) => ({
      id,
      data: { label },
      style: { ...baseStyle, background, color: "#111" },

    }))
    : [];

  const { initialNodes, initialEdges } = useMemo(() => {
    if (!latestEntry) {
      return { initialNodes: [], initialEdges: [] };
    }
    return {
      initialNodes: layoutLR(rawNodes, rawEdges),
      initialEdges: rawEdges.map((e) => ({
        ...e,
        type: "default",
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed },
      })),
    };
  }, [ conceptMapData ]);

  const [ nodes, setNodes ] = useState(initialNodes);
  const [ edges, setEdges ] = useState(initialEdges);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [ initialNodes, initialEdges ]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // 🚨 Prevent rendering ReactFlow with empty data
  if (!latestEntry) {
    return <div style={{ padding: 20 }}>⚠️ No data available</div>;
  }

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
