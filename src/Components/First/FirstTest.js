import React, { useCallback } from "react";
import ReactFlow, {  addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState, } from "react-flow-renderer";

import { nodes as initialNodes, edges as initialEdges } from './initial-elements';

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);


const FirstTest = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


  return (
    <div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        style={{width:"100%", height:"100vh"}}
        attributionPosition="top-right"
      >
        <MiniMap 
        nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';
  
            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
  
            return '#fff';
          }}
          nodeBorderRadius={2}
        />
         <Controls />
      <Background color="blue" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default FirstTest;
