import React, { useCallback } from "react";
import {
    ReactFlow, 
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import dagre from "dagre";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 200;
const nodeHeight = 40;

const getLayoutedElements = (nodes, edges, direction = "LR") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

const initialNodes = [
  { id: "1", data: { label: "Machine Learning" }, position: { x: 0, y: 0 }, style: { background: "#FF9966", color: "#fff" } },
  { id: "2", data: { label: "Supervised" }, position: { x: 0, y: 0 }, style: { background: "#99CCFF" } },
  { id: "3", data: { label: "Unsupervised" }, position: { x: 0, y: 0 }, style: { background: "#99CCFF" } },
  { id: "4", data: { label: "Reinforcement" }, position: { x: 0, y: 0 }, style: { background: "#99CCFF" } },

  { id: "5", data: { label: "Classification" }, position: { x: 0, y: 0 }, style: { background: "#CCFFCC" } },
  { id: "6", data: { label: "Regression" }, position: { x: 0, y: 0 }, style: { background: "#CCFFCC" } },

  { id: "7", data: { label: "SVM" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "8", data: { label: "Decision Tree" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },

  { id: "9", data: { label: "Linear Kernel" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
  { id: "10", data: { label: "RBF Kernel" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
  { id: "11", data: { label: "CART Algorithm" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },

  { id: "12", data: { label: "Linear Regression" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "13", data: { label: "Polynomial Regression" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "14", data: { label: "Gradient Descent" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
  { id: "15", data: { label: "Feature Transformation" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },

  { id: "16", data: { label: "Clustering" }, position: { x: 0, y: 0 }, style: { background: "#CCFFCC" } },
  { id: "17", data: { label: "Dimensionality Reduction" }, position: { x: 0, y: 0 }, style: { background: "#CCFFCC" } },

  { id: "18", data: { label: "K-Means" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "19", data: { label: "Hierarchical" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "20", data: { label: "Elbow Method" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
  { id: "21", data: { label: "Silhouette Score" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
  { id: "22", data: { label: "Dendrogram" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },

  { id: "23", data: { label: "PCA" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "24", data: { label: "Eigenvectors" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
  { id: "25", data: { label: "Variance Threshold" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },

  { id: "26", data: { label: "Model-Based" }, position: { x: 0, y: 0 }, style: { background: "#CCFFCC" } },
  { id: "27", data: { label: "Model-Free" }, position: { x: 0, y: 0 }, style: { background: "#CCFFCC" } },
  { id: "28", data: { label: "Value Iteration" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "29", data: { label: "Q-Learning" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "30", data: { label: "Policy Gradients" }, position: { x: 0, y: 0 }, style: { background: "#CC99FF" } },
  { id: "31", data: { label: "Epsilon-Greedy" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
  { id: "32", data: { label: "REINFORCE" }, position: { x: 0, y: 0 }, style: { background: "#FFFF99" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },

  { id: "e2-5", source: "2", target: "5" },
  { id: "e2-6", source: "2", target: "6" },

  { id: "e5-7", source: "5", target: "7" },
  { id: "e5-8", source: "5", target: "8" },

  { id: "e7-9", source: "7", target: "9" },
  { id: "e7-10", source: "7", target: "10" },
  { id: "e8-11", source: "8", target: "11" },

  { id: "e6-12", source: "6", target: "12" },
  { id: "e6-13", source: "6", target: "13" },
  { id: "e12-14", source: "12", target: "14" },
  { id: "e13-15", source: "13", target: "15" },

  { id: "e3-16", source: "3", target: "16" },
  { id: "e3-17", source: "3", target: "17" },

  { id: "e16-18", source: "16", target: "18" },
  { id: "e16-19", source: "16", target: "19" },
  { id: "e18-20", source: "18", target: "20" },
  { id: "e18-21", source: "18", target: "21" },
  { id: "e19-22", source: "19", target: "22" },

  { id: "e17-23", source: "17", target: "23" },
  { id: "e23-24", source: "23", target: "24" },
  { id: "e23-25", source: "23", target: "25" },

  { id: "e4-26", source: "4", target: "26" },
  { id: "e4-27", source: "4", target: "27" },
  { id: "e26-28", source: "26", target: "28" },
  { id: "e27-29", source: "27", target: "29" },
  { id: "e27-30", source: "27", target: "30" },
  { id: "e29-31", source: "29", target: "31" },
  { id: "e30-32", source: "30", target: "32" },
];

export default function Test5() {
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges,
    "LR"
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        fitView
        nodesDraggable={false}
        zoomOnScroll
      >
        <Controls />
        <Background gap={16} />
      </ReactFlow>
    </div>
  );
}
