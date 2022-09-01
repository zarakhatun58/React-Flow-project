import React from "react";
import ReactFlow, { useNodesState, useEdgesState } from 'react-flow-renderer';
import DragHandleNode from './DragHandleNode.js';

const nodeTypes = {
  dragHandleNode: DragHandleNode,
};

const initialNodes = [
  {
    id: "2",
    type: "dragHandleNode",
    dragHandle: ".custom-drag-handle",
    style: { border: "1px solid #ddd", padding: "20px 40px" },
    position: { x: 200, y: 200 },
  },
];

const DragHandle = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  return (
    <div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        style={{width:"100%", height:"100vh"}}
      />
    </div>
  );
};

export default DragHandle;
