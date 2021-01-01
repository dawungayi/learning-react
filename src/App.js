import './App.css';
// functional component
import Greet from '../src/components/Greet'
import Hello from "../src/components/Hello";

// class conponent 
import Welcome from "../src/components/Welcome";

function App() {
  return (
    <div className="App">
      {/* if there is nothing between the open and close tags for this component, a self-closing tag will suffice */}
      {/* <Welcome/> */}
      {/* props for functional components */}
      <Greet name="Bruce" heroName="BatMan">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="SuperMan"></Greet>
        <button>Action</button>
      <Greet name="Diana" heroName="WonderWoman"></Greet>

      {/* props for class components */}
      <hr></hr>
      <Welcome name="Cesar" city="Douala"></Welcome>
      <Welcome name="Rashad" city="Austin"></Welcome>
      <Welcome name="Robert" city="New York"></Welcome>

      
    </div>
  );
}

export default App;
