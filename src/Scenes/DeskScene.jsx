import { useState} from 'react';
import homeIcon from "../assets/home.png"
import { Environment, Html, PerspectiveCamera } from '@react-three/drei';
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
    window.open("/Html_Pages/Project1.html");
  };

  const handleClickChess = () => {
    window.open("/Html_Pages/Project2.html")
  };

  const handleClickBook = () => {
    window.open("/Html_Pages/Project4.html");
  };
  const handleClickLaptop = () => {
    window.open("/Html_Pages/Project3.html");
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
            <group position={[-4,3,0]}><ContactMenu/></group>


            {/* Fixed home button that won't be affected by OrbitControls */}
            <Html position={[-11, 8, -3]}>
          
            <img 
                src={homeIcon} 
                alt="Return to Home"
                style={{
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                  backgroundColor: "transparent", 
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)", 
                  border: "2px solid rgba(0, 255, 255, 0.8)", 
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", 
                }}
                onClick={handleReturnHome}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)"; // Slight zoom-in effect on hover
                  e.target.style.boxShadow = "0 0 25px rgba(0, 255, 255, 1)"; // Enhanced glowing effect
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)"; // Revert back to original size
                  e.target.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.6)"; // Revert glowing effect
                }}
              />
            </Html>

            <Html position={[0, 5, 0]} center>
            <div
              style={{
                borderRadius: '20px',
                width: '1000px',
                fontSize: '100px',
                padding: '20px',
                marginTop: '2px',
                color: 'white',
                background: 'linear-gradient(45deg, #00bcd4, #8e24aa)',
                textAlign: 'center',
                fontFamily: "'Orbitron', sans-serif",
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)',
                animation: 'glowAnimation 2s infinite alternate',
                backdropFilter: 'blur(8px)',
                transform: 'scale(1.05)',
              }}
            >
              Welcome to the Project Page
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
                  background: "linear-gradient(135deg, #6a0dad, #ff007f)",
                  borderRadius: "15px",
                  width: "250px",
                  fontSize: "22px",
                  padding: "15px",
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "'Orbitron', sans-serif",
                  boxShadow: "0 0 30px rgba(255, 0, 255, 0.7)",
                  animation: "pulse 2s infinite alternate",
                  backdropFilter: "blur(10px)",
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
                  background: "linear-gradient(135deg, #00bcd4, #8e24aa)",
                  borderRadius: "15px",
                  width: "250px",
                  fontSize: "22px",
                  padding: "15px",
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "'Orbitron', sans-serif",
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.7)",
                  animation: "pulse 2s infinite alternate",
                  backdropFilter: "blur(10px)",
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
              <Html position={[0, 4, 0]} center>
                <div
                  style={{
                  background: "linear-gradient(135deg, #00bcd4, #8e24aa)",
                  borderRadius: "15px",
                  width: "250px",
                  fontSize: "22px",
                  padding: "15px",
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "'Orbitron', sans-serif",
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.7)",
                  animation: "pulse 2s infinite alternate",
                  backdropFilter: "blur(10px)",
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
              <Html position={[0, 5, 0]} center>
                 <div
                  style={{
                  background: "linear-gradient(135deg, #00bcd4, #8e24aa)",
                  borderRadius: "15px",
                  width: "250px",
                  fontSize: "22px",
                  padding: "15px",
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "'Orbitron', sans-serif",
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.7)",
                  animation: "pulse 2s infinite alternate",
                  backdropFilter: "blur(10px)",
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
