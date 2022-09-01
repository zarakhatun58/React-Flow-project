import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'react-flow-renderer';



const initialNodes = [
  {
    id: "hidden-1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 },
  },
  { id: "hidden-2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "hidden-3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  { id: "hidden-4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
  { id: "hidden-5", data: { label: "Node 5" }, position: { x: 400, y: 200 } },
  { id: "hidden-6", data: { label: "Node 6" }, position: { x: 400, y: 200 } },
];

const initialEdges = [
  { id: "hidden-e1-2", source: "hidden-1", target: "hidden-2" },
  { id: "hidden-e1-3", source: "hidden-1", target: "hidden-3" },
  { id: "hidden-e2-4", source: "hidden-2", target: "hidden-4" },
  { id: "hidden-e2-5", source: "hidden-2", target: "hidden-5" },
  { id: "hidden-e3-6", source: "hidden-3", target: "hidden-6" },
];

const hide = (hidden) => (nodeOrEdge) => {
  nodeOrEdge.hidden = hidden;
  return nodeOrEdge;
};

const Hidden = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hidden, setHidden] = useState(false);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  useEffect(() => {
    setNodes((nds) => nds.map(hide(hidden)));
    setEdges((eds) => eds.map(hide(hidden)));
  }, [hidden]);

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

        <div style={{ position: "absolute", left: 10, top: 10, zIndex: 4 }}>
          <div>
            <label htmlFor="ishidden">
              isHidden
              <input
                id="ishidden"
                type="checkbox"
                checked={hidden}
                onChange={(event) => setHidden(event.target.checked)}
                className="react-flow__ishidden"
              />
            </label>
          </div>
        </div>
      </ReactFlow>
    </div>
  );
};

export default Hidden;
