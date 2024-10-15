import { Environment, OrbitControls, Cylinder } from "@react-three/drei";
import { useRef, useState } from "react";
import { Physics, RigidBody, CylinderCollider } from "@react-three/rapier";
import { AvatarController } from "./AvatarController.jsx";



export const Experience = () => {
  const myMesh = useRef();
  const [active, setActive] = useState(false);

  return (
    <>
  
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
    
      <Physics>
        <group position-y={-1}>
          <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2}>
            <CylinderCollider args={[1, 10]} />
            <Cylinder scale={[5, 1, 5]} receiveShadow>
              <meshStandardMaterial color="white" />
            </Cylinder>
        
          </RigidBody>

          <AvatarController/>
          </group>
      </Physics>
      
    
    </>
  );
};
