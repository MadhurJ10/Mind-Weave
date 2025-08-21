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

const nodeWidth = 200;
const nodeHeight = 56;

const baseStyle = {
  borderRadius: 10,
  padding: 10,
  width: nodeWidth,
  textAlign: "center",
  fontWeight: 600,
};

// ---------- STATIC EDGES ----------
const rawEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e2-6", source: "2", target: "6" },
  { id: "e5-7", source: "5", target: "7" },
  { id: "e5-8", source: "5", target: "8" },
  { id: "e6-9", source: "6", target: "9" },
  { id: "e6-10", source: "6", target: "10" },
  { id: "e3-11", source: "3", target: "11" },
  { id: "e3-12", source: "3", target: "12" },
  { id: "e11-13", source: "11", target: "13" },
  { id: "e11-14", source: "11", target: "14" },
  { id: "e12-15", source: "12", target: "15" },
  { id: "e12-16", source: "12", target: "16" },
  { id: "e4-17", source: "4", target: "17" },
  { id: "e4-18", source: "4", target: "18" },
  { id: "e17-19", source: "17", target: "19" },
  { id: "e17-20", source: "17", target: "20" },
  { id: "e18-21", source: "18", target: "21" },
  { id: "e18-22", source: "18", target: "22" },
];

// ---------- DAGRE LAYOUT ----------
function layoutLR(nodes, edges) {
  const g = new dagre.graphlib.Graph();
  g.setGraph({
    rankdir: "LR",
    ranksep: 120,
    nodesep: 0,
    edgesep: 30,
    marginx: 40,
    marginy: 40,
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

export default function Test4Redux() {
  const conceptMapData = useSelector((state) => state.conceptMap.latest);
  console.log("Redux Data:", conceptMapData);

  // ✅ Latest entry
  const latestEntry = conceptMapData

  // ✅ Build nodes from Redux
  const rawNodes = latestEntry
    ? Object.entries(latestEntry).map(([ id, { label, background } ]) => ({
      id,
      data: { label },
      style: { ...baseStyle, background, color: "#111" },
    }))
    : [];

  // ✅ Layout + style edges
  const { initialNodes, initialEdges } = useMemo(() => {
    if (!latestEntry) {
      return { initialNodes: [], initialEdges: [] };
    }
    return {
      initialNodes: layoutLR(rawNodes, rawEdges),
      initialEdges: rawEdges.map((e) => ({
        ...e,
        type: "bezier",
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
        fitViewOptions={{ padding: 0.45, includeHiddenNodes: true, maxZoom: 1 }}
        minZoom={0.05}
        maxZoom={2}
        panOnScroll
        selectionOnDrag
      >
        <Controls position="bottom-right" />
        <Background />
      </ReactFlow>
    </div>
  );
}
