import logo from './logo.svg';
import './App.css';
// import Greetings from './Components/pure/greetings';
// import Greetingf from './Components/pure/greetingf';
// import TaskListComponent from './Components/container/task_list';
import Render from './Components/models/render';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Component Propio Example */}
        {/* <Greetings name='Cesar'></Greetings> */}
        {/* Functional Component example */}
        {/* <Greetingf name='Napo'></Greetingf> */}
        {/* Listing Component */}
        {/* <TaskListComponent></TaskListComponent> */}
        <Render></Render>
      </header>
    </div>
  );
}

export default App;
