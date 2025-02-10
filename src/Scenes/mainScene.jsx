import { Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Physics, RigidBody, CylinderCollider, CuboidCollider } from "@react-three/rapier";
import { AvatarController } from "../components/AvatarController.jsx";
import { Html } from '@react-three/drei';
import { DeskScene } from "./DeskScene.jsx";
import { Room } from "../Items/room.jsx";
import { Table } from "../Items/table.jsx";
import { Bed } from "../Items/bed.jsx";
import { Rug } from "../Items/rug.jsx";
import { Computer } from "../Items/Computer.jsx";
import { GameMachine } from "../Items/gameMachine.jsx";
import { ComputerScene } from "./computerScene.jsx";

export const Experience = () => {
  const [scene, setScene] = useState("main");
  const handleClickDesk = () => {
    setScene("deskScene");
  };
  const handleClickGame = () => {
    window.open("/Html_Pages/SnakeGame.html", "_blank");
  };
  const handleClickComputer = () => {
    setScene("computerScene");
  };
  const [hoveredTable, setHoveredTable] = useState(false);
  const [hoveredGame, setHoveredGame] = useState(false);
  const [hoveredTable2, setHoveredTable2] = useState(false);
  const [hoveredBed, setHoveredBed] = useState(false);
  const [isNight, setIsNight] = useState(false); 
  const [avatarVisible, setAvatarVisible] = useState(true); // State for avatar visibility

  const toggleDayNight = () => {
    setIsNight(!isNight);
  };


  const handleAvatarClick = () => {
    setAvatarVisible(!avatarVisible); 
  }

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
                intensity={isNight ? 0.5 : 1} 
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
        </>
      )}

      {scene === "deskScene" && <DeskScene />}
      {scene === "computerScene" && <ComputerScene />}
    </>
  );
};
