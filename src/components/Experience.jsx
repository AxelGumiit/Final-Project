import { Environment, OrbitControls, Cylinder } from "@react-three/drei";
import { useRef, useState } from "react";
import { Physics, RigidBody, CylinderCollider, CuboidCollider } from "@react-three/rapier";
import { AvatarController } from "./AvatarController.jsx";
import { WorkDesk } from "../Items/desk.jsx";
import { Plane } from "@react-three/drei";
import { Html } from '@react-three/drei';
import { DeskScene } from "../Scenes/DeskScene.jsx";


export const Experience = () => {
  const myMesh = useRef();
  const [scene, setScene] = useState("main");
  const handleClick = () => {
    setScene("deskScene");
  };
  const [hovered, setHovered] = useState(false);

  return (
  
    <>
    {scene === "main" && (
      
        <>
          <OrbitControls/>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
        

          <Physics>
            <group position-y={-1}>
              <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2}>
                <CylinderCollider args={[1, 10]} />
                
                <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]}>
                  <meshStandardMaterial attach="material" color="black" />
                </Plane>

                <RigidBody type="fixed" colliders="hull">
                  <CuboidCollider args={[0.5, 10, 10]} position={[-5, 5, 0]} />
                  <CuboidCollider args={[0.5, 10, 10]} position={[5, 5, 0]} />
                  <CuboidCollider args={[10, 10, 0.5]} position={[0, 5, -5]} />
                  <CuboidCollider args={[10, 10, 0.5]} position={[0, 5, 5]} />
                </RigidBody>

                <group
                  position={[0, 1, 4]}
                  rotation={[0, Math.PI, 0]}
                  onClick={handleClick}
                  onPointerOver={() => setHovered(true)} 
                  onPointerOut={() => setHovered(false)} 
                >
                  <RigidBody type="fixed" colliders="cuboid">
                    <mesh scale={hovered ? 1.2 : 1}>
                      <WorkDesk />
                      <boxGeometry args={[1, 1, 1]} />
                      <meshBasicMaterial transparent opacity={0} />
                    </mesh>
                  </RigidBody>
                  {hovered && (
                    <Html position={[0, 2, 0]} center>
                      <div style={{ 
                        background: 'white', 
                        borderRadius: '10px', 
                        width: '100px',
                        fontSize: '20px',
                        padding: '5px', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                      }}>
                        Check Out the Project
                      </div>
                    </Html>
                  )}
                </group>
              </RigidBody>

              <group   
                position={[2, 0.5, -4]}
                rotation={[0, 270.2, 0]}>
                  
                <RigidBody type="fixed" colliders="cuboid">
                  <WorkDesk/>
                </RigidBody>
              
              </group>
                  
              <AvatarController />
            </group>
          </Physics>
        </>
      )}

      {scene === "deskScene" && <DeskScene />}
    </>
  );
};
