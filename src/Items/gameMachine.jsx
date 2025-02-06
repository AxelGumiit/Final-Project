

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function GameMachine(props) {
  const { nodes, materials } = useGLTF('models/gameMachine.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.stick.geometry} material={materials['Material.004']} position={[1.784, 2.836, -0.458]} rotation={[0, 0, -0.637]} scale={[0.082, 0.166, 0.077]} />
      <mesh geometry={nodes.button.geometry} material={materials['Material.006']} position={[1.565, 2.647, 0.391]} rotation={[0, 0, -0.637]} scale={[0.078, 0.075, 0.076]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.003']} position={[1.888, 2.985, -0.452]} scale={-0.155} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials['screen.001']} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials.neon} />
    </group>
  )
}

useGLTF.preload('models/gameMachine.glb')
