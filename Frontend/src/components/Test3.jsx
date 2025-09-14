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
import ExportMenu from "../features/ExportMenu";
import ExportExcalidraw from "../features/ExportExcalidraw";
import MapSavebutton from "./MapSavebutton";

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

// Layout helper (Left ➜ Right)
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

export default function Test3({ IsDepth }) {
  const conceptMapData = useSelector((state) => state.conceptMap.data);
  const latestEntry =
    conceptMapData.length > 0
      ? conceptMapData[conceptMapData.length - 1]
      : null;

  // Build nodes only if data exists
  const rawNodes = latestEntry
    ? Object.entries(latestEntry).map(([id, { label, background }]) => ({
        id,
        data: { label },
        style: { ...baseStyle, background, color: "#111" },
      }))
    : [];

  const { initialNodes, initialEdges } = useMemo(() => {
    if (!latestEntry) return { initialNodes: [], initialEdges: [] };

    return {
      initialNodes: layoutLR(rawNodes, rawEdges),
      initialEdges: rawEdges.map((e) => ({
        ...e,
        type: "default",
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed },
      })),
    };
  }, [conceptMapData]);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  if (!latestEntry) {
    return <div style={{ padding: 20 }}>⚠️ No data available</div>;
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ReactFlow
        id="reactflow-wrapper"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls position="bottom-right" />
        <Background />
      </ReactFlow>

      {/* Action buttons row – fixed at original MapSavebutton height */}
      <div
        style={{
          position: "absolute",
          bottom: "rem", // adjust this to match the old button spot
          left: "40%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <ExportExcalidraw nodes={nodes} edges={edges} />
        <ExportMenu />
        <MapSavebutton data={latestEntry} depth={IsDepth} />
      </div>
    </div>
  );
}
