import './App.css';
import GetInvolved from './Pages/GetInvolved/GetInvolved';
import Merchandise from './Pages/Merchandise/Merchandise';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NavBar from './Components/NavBar/NavBar';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControlProps, PresentationControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="get-involved" element={ <GetInvolved/> } />
        <Route path="merchandise" element={ <Merchandise/> } />
      </Routes>
    </div>
  );
}

export default App;
