/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/controls.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/controls.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Text.geometry} material={materials['Material.001']} position={[-0.979, 0, -0.182]} rotation={[1.558, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/controls.glb')
