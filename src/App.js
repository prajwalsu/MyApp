import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA'; //default import
import { ComponentB } from './components/ComponentB'; //named import
import ComponentC from "./components/ComponentC";
import DataFromFile from './components/Data';

function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      {/* <ComponentA/>
      <ComponentB/>
      <DataFromFile/> */}
      <ComponentC/>
    </div>
  );
}

export default App;

