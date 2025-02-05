import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Rug(props) {
  const { nodes, materials } = useGLTF('models/rug.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rug2.geometry} material={materials['Material.001']} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.594, -0.012, -1]} />
      <mesh geometry={nodes.rug1.geometry} material={materials['Material.002']} position={[-0.002, 0.007, -0.002]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.321, -0.005, -0.7]} />
      <mesh geometry={nodes.Text.geometry} material={materials['Material.003']} position={[-0.948, 0.015, 0.155]} scale={0.458} />
    </group>
  )
}

useGLTF.preload('models/rug.glb')