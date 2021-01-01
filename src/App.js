import logo from './logo.svg';
import './App.css';
// functional component
import MyComponent from '../src/components/Greet'
import Hello from "../src/components/Hello";

// class conponent 
import Welcome from "../src/components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <MyComponent></MyComponent> */}
      {/* <Welcome></Welcome> */}
      {/* if there is nothing between the open and close tags for this component, a self-closing tag will suffice */}
      {/* <Welcome/> */}
      <Hello/>
      
    </div>
  );
}

export default App;
