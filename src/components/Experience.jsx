import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
    <Environment preset="sunset"></Environment>
    <ambientLight intensity={0.5}></ambientLight>
      <OrbitControls />
      <Avatar/>
    </>
  );
};
