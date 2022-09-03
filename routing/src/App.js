import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import NavBarComponent from './navbar/NavBarComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarComponent/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
