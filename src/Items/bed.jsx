import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Bed(props) {
  const { nodes, materials } = useGLTF('models/bed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pillow.geometry} material={materials['lambert2SG.002']} position={[-3.261, 2.625, 0]} rotation={[0, 1.517, 0]} scale={[0.889, 0.552, 0.705]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.039']} position={[0, 1.521, 0]} scale={[5.607, 0.641, 3.023]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.040']} position={[0, 0.478, 0]} scale={[6.814, 0.525, 3.945]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.041']} position={[-6.437, 1.879, 0]} rotation={[0, 0, Math.PI / 2]} scale={[1.91, 0.525, 3.945]} />
    </group>
  )
}

useGLTF.preload('models/bed.glb')
