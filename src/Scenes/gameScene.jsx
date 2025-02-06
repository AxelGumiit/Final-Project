import { Experience } from "./mainScene";
import { useState } from 'react';
import { Environment, Html } from '@react-three/drei';

export const GameScene = () => {
  const [scene, setScene] = useState("gameScene");

  const handleReturnHome = () => {
    setScene("main");
  };

  return (
    <>
      {scene === "gameScene" && (
        <>
          <group>
            <Environment preset="sunset" />
            <ambientLight intensity={1} />
            <group scale={4} position={[-1, -4, -1]} rotation={[0, Math.PI / 4, 0]}>
            </group>

            <Html position={[-5, 3, -5]} center>
              <img
                src="/images/home.png"
                alt="Return to Home"
                style={{
                  width: '100px',
                  height: '100px',
                  cursor: 'pointer',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                }}
                onClick={handleReturnHome}
              />
            </Html>
          </group>

          
        </>
      )}
      {scene === "main" && <Experience />}
    </>
  );
};
