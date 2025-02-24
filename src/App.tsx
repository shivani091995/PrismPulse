import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import GradientPicker from "./GradientPicker";
import RandomColor from "./randomColorGenerator";
import  './App.css';

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gradient" element={<GradientPicker/>} />
        <Route path="/color" element={<RandomColor/>} />
      </Routes>

    </div>
      
    
  );
}

export default App;
