import { WorkDesk } from "../Items/desk";
import { Environment, OrbitControls, Html } from '@react-three/drei';
import { useState, useEffect } from 'react';


export const DeskScene = () => {
  const [hovered, setHovered] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Effect to trigger fade out after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <group>
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <OrbitControls />

      <group
        scale={3.5}
        position={[-1, -4, -1]}
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
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          marginTop: '2px',
          opacity: fadeOut ? 0 : 1, // Set opacity based on fadeOut state
          transition: 'opacity 2s ease-in-out', // Smooth transition
        }}>
          Welcome to Project page
        </div>
      </Html>
{/* 
      <group 
        position={[-1, 0.85, -1]}
        rotation={[0, 0, 0]}
        scale={0.15}
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)} 
      >
        <mesh scale={hovered ? 1.5 : 1}>
          <Project1 />
        </mesh>
      </group> */}
    </group>
  );
};
