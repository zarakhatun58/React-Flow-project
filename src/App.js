import logo from './logo.svg';
import './App.css';
import UpdateNode from './Components/UpdateNodes/UpdateNode';
import FirstTest from './Components/First/FirstTest';
import Stress from './Components/Stress/Stress';
import Hidden from './Components/Hidden/Hidden';
import DragHandle from './Components/DragHandle/DragHandle';
import AddNodeDemo from './Components/AddNode/AddNode';
import EdgeFlow from './Components/CustomEdge/EdgeFlow';
import EdgeButton from './Components/EdgeWithButton/EdgeButton';

function App() {
  return (
    <div className="App">
     <h3>React Flow Demo App</h3>
     <FirstTest/>
     <UpdateNode/>
     <Stress/>
     <Hidden/>
     <DragHandle/>
     <AddNodeDemo/>
     <EdgeFlow/>
     <EdgeButton/>
    </div>
  );
}

export default App;
