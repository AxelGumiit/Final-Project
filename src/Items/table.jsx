/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/table.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Table(props) {
  const { nodes, materials } = useGLTF('models/table.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.006']} position={[3.669, 1.467, -1.221]} scale={[0.191, 1.452, 0.185]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[0, 2.767, 0]} scale={[3.984, 0.213, 1.463]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.004']} position={[-3.709, 1.467, -1.221]} scale={[0.191, 1.452, 0.185]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.002']} position={[3.7, 1.467, 1.197]} scale={[0.191, 1.452, 0.185]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.005']} position={[-3.709, 1.467, 1.197]} scale={[0.191, 1.452, 0.185]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.042']} position={[-1.051, 3.198, 0.133]} scale={[0.487, 0.132, 0.579]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.043']} position={[-1.083, 3.194, 0.131]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.49, -0.084, -0.536]} />
      <mesh geometry={nodes.Nintendo_DS.geometry} material={materials.Mat} position={[-2.667, 3.12, 0.321]} rotation={[-Math.PI, 1.508, -Math.PI]} scale={[0.018, 0.012, 0.014]} />
      <group position={[0.438, 3.177, 0.046]}>
        <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat21} />
        <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat23} />
      </group>
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
