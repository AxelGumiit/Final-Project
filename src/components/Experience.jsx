import { Environment, OrbitControls, Cylinder } from "@react-three/drei";
import { useRef, useState } from "react";
import { Physics, RigidBody, CylinderCollider} from "@react-three/rapier";
import { AvatarController } from "./AvatarController.jsx";
import { WorkDesk } from "./desk.jsx";
import { Plane } from "@react-three/drei"






export const Experience = () => {
  const myMesh = useRef();
  const [scene, setScene] = useState("main");
  const handleClick = () => {
    setScene("deskScene");
  };
  const [hovered, setHovered] = useState(false);


 

  return (
    <>
    
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
    
      <Physics>
        <group position-y={-1}>
          <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2}>
            <CylinderCollider args={[1, 10]} />
            
              <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} >
                <meshStandardMaterial attach="material" color="#DAB1DA" />
              </Plane>

           
            
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
            </group>

          </RigidBody>

          <AvatarController/>
          </group>
        
      </Physics>

      {scene === "deskScene" && <DeskScene />}

     

      
      
    </>
  );
};
