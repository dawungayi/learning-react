import './App.css';
import Counter from './components/Counter';
import Message from "./components/Message";
import Greet from './components/Greet';
import Welcome from "./components/Welcome";
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">

      {/* <FunctionClick/>
      <ClassClick/> */}
      <EventBind/>

    </div>
  );
}

export default App;
