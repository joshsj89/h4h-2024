import React from "react";
import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from '@react-three/drei';
import Model from "../../Components/Model/Model";

function Home() {
    return (
      <div id="HomeContainer">
        <h1>This is Home</h1>
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
  
export default Home;