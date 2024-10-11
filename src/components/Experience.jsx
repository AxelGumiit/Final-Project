import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar2 } from "./Avatar2";

export const Experience = () => {
  return (
    <>
    <Environment preset="sunset"></Environment>
    <ambientLight intensity={0.5}></ambientLight>
    
      <group scale={1}><Avatar2/></group>
      <mesh rotation-x = {-Math.PI /2} position-y={-0.001}>
      <planeGeometry args ={[10,10]}/>
      <meshStandardMaterial color="lightpurple"/>
      </mesh>
    </>
  );
};
