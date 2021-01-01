import logo from './logo.svg';
import './App.css';
// functional component - stateless
import MyComponent from '../src/components/Greet'

// class conponent - stateful
import Welcome from "../src/components/Welcome";

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      {/* <Welcome></Welcome> */}
      {/* if there is nothing between the open and close tags for this component, a self-closing tag will suffice */}
      <Welcome></Welcome>
    </div>
  );
}

export default App;
