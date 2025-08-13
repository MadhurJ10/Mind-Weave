import React, { useState, useRef, useLayoutEffect, useMemo, useCallback } from 'react';

// Data is now included in the same file
const conceptMapData = [
    // Depth 0
    { "id": "main_topic", "text": "Machine Learning", "depth": 0, "parent": null, "children": ["subtopic_a", "subtopic_b", "subtopic_c"], "color": "color-orange" },
    // Depth 1
    { "id": "subtopic_a", "text": "Supervised", "depth": 1, "parent": "main_topic", "children": ["sub_a_1", "sub_a_2"], "color": "color-blue" },
    { "id": "subtopic_b", "text": "Unsupervised", "depth": 1, "parent": "main_topic", "children": ["sub_b_1", "sub_b_2"], "color": "color-blue" },
    { "id": "subtopic_c", "text": "Reinforcement", "depth": 1, "parent": "main_topic", "children": ["sub_c_1", "sub_c_2"], "color": "color-blue" },
    // Depth 2
    { "id": "sub_a_1", "text": "Classification", "depth": 2, "parent": "subtopic_a", "children": ["sub_a_1_1", "sub_a_1_2"], "color": "color-green" },
    { "id": "sub_a_2", "text": "Regression", "depth": 2, "parent": "subtopic_a", "children": ["sub_a_2_1", "sub_a_2_2"], "color": "color-green" },
    { "id": "sub_b_1", "text": "Clustering", "depth": 2, "parent": "subtopic_b", "children": ["sub_b_1_1", "sub_b_1_2"], "color": "color-green" },
    { "id": "sub_b_2", "text": "Dimensionality Reduction", "depth": 2, "parent": "subtopic_b", "children": ["sub_b_2_1"], "color": "color-green" },
    { "id": "sub_c_1", "text": "Model-Based", "depth": 2, "parent": "subtopic_c", "children": ["sub_c_1_1"], "color": "color-green" },
    { "id": "sub_c_2", "text": "Model-Free", "depth": 2, "parent": "subtopic_c", "children": ["sub_c_2_1", "sub_c_2_2"], "color": "color-green" },
    // Depth 3
    { "id": "sub_a_1_1", "text": "SVM", "depth": 3, "parent": "sub_a_1", "children": ["sub_a_1_1_1", "sub_a_1_1_2"], "color": "color-light-purple" },
    { "id": "sub_a_1_2", "text": "Decision Tree", "depth": 3, "parent": "sub_a_1", "children": ["sub_a_1_2_1"], "color": "color-light-purple" },
    { "id": "sub_a_2_1", "text": "Linear Regression", "depth": 3, "parent": "sub_a_2", "children": ["sub_a_2_1_1"], "color": "color-light-purple" },
    { "id": "sub_a_2_2", "text": "Polynomial Regression", "depth": 3, "parent": "sub_a_2", "children": ["sub_a_2_2_1"], "color": "color-light-purple" },
    { "id": "sub_b_1_1", "text": "K-Means", "depth": 3, "parent": "sub_b_1", "children": ["sub_b_1_1_1", "sub_b_1_1_2"], "color": "color-light-purple" },
    { "id": "sub_b_1_2", "text": "Hierarchical", "depth": 3, "parent": "sub_b_1", "children": ["sub_b_1_2_1"], "color": "color-light-purple" },
    { "id": "sub_b_2_1", "text": "PCA", "depth": 3, "parent": "sub_b_2", "children": ["sub_b_2_1_1", "sub_b_2_1_2"], "color": "color-light-purple" },
    { "id": "sub_c_1_1", "text": "Value Iteration", "depth": 3, "parent": "sub_c_1", "children": [], "color": "color-light-purple" },
    { "id": "sub_c_2_1", "text": "Q-Learning", "depth": 3, "parent": "sub_c_2", "children": ["sub_c_2_1_1"], "color": "color-light-purple" },
    { "id": "sub_c_2_2", "text": "Policy Gradients", "depth": 3, "parent": "sub_c_2", "children": ["sub_c_2_2_1"], "color": "color-light-purple" },
    // Depth 4 (Leaf Nodes)
    { "id": "sub_a_1_1_1", "text": "Linear Kernel", "depth": 4, "parent": "sub_a_1_1", "children": [], "color": "color-yellow" },
    { "id": "sub_a_1_1_2", "text": "RBF Kernel", "depth": 4, "parent": "sub_a_1_1", "children": [], "color": "color-yellow" },
    { "id": "sub_a_1_2_1", "text": "CART Algorithm", "depth": 4, "parent": "sub_a_1_2", "children": [], "color": "color-yellow" },
    { "id": "sub_a_2_1_1", "text": "Gradient Descent", "depth": 4, "parent": "sub_a_2_1", "children": [], "color": "color-yellow" },
    { "id": "sub_a_2_2_1", "text": "Feature Transformation", "depth": 4, "parent": "sub_a_2_2", "children": [], "color": "color-yellow" },
    { "id": "sub_b_1_1_1", "text": "Elbow Method", "depth": 4, "parent": "sub_b_1_1", "children": [], "color": "color-yellow" },
    { "id": "sub_b_1_1_2", "text": "Silhouette Score", "depth": 4, "parent": "sub_b_1_1", "children": [], "color": "color-yellow" },
    { "id": "sub_b_1_2_1", "text": "Dendrogram", "depth": 4, "parent": "sub_b_1_2", "children": [], "color": "color-yellow" },
    { "id": "sub_b_2_1_1", "text": "Eigenvectors", "depth": 4, "parent": "sub_b_2_1", "children": [], "color": "color-yellow" },
    { "id": "sub_b_2_1_2", "text": "Variance Threshold", "depth": 4, "parent": "sub_b_2_1", "children": [], "color": "color-yellow" },
    { "id": "sub_c_2_1_1", "text": "Epsilon-Greedy", "depth": 4, "parent": "sub_c_2_1", "children": [], "color": "color-yellow" },
    { "id": "sub_c_2_2_1", "text": "REINFORCE", "depth": 4, "parent": "sub_c_2_2", "children": [], "color": "color-yellow" }
];

// Configuration constants
const nodeConfig = { width: 170, height: 45, horizontalSpacing: 110, verticalSpacing: 25 };
const zoomConfig = { step: 0.1, max: 2.0 };

// CSS is now a string to be injected via a <style> tag
const cssStyles = `
    .map-container-wrapper {
        font-family: 'Inter', sans-serif;
        background-color: #1a1a1a;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }
    #controls-container {
        position: fixed;
        bottom: 40px;
        right: 40px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        z-index: 100;
    }
    .control-button {
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px 15px;
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: background-color 0.2s ease, transform 0.1s ease;
    }
    .control-button:hover {
        background-color: #555;
        transform: translateY(-2px);
    }
    .control-button:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    #map-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        cursor: grab;
        border: 1px solid #333;
        border-radius: 8px;
    }
    #map-wrapper.dragging {
        cursor: grabbing;
    }
    #concept-map-container {
        position: absolute;
        width: 4000px;
        height: 5000px;
        background-color: #1a1a1a;
        transform-origin: 0 0;
    }
    .concept-node {
        position: absolute;
        border: 2px solid #555;
        border-radius: 8px;
        padding: 10px 15px;
        font-size: 0.9rem;
        text-align: center;
        font-weight: 600;
        color: #1a1a1a;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        cursor: default;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        user-select: none;
    }
    .concept-node.color-orange { background-color: #ff9966; }
    .concept-node.color-blue { background-color: #99ccff; }
    .concept-node.color-green { background-color: #ccffcc; }
    .concept-node.color-light-purple { background-color: #cc99ff; }
    .concept-node.color-yellow { background-color: #fffd8d; }
    #concept-map-svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        pointer-events: none;
    }
    .concept-line {
        stroke: #888;
        stroke-width: 2;
        fill: none;
    }
`;

const ConceptMap = () => {
    const [zoom, setZoom] = useState(1.0);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [nodePositions, setNodePositions] = useState({});

    const mapWrapperRef = useRef(null);
    const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
    const minZoomRef = useRef(1.0);

    const nodesMap = useMemo(() => {
        const map = {};
        conceptMapData.forEach(concept => {
            map[concept.id] = { ...concept, children: [] };
        });
        conceptMapData.forEach(concept => {
            if (concept.parent && map[concept.parent]) {
                map[concept.parent].children.push(concept.id);
            }
        });
        return map;
    }, []);

    const calculateSubtreeHeight = useCallback((nodeId, currentMap) => {
        const node = currentMap[nodeId];
        if (!node || node.children.length === 0) return nodeConfig.height;
        let totalChildrenHeight = node.children.reduce((total, childId) => total + calculateSubtreeHeight(childId, currentMap), 0);
        totalChildrenHeight += (node.children.length - 1) * nodeConfig.verticalSpacing;
        return Math.max(nodeConfig.height, totalChildrenHeight);
    }, []);

    useLayoutEffect(() => {
        const newPositions = {};
        const positionNode = (node, x, y, currentMap) => {
            newPositions[node.id] = { x, y, width: nodeConfig.width, height: nodeConfig.height };
            if (node.children.length > 0) {
                const startChildX = x + nodeConfig.width + nodeConfig.horizontalSpacing;
                const subtreeHeight = calculateSubtreeHeight(node.id, currentMap);
                let currentChildY = y - subtreeHeight / 2 + nodeConfig.height / 2;
                node.children.forEach(childId => {
                    const childNode = currentMap[childId];
                    const childSubtreeHeight = calculateSubtreeHeight(childId, currentMap);
                    const yOffsetForChild = childSubtreeHeight / 2 - nodeConfig.height / 2;
                    positionNode(childNode, startChildX, currentChildY + yOffsetForChild, currentMap);
                    currentChildY += childSubtreeHeight + nodeConfig.verticalSpacing;
                });
            }
        };

        const rootNodes = Object.values(nodesMap).filter(node => !node.parent);
        const totalRootSubtreeHeight = rootNodes.reduce((total, root) => total + calculateSubtreeHeight(root.id, nodesMap), 0) + (rootNodes.length - 1) * nodeConfig.verticalSpacing;
        let currentY = (5000 / 2) - (totalRootSubtreeHeight / 2);
        const startX = 50;

        rootNodes.forEach(root => {
            const rootSubtreeHeight = calculateSubtreeHeight(root.id, nodesMap);
            const yOffsetForRoot = rootSubtreeHeight / 2 - nodeConfig.height / 2;
            positionNode(root, startX, currentY + yOffsetForRoot, nodesMap);
            currentY += rootSubtreeHeight + nodeConfig.verticalSpacing;
        });
        setNodePositions(newPositions);
    }, [nodesMap, calculateSubtreeHeight]);

    const centerAndFitMap = useCallback(() => {
        if (Object.keys(nodePositions).length === 0 || !mapWrapperRef.current) return;
        let minX = Infinity, minY = Infinity, maxX = 0, maxY = 0;
        Object.values(nodePositions).forEach(pos => {
            minX = Math.min(minX, pos.x);
            minY = Math.min(minY, pos.y);
            maxX = Math.max(maxX, pos.x + pos.width);
            maxY = Math.max(maxY, pos.y + pos.height);
        });
        const mapBounds = { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
        const wrapper = mapWrapperRef.current;
        const padding = 80;
        const newZoom = Math.min(wrapper.clientWidth / (mapBounds.width + padding), wrapper.clientHeight / (mapBounds.height + padding), zoomConfig.max);
        minZoomRef.current = newZoom;
        setZoom(newZoom);
        setPan({
            x: (wrapper.clientWidth - (mapBounds.width * newZoom)) / 2 - (mapBounds.x * newZoom),
            y: (wrapper.clientHeight - (mapBounds.height * newZoom)) / 2 - (mapBounds.y * newZoom),
        });
    }, [nodePositions]);

    useLayoutEffect(() => {
        centerAndFitMap();
        window.addEventListener('resize', centerAndFitMap);
        return () => window.removeEventListener('resize', centerAndFitMap);
    }, [centerAndFitMap]);

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsPanning(true);
        panStartRef.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    };
    const handleMouseMove = (e) => {
        if (!isPanning) return;
        setPan({ x: panStartRef.current.panX + (e.clientX - panStartRef.current.x), y: panStartRef.current.panY + (e.clientY - panStartRef.current.y) });
    };
    const handleMouseUpOrLeave = () => setIsPanning(false);

    return (
        <div className="map-container-wrapper">
            <style>{cssStyles}</style>
            <div id="map-wrapper" ref={mapWrapperRef} className={isPanning ? 'dragging' : ''} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUpOrLeave} onMouseLeave={handleMouseUpOrLeave}>
                <div id="concept-map-container" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}>
                    <svg id="concept-map-svg">
                        {conceptMapData.map(concept => {
                            if (!concept.parent) return null;
                            const parentPos = nodePositions[concept.parent];
                            const childPos = nodePositions[concept.id];
                            if (!parentPos || !childPos) return null;
                            const x1 = parentPos.x + parentPos.width;
                            const y1 = parentPos.y + parentPos.height / 2;
                            const x2 = childPos.x;
                            const y2 = childPos.y + childPos.height / 2;
                            const pathData = `M ${x1} ${y1} C ${x1 + nodeConfig.horizontalSpacing / 2} ${y1}, ${x2 - nodeConfig.horizontalSpacing / 2} ${y2}, ${x2} ${y2}`;
                            return <path key={`${concept.parent}-${concept.id}`} d={pathData} className="concept-line" />;
                        })}
                    </svg>
                    {Object.keys(nodePositions).length > 0 && conceptMapData.map(concept => {
                        const pos = nodePositions[concept.id];
                        if (!pos) return null;
                        return (
                            <div key={concept.id} className={`concept-node ${concept.color}`} style={{ left: `${pos.x}px`, top: `${pos.y}px`, width: `${pos.width}px`, height: `${pos.height}px` }}>
                                {concept.text}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div id="controls-container">
                <button onClick={() => setZoom(prev => Math.min(zoomConfig.max, prev + zoomConfig.step))} className="control-button">+</button>
                <button onClick={centerAndFitMap} className="control-button">FIT</button>
                <button onClick={() => setZoom(prev => Math.max(minZoomRef.current, prev - zoomConfig.step))} className="control-button">-</button>
            </div>
        </div>
    );
};

export default ConceptMap;