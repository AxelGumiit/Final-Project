/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/laptop.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('models/laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.185, 0.057, -0.204]} rotation={[0, -1.564, 0]} scale={[-0.076, -0.021, -0.083]}>
        <mesh geometry={nodes.Cube023.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Cube023_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube023_2.geometry} material={materials['keyboard.001']} />
        <mesh geometry={nodes.Cube023_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube023_4.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube023_5.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cube023_6.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube023_7.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube023_8.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Cube023_9.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Cube023_10.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cube023_11.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Cube023_12.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube023_13.geometry} material={materials.keybiard} />
        <mesh geometry={nodes.Cube023_14.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cube023_15.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Cube023_16.geometry} material={materials['Material.009']} />
      </group>
      <mesh geometry={nodes.esc.geometry} material={materials['Material.017']} position={[-1.383, 0.078, -0.35]} scale={0.065} />
      <mesh geometry={nodes.screen.geometry} material={materials.main} position={[-0.015, 0, 0.258]} rotation={[0, -1.564, 0]} scale={[-1.165, -0.036, -1.841]} />
      <group position={[-0.025, 1.061, -1.269]} rotation={[0, -1.564, -1.197]} scale={[-1.165, -0.036, -1.841]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.cover} />
      </group>
      <mesh geometry={nodes.f1.geometry} material={materials['Material.018']} position={[-1.17, 0.078, -0.352]} scale={0.065} />
      <mesh geometry={nodes.f2.geometry} material={materials['Material.019']} position={[-0.957, 0.078, -0.35]} scale={0.065} />
      <mesh geometry={nodes.f3.geometry} material={materials['Material.020']} position={[-0.766, 0.078, -0.353]} scale={0.065} />
      <mesh geometry={nodes.f4.geometry} material={materials['Material.021']} position={[-0.547, 0.078, -0.351]} scale={0.065} />
      <mesh geometry={nodes.f5.geometry} material={materials['Material.022']} position={[-0.35, 0.078, -0.356]} scale={0.065} />
      <mesh geometry={nodes.f6.geometry} material={materials['Material.023']} position={[-0.16, 0.078, -0.359]} scale={0.065} />
      <mesh geometry={nodes.f7.geometry} material={materials['Material.024']} position={[0.063, 0.078, -0.358]} scale={0.065} />
      <mesh geometry={nodes.f8.geometry} material={materials['Material.025']} position={[0.269, 0.078, -0.358]} scale={0.065} />
      <mesh geometry={nodes.f9.geometry} material={materials['Material.026']} position={[0.47, 0.078, -0.36]} scale={0.065} />
      <mesh geometry={nodes.f10.geometry} material={materials['Material.027']} position={[0.673, 0.078, -0.362]} scale={0.065} />
      <mesh geometry={nodes.f11.geometry} material={materials['Material.028']} position={[0.895, 0.078, -0.369]} scale={0.065} />
      <mesh geometry={nodes.f12.geometry} material={materials['Material.029']} position={[1.1, 0.078, -0.367]} scale={0.065} />
      <mesh geometry={nodes['1'].geometry} material={materials['Material.031']} position={[-1.176, 0.078, -0.19]} scale={0.065} />
      <mesh geometry={nodes['2'].geometry} material={materials['Material.032']} position={[-0.985, 0.078, -0.193]} scale={0.065} />
      <mesh geometry={nodes['3'].geometry} material={materials['Material.033']} position={[-0.793, 0.078, -0.191]} scale={0.065} />
      <mesh geometry={nodes['4'].geometry} material={materials['Material.034']} position={[-0.605, 0.078, -0.194]} scale={0.065} />
      <mesh geometry={nodes['5'].geometry} material={materials['Material.035']} position={[-0.403, 0.078, -0.195]} scale={0.065} />
      <mesh geometry={nodes['6'].geometry} material={materials['Material.036']} position={[-0.212, 0.078, -0.193]} scale={0.065} />
      <mesh geometry={nodes['7'].geometry} material={materials['Material.037']} position={[-0.017, 0.078, -0.196]} scale={0.065} />
      <mesh geometry={nodes['8'].geometry} material={materials['Material.038']} position={[0.177, 0.078, -0.194]} scale={0.065} />
      <mesh geometry={nodes['9'].geometry} material={materials['Material.039']} position={[0.375, 0.078, -0.197]} scale={0.065} />
      <mesh geometry={nodes['0'].geometry} material={materials['Material.040']} position={[0.579, 0.078, -0.195]} scale={0.065} />
      <mesh geometry={nodes['-'].geometry} material={materials['Material.041']} position={[0.772, 0.078, -0.231]} scale={0.085} />
      <mesh geometry={nodes['='].geometry} material={materials['Material.042']} position={[0.978, 0.078, -0.22]} scale={0.065} />
      <mesh geometry={nodes.backspace.geometry} material={materials['Material.043']} position={[1.208, 0.081, -0.242]} scale={0.057} />
    </group>
  )
}

useGLTF.preload('models/laptop.glb')
