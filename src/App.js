import './App.css';
import Counter from './components/Counter';
import Message from "./components/Message";
import Greet from './components/Greet';
import Welcome from "./components/Welcome";
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/MethodProps/Parent';
import UserGreeting from './components/ConditionalRendering/UserGreeting';
import NameList from './components/ListRendering/NameList';

function App() {
  return (
    <div className="App">

    <NameList/>

    </div>
  );
}

export default App;
