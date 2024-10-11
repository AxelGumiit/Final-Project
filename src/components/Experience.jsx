import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Avatar2 } from "./Avatar2";

export const Experience = () => {
  return (
    <>
    <Environment preset="sunset"></Environment>
    <ambientLight intensity={0.5}></ambientLight>
      <OrbitControls />
      <group scale={2}><Avatar2/></group>
      w
    </>
  );
};
