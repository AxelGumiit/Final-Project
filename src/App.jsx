import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { Experience } from "./Scenes/MainScene";
import { Html, useProgress } from "@react-three/drei";

// Define controls
export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};


function LoadingScreen() {
  const { progress } = useProgress(); 

  return (
    <Html center>
      <div 
        style={{
          fontSize: "2em",
          textAlign: "center",
          color: "#00ffcc", 
          fontFamily: "'Orbitron', sans-serif",
          textShadow: "0px 0px 20px rgba(0, 255, 204, 0.8)",
        }}
      >
        <div style={{ 
          fontSize: "3em", 
          marginBottom: "20px", 
          color: "#ff00ff", 
          textShadow: "0px 0px 30px rgba(255, 0, 255, 0.8)" 
        }}>
          Loading... {Math.round(progress)}%
        </div>
        <div 
          style={{ 
            width: "100%", 
            height: "20px", 
            backgroundColor: "#333", 
            borderRadius: "10px", 
            boxShadow: "0 0 10px rgba(0, 255, 204, 0.5)" 
          }}
        >
          <div 
            style={{
              width: `${progress}%`, 
              height: "100%", 
              backgroundColor: "#00ffcc", 
              borderRadius: "10px", 
              boxShadow: "0 0 15px rgba(0, 255, 204, 1)", 
            }} 
          />
        </div>
      </div>
    </Html>
  );
}

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [-9, 5, 15], fov: 25 }}>
        {/* Futuristic Background */}
        <color attach="background" args={["#1e1e1e"]} /> 
        
        {/* Light and reflections */}
        <ambientLight intensity={1} color="#00ffcc" />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
        
        <Suspense fallback={<LoadingScreen />}>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
