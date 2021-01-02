import './App.css';
import Counter from './components/Counter';
import Message from "./components/Message";
import Greet from './components/Greet';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">

      <Greet name="Clark" heroName="SuperMan"></Greet>
      <Welcome name="Jackie" city="Tokyo"></Welcome>


      {/* simple demo of states in class components */}
      {/* <Messge></Messge> */}
      {/* <Counter></Counter> */}
      
    </div>
  );
}

export default App;
