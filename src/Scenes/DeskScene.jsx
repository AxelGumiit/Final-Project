import { WorkDesk } from "../Items/desk";
import { Environment, Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { Project1 } from "../Items/gameConsole";


export const DeskScene = () => {
  const [hovered, setHovered] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const handleClick = () => {
    window.open("/Html_Pages/Project1.html", "_blank");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
        <>
          <group>
            <Environment preset="sunset" />
            <ambientLight intensity={1} />

            {/* Desk Group */}
            <group
              scale={4}
              position={[-1, -4, -1]}
              rotation={[0, Math.PI / 4, 0]}
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
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 2s ease-in-out', 
              }}>
                Welcome to Project page
              </div>
            </Html>
          </group>

        
          <group 
            position={[-1.5, 0.5, 1.5]}
            rotation={[0,0.7, 0]}
            scale={0.15}
  
          >
            {/* Project1 Mesh */}
            <mesh 
              scale={hovered ? 1.5 : 1}
              onPointerOver={() => setHovered(true)} // Trigger hover when pointer is over the object
              onPointerOut={() => setHovered(false)} 
              onClick={handleClick} 
            >
              <Project1 /> 
              <boxGeometry args={[0, 0, 0]} />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>

            {/* Tooltip on hover */}
            {hovered && (
              <Html position={[0, 2, 0]} center>
                <div style={{ 
                  background: 'white', 
                  borderRadius: '10px', 
                  width: '200px',
                  fontSize: '20px',
                  padding: '5px', 
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                }}>
                  World Conquest Project made in Unity
                </div>
              </Html>
            )}
          </group>
        </>
    </>
  );
};
