import { WorkDesk } from "./desk";
import { Environment, OrbitControls, Html } from '@react-three/drei';
import { useState } from 'react';

export const DeskScene = () => {
  const [hovered, setHovered] = useState(false); // State to manage hover effect

  return (
    <group>
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <OrbitControls />

      <group
        scale={3.5}
        position={[-1, -4, -1]} // Adjust position as needed
        rotation={[0, Math.PI / 4, 0]}
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)} 
      >
        <WorkDesk />
      </group>

      
        <Html position={[0, 2, 0]} center>
          <div style={{ 
            background: '#DAB1DA', 
            borderRadius: '10px', 
            width: '1000px',
            fontSize: '100px',
            padding: '5px', 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
          }}>
            Welcome to Project page
          </div>
        </Html>
     
    </group>
  );
};
