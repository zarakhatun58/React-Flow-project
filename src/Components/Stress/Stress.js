import React, { useCallback } from "react";
import { createNodesAndEdges } from "./Utils";
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    Background,
  } from 'react-flow-renderer';

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(
  5,
  5
);

const Stress = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const updatePos = useCallback(() => {
    setNodes((nds) => {
      return nds.map((node) => {
        return {
          ...node,
          position: {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          },
        };
      });
    });
  }, []);

  return (
    <div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{width:"100%", height:"100vh"}}
      >
        <MiniMap />
        <Controls />
        <Background />

        <button
          onClick={updatePos}
          style={{ position: "absolute", right: 10, top: 30, zIndex: 4 }}
        >
          change pos
        </button>
      </ReactFlow>
    </div>
  );
};

export default Stress;
