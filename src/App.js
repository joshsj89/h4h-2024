import './App.css';
import GetInvolved from './Pages/GetInvolved/GetInvolved';
import Merchandise from './Pages/Merchandise/Merchandise';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NavBar from './Components/NavBar/NavBar';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControlProps, PresentationControls } from '@react-three/drei';

function Model(props){
  const { scene } = useGLTF("/wheelchairv0.glb");
  return <primitive object={scene} {...props} />
}

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
      <Canvas dpr={[1,2]} shadows camera ={{ fov: 45 }} style={{"position": "absolute", width: "500px", height: "500px"}}>
        {/* <color attach="background" args={["#101010"]} /> */}
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"sunset"}>
            <Model scale = {0.007}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
