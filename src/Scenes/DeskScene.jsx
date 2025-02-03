import { WorkDesk } from "../Items/desk";
import { Environment, Html, OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { Game} from "../Items/Game";
import { Chess } from "../Items/Chess";
import { Book } from "../Items/Book";

export const DeskScene = () => {
  const [hoveredProject1, setHoveredProject1] = useState(false);
  const [hoveredChess, setHoveredChess] = useState(false);
  const [hoveredBook, setHoveredBook] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClickProject1 = () => {
    window.open("/Html_Pages/Project1.html", "_blank");
  };

  const handleClickChess = () => {
    window.open("/Html_Pages/Project2.html", "_blank");
  };
  const handleClickBook = () => {
    window.open("/Html_Pages/Project3.html", "_blank");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <OrbitControls/>
      <group>
        <Environment preset="sunset" />
        <ambientLight intensity={1} />
        <group scale={4} position={[-1, -4, -1]} rotation={[0, Math.PI / 4, 0]}>
          <WorkDesk />
        </group>

        <Html position={[0, 2, 0]} center>
          <div
            style={{
              background: '#DAB1DA',
              borderRadius: '10px',
              width: '1000px',
              fontSize: '100px',
              padding: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              marginTop: '2px',
              opacity: fadeOut ? 0 : 1,
              transition: 'opacity 2s ease-in-out',
            }}
          >
            Welcome to Project page
          </div>
        </Html>
      </group>

      {/* Project1 Section */}
      <group position={[-2.5, -0.35, 0.5]} rotation={[0, 90.3, 0]} scale={0.015}>
        <mesh
          scale={hoveredProject1 ? 1.5 : 1}
          onPointerOver={() => setHoveredProject1(true)}
          onPointerOut={() => setHoveredProject1(false)}
          onClick={handleClickProject1}
        >
          <Game/>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Tooltip for Project1 */}
        {hoveredProject1 && (
          <Html position={[0, 2, 0]} center>
            <div
              style={{
                background: 'white',
                borderRadius: '10px',
                width: '200px',
                fontSize: '20px',
                padding: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              World Conquest Project made in Unity
            </div>
          </Html>
        )}
      </group>

      {/* Project2 Section */}
      <group position={[0.5, -0.15, -2.5]} rotation={[0, 0.7, 0]} scale={1}>
        <mesh
          scale={hoveredChess ? 1.2 : 1}
          onPointerOver={() => setHoveredChess(true)}
          onPointerOut={() => setHoveredChess(false)}
          onClick={handleClickChess}
        >
          <Chess />
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Tooltip for Chess */}
        {hoveredChess && (
          <Html position={[0, 2, 0]} center>
            <div
              style={{
                background: 'white',
                borderRadius: '10px',
                width: '200px',
                fontSize: '20px',
                padding: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              Chess Game Scene
            </div>
          </Html>
        )}
      </group>
      {/* Project3 Section */}
      <group position={[-1,  -0.225, -1]} rotation={[0, 179.8, 0]} scale={0.5}>
        <mesh
          scale={hoveredBook ? 1.3 : 1}
          onPointerOver={() => setHoveredBook(true)}
          onPointerOut={() => setHoveredBook(false)}
          onClick={handleClickBook}
        >
          <Book/>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        {/* Tooltip for Book */}
        {hoveredBook && (
          <Html position={[0, 2, 0]} center>
            <div
              style={{
                background: 'white',
                borderRadius: '10px',
                width: '200px',
                fontSize: '20px',
                padding: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              Book project
            </div>
          </Html>
        )}
      </group>
    </>
  );
};
