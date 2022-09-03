import logo from './logo.svg';
import './App.css';
import ComponentA from "./components/ComponentA";
import { DataProvider } from "./components/ContextApi";
import { DataConsumer } from "./components/ContextApi";


function App() {
  let fName = "Ghana"
  return (
    <div className="App">
      <DataProvider value={fName}>
        <ComponentA/>
        </DataProvider>
      
    </div>
  );
}

export default App;
