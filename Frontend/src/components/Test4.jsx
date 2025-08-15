import React, { useMemo } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import dagre from "dagre";

const nodeWidth = 200;
const nodeHeight = 56;

const baseStyle = {
  borderRadius: 10,
  padding: 10,
  width: nodeWidth,
  textAlign: "center",
  fontWeight: 600,
};

// ---------- NODES ----------
const rawNodes = [
  { id: "1", data: { label: "Machine Learning" }, style: { ...baseStyle, background: "#e67e22", color: "#fff" } },

  { id: "2", data: { label: "Supervised Learning" },   style: { ...baseStyle, background: "#8ecae6" } },
  { id: "3", data: { label: "Unsupervised Learning" }, style: { ...baseStyle, background: "#8ecae6" } },
  { id: "4", data: { label: "Reinforcement Learning" },style: { ...baseStyle, background: "#8ecae6" } },

  { id: "5", data: { label: "Classification" }, style: { ...baseStyle, background: "#caffbf" } },
  { id: "6", data: { label: "Regression" },     style: { ...baseStyle, background: "#caffbf" } },

  { id: "7",  data: { label: "SVM" },                 style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "8",  data: { label: "Decision Tree" },       style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "9",  data: { label: "Linear Regression" },   style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "10", data: { label: "Polynomial Regression" },style: { ...baseStyle, background: "#d0a6f5" } },

  { id: "11", data: { label: "Clustering" },               style: { ...baseStyle, background: "#caffbf" } },
  { id: "12", data: { label: "Dimensionality Reduction" }, style: { ...baseStyle, background: "#caffbf" } },

  { id: "13", data: { label: "K-Means" },      style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "14", data: { label: "Hierarchical" }, style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "15", data: { label: "PCA" },          style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "16", data: { label: "t-SNE" },        style: { ...baseStyle, background: "#d0a6f5" } },

  { id: "17", data: { label: "Q-Learning" },     style: { ...baseStyle, background: "#caffbf" } },
  { id: "18", data: { label: "Policy Gradients" },style: { ...baseStyle, background: "#caffbf" } },

  { id: "19", data: { label: "Value Iteration" },  style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "20", data: { label: "Policy Iteration" }, style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "21", data: { label: "REINFORCE" },        style: { ...baseStyle, background: "#d0a6f5" } },
  { id: "22", data: { label: "A2C / A3C" },        style: { ...baseStyle, background: "#d0a6f5" } },
];

// ---------- EDGES (2 children per parent) ----------
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

// ---------- DAGRE LAYOUT (Left → Right) ----------
function layoutLR(nodes, edges) {
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: "LR", ranksep: 120, nodesep: 0, edgesep: 30, marginx: 40, marginy: 40 });
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

export default function Test4() {
  const layoutedNodes = useMemo(() => layoutLR(rawNodes, rawEdges), []);
  const styledEdges = useMemo(
    () =>
      rawEdges.map((e) => ({
        ...e,
        type: "bezier",
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed },
      })),
    []
  );

  const [nodes, , onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(styledEdges);

  const onConnect = (params) =>
    setEdges((eds) => addEdge({ ...params, type: "bezier", markerEnd: { type: MarkerType.ArrowClosed } }, eds));

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
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
