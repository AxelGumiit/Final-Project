import { Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Physics, RigidBody, CylinderCollider, CuboidCollider } from "@react-three/rapier";
import { AvatarController } from "../components/AvatarController.jsx";
import { Html } from '@react-three/drei';
import { DeskScene } from "./DeskScene.jsx";
import { Room } from "../Items/Room.jsx";
import { Table } from "../Items/Table.jsx";
import { Bed } from "../Items/Bed.jsx";
import { Rug } from "../Items/Rug.jsx";
import { Computer } from "../Items/Computer.jsx";
import { GameMachine } from "../Items/GameMachine.jsx";
import { ComputerScene } from "./ComputerScene.jsx";



export const Experience = () => {
  const [hoveredButton, setHoveredButton] = useState(false);
  const [scene, setScene] = useState("main");
  const [hoveredTable, setHoveredTable] = useState(false);
  const [hoveredGame, setHoveredGame] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [hoveredTable2, setHoveredTable2] = useState(false);
  const [hoveredBed, setHoveredBed] = useState(false);
  const [isNight, setIsNight] = useState(false); 
  const [avatarVisible, setAvatarVisible] = useState(true); 
  const [infoContent, setInfoContent] = useState("")

  const toggleDayNight = () => {
    setIsNight(!isNight);
  };

  const handleAvatarClick = () => {
    setAvatarVisible(!avatarVisible); 
  };

  const handleClickDesk = () => {
    setScene("deskScene");
  };

  const handleClickGame = () => {
    window.open("/Html_Pages/SnakeGame.html", "_blank");
  };

  const handleClickComputer = () => {
    setScene("computerScene");
  };

  const toggleControls = () => {
    setShowInfo(!showInfo);
    if (!showInfo) {
      setInfoContent("The controls for the Avatar are: <strong>WASD</strong> for movement<br/><br/><strong>Hover and Click</strong>  on the objects to Interact<br/><br/> This Scene replicates my room");  


    }
  };

  const closeInfoPanel = () => {
    setShowInfo(false);
    setScene("main"); 
  };


  return (
    <>



      {scene === "main" && (
        <>
          <Environment preset="sunset" />
          <OrbitControls/>
          <ambientLight intensity={0.5} />
          <group position={[-2, -0.45,-2.8]} scale={0.5}><Rug/></group>

          <Physics>
            <group position-y={-1}>
              <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2}>
                <CylinderCollider args={[1, 10]} />
                
                <group scale={0.15} position={[0, 1, 0]}>
                  <Room />
                </group>

                
                <RigidBody type="fixed" colliders="hull">
                  <CuboidCollider args={[0.5, 10, 10]} position={[-4, 5, 0]} />
                  <CuboidCollider args={[0.5, 10, 10]} position={[4, 5, 0]} />
                  <CuboidCollider args={[10, 10, 0.5]} position={[0, 5, -4]} />
                  <CuboidCollider args={[10, 10, 0.5]} position={[0, 5, 4]} />
                </RigidBody>
                

                {/* Desk object */}
                <group
                  position={[2.5, 1, 2]} 
                  rotation={[0, -89.52, 0]}
                  scale={0.3}
                  onClick={avatarVisible ? handleClickDesk : undefined}
                  onPointerOver={() => setHoveredTable(true)} 
                  onPointerOut={() => setHoveredTable(false)} 
                >
                  <RigidBody
                  type="fixed"
                  colliders="cuboid"
                  detection="continuous"
                  >
                    <mesh scale={hoveredTable ? 1.2 : 1}>
                      <Table />
                      <mesh position={[0,1.5,0]}>
                      <boxGeometry args={[8, 3, 3]} />
                      <meshStandardMaterial opacity={0} transparent={true} />
                      </mesh>
                    </mesh>
                  </RigidBody>

                  {hoveredTable && (
                    <Html position={[0, 6, 0]} center>
                      <div style={{ 
                         background: 'gold', 
                        borderRadius: '10px', 
                        width: '100%',
                        fontSize: '20px',
                        padding: '5px', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        whiteSpace: 'nowrap'
                      }}>
                        Check Out the Project
                      </div>
                    </Html>
                  )}
                </group> 
              </RigidBody>
                  
              {/* Computer object */}
              <group
                  position={[-3, 0.5, 2]} 
                  rotation={[0, 89.52, 0]}
                  scale={0.3}
                  onClick={avatarVisible ? handleClickComputer : undefined}
                  onPointerOver={() => setHoveredTable2(true)} 
                  onPointerOut={() => setHoveredTable2(false)} 
                >
                  <RigidBody
                  type="fixed"
                  colliders="cuboid"
                  detection="continuous"
                  >
                    <mesh scale={hoveredTable2 ? 1.1 : 1}>
                      <Computer/>
                      <mesh position={[0,2.5,0]}>
                      <boxGeometry args={[8, 5, 4]} />
                      <meshStandardMaterial opacity={0} transparent={true} />
                      </mesh>
                      
                    </mesh>
                  </RigidBody>

                  {hoveredTable2 && (
                    <Html position={[0, 6, 0]} center>
                      <div style={{ 
                        background: 'gold',  
                        borderRadius: '10px', 
                        width: '100%',
                        fontSize: '20px',
                        padding: '5px', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                      }}>
                        Contact
                      </div>
                    </Html>
                  )}
                </group> 

                {/* GameMachine */}
              <group
                  position={[-2.9, 0.5, -1]} 
                  rotation={[0, 358.11, 0]}
                  scale={0.4}
                  onPointerOver={() => setHoveredGame(true)} 
                  onPointerOut={() => setHoveredGame(false)} 
                  onClick={avatarVisible ? handleClickGame : undefined}
                >
                  <RigidBody
                  type="fixed"
                  colliders="cuboid"
                  detection="continuous"
                  >
                    <mesh scale={hoveredGame ? 1.1 : 1}>
                      <GameMachine/>
                      <mesh position={[0,2.8,0]}>
                      <boxGeometry args={[2, 5, 3]} />
                      <meshStandardMaterial opacity={0} transparent={true} />
                      </mesh>
                    </mesh>
                  </RigidBody>

                  {hoveredGame && (
                    <Html position={[0, 7, 0]} center>
                      <div style={{ 
                        background: 'gold', 
                        borderRadius: '10px', 
                        width: '100%',
                        fontSize: '20px',
                        padding: '5px', 
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        whiteSpace: 'nowrap'
                      }}>
                        Play Game
                      </div>
                    </Html>
                  )}
                </group> 

                
              {/* Bed object */}    
              <group   
                position={[2.6, 0.5, -1.9]} 
                rotation={[0, -89.53, 0]}
                scale={0.2}
                onPointerOver={() => setHoveredBed(true)} 
                onPointerOut={() => setHoveredBed(false)} 
                onClick={() => { toggleDayNight(); handleAvatarClick(); }}
                
              >
                <RigidBody type="fixed" colliders="cuboid">
                  <mesh scale={hoveredBed ? 1.2 : 1}>
                    <Bed />
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial transparent opacity={0} />
                  </mesh>

                  
                </RigidBody>
              </group>
              
              <ambientLight intensity={isNight ? -1.5 : 1} /> 
              <directionalLight 
                intensity={isNight ? 0.1 : 1} 
                position={[5, 5, 5]} 
                color={isNight ? 'skyblue' : 'yellow'} 
              />
              <color attach="background" args={isNight ? ['black'] : ['#87CEEB']} />
              
              {avatarVisible && (
                <group position={[2,0,-1.9]}>
                  <AvatarController />
                </group>
              )}
            </group>
          </Physics>
                {/* 3D Interactive Mesh Button */}
      <group
        position={[-4, 2, -3]}
        onPointerOver={() => setHoveredButton(true)}
        onPointerOut={() => setHoveredButton(false)}
        onClick={toggleControls}
      >
        <mesh position={[1,0.5,-0.5]}>
          <boxGeometry args={[1, 0.5, 0.2]} />
          
          <meshStandardMaterial color={hoveredButton ? "lightblue" : "green"} />
          {hoveredButton && (
            <Html position={[0, 0.8, 0]} center>
              <div
                style={{
                  background: "gold",
                  borderRadius: "10px",
                  padding: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                  fontSize: "20px",
                }}
              >
                Toggle For Information
              </div>
            </Html>
          )}
        </mesh>
      </group>

      {/* Information Panel (Popup) */}
      {showInfo && (
        <Html position={[0, 0, 0]} center>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              color: "#00ffcc",  /* Neon color */
              borderRadius: "15px",
              padding: "30px",
              width: "60vw",  /* Adjusted for better responsive design */
              height: "50vh",
              textAlign: "center",
              fontSize: "36px",
              boxShadow: "0 0 25px rgba(0, 255, 204, 0.8)", /* Glowing neon effect */
              fontFamily: "'Orbitron', sans-serif",
              transform: "scale(1.05)",  /* Slight zoom effect */
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} /* Hover zoom */
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} /* Reset zoom */
          >
            <h2 style={{ fontSize: "48px", marginBottom: "20px", color: "#ff00ff" }}>Information</h2>
            <div
              style={{
                fontSize: "28px",
                lineHeight: "1.6",
                color: "#00ffff", /* Neon cyan */
              }}
              dangerouslySetInnerHTML={{ __html: infoContent }} // Render the HTML content
            />
            <button
              onClick={closeInfoPanel}
              style={{
                padding: "15px 25px",
                backgroundColor: "#ff0055", /* Neon red */
                marginTop: "30px",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "18px",
                boxShadow: "0 0 15px rgba(255, 0, 85, 0.6)", /* Glowing effect */
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 0 30px rgba(255, 0, 85, 1)'}  /* Glowing hover */
              onMouseLeave={(e) => e.target.style.boxShadow = '0 0 15px rgba(255, 0, 85, 0.6)'}  /* Reset glow */
            >
              Close
            </button>
          </div>
        </Html>

      )}
        </>
      )}

      {scene === "deskScene" && <DeskScene />}
      {scene === "computerScene" && <ComputerScene />}
      
    </>
  );
};
