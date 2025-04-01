import { useState, useEffect } from 'react';
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Experience } from "./MainScene";
import { Desk } from '../Items/Desk';
import { GameConsole } from '../Items/GameConsole';
import { Chess } from '../Items/Chess';
import { Book } from '../Items/Book';
import { Laptop } from '../Items/Laptop';
import ContactMenu from '../components/ContactMenu';

export const DeskScene = () => {
  const [hoveredProject1, setHoveredProject1] = useState(false);
  const [hoveredChess, setHoveredChess] = useState(false);
  const [hoveredLaptop, setHoveredLaptop] = useState(false)
  const [hoveredBook, setHoveredBook] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [scene, setScene] = useState("DeskScene");

  const handleClickProject1 = () => {
    window.open("/Html_Pages/Project1.html", "_blank");
  };

  const handleClickChess = () => {
    window.open("/Html_Pages/Project2.html", "_blank");
  };

  const handleClickBook = () => {
    window.open("/Html_Pages/Project4.html", "_blank");
  };
  const handleClickLaptop = () => {
    window.open("/Html_Pages/Project3.html", "_blank");
  };

  const handleReturnHome = () => {
    setScene("main");
  };

  return (
    <>
      {scene === "DeskScene" && (
        <>
          <group>
            <Environment preset="sunset" />
            <ambientLight intensity={1} />
            <group position={[-3,3,0]}><ContactMenu/></group>


            {/* Fixed home button that won't be affected by OrbitControls */}
            <Html 
              position={[-12, 9, -3]} 
              style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000 }}>
              <img
                src="/images/home.png"
                alt="Return to Home"
                style={{
                  width: '100px',
                  backgroundColor:'white',
                  height: '100px',
                  cursor: 'pointer',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                }}
                onClick={handleReturnHome}
              />
            </Html>

            <Html position={[0, 5, 0]} center>
              <div
                style={{
                  borderRadius: '10px',
                  width: '1000px',
                  fontSize: '100px',
                  padding: '5px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  marginTop: '2px',
                  color: 'white',
                }}
              >
                Welcome to Project page
              </div>
            </Html>
          </group>

          {/* Perspective Camera */}
          <PerspectiveCamera makeDefault position={[0, 3, 5]} fov={75} near={0.1} far={1000} />

          <group scale={0.6} position={[0, 0, 2]} rotation={[0, 0, 0]}>
            <Desk />
          </group>

          {/* Game Console Interaction */}
          <group position={[0.5, 1.79, 2]} rotation={[0, 89.5, 0]} scale={0.01}>
            <mesh
              scale={hoveredProject1 ? 1.2 : 1}
              onPointerOver={() => setHoveredProject1(true)}
              onPointerOut={() => setHoveredProject1(false)}
              onClick={handleClickProject1}
            >
              <GameConsole />
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>

            {hoveredProject1 && (
              <Html position={[0, 100, 0]} center>
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

          {/* Chess Interaction */}
          <group position={[-1.8,1.89, 2]} rotation={[0, -0.5, 0]} scale={0.5}>
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
                  Chess Game in C++
                </div>
              </Html>
            )}
          </group>

          {/* Book Interaction */}
          <group position={[-0.7, 1.79, 2]} rotation={[0, 180, 0]} scale={0.2}>
            <mesh
              scale={hoveredBook ? 1.3 : 1}
              onPointerOver={() => setHoveredBook(true)}
              onPointerOut={() => setHoveredBook(false)}
              onClick={handleClickBook}
            >
              <Book />
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>

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

          {/* Laptop Interaction */}
          <group position={[1.5, 1.79, 2]} rotation={[0, 100.5, 0]} scale={0.2}>
            <mesh
              scale={hoveredLaptop ? 1.3 : 1}
              onPointerOver={() => setHoveredLaptop(true)}
              onPointerOut={() => setHoveredLaptop(false)}
              onClick={handleClickLaptop}
            >
              <Laptop />
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>

            {hoveredLaptop && (
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
                  3D Website
                </div>
              </Html>
            )}
          </group>

        </>
      )}

      {scene === "main" && <Experience />}
    </>
  );
};

export default DeskScene;
