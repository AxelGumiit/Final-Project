/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/table.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('models/table.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.597, 2.969, 0.503]} rotation={[-Math.PI, 0.002, -Math.PI]} scale={4.539}>
        <mesh geometry={nodes.laptop_2.geometry} material={materials.metalDark} />
        <mesh geometry={nodes.laptop_2_1.geometry} material={materials.metal} />
        <mesh geometry={nodes.laptop_2_2.geometry} material={materials.metalMedium} />
      </group>
      <group position={[1.597, 2.969, 0.503]} rotation={[-Math.PI, 0.002, -Math.PI]} scale={4.539}>
        <mesh geometry={nodes.laptop_3.geometry} material={materials.metalMedium} />
        <mesh geometry={nodes.laptop_3_1.geometry} material={materials.metalDark} />
        <mesh geometry={nodes.laptop_3_2.geometry} material={materials.metal} />
      </group>
    </group>
  )
}

useGLTF.preload('models/table.glb')
