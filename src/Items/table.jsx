

import React from 'react'
import { useGLTF} from '@react-three/drei'

export function Table(props) {
  const group = React.useRef()
  const { nodes, materials } = useGLTF('models/table.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.006']} position={[3.669, 1.467, -1.221]} scale={[0.191, 1.452, 0.185]} />
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[0, 2.767, 0]} scale={[3.984, 0.213, 1.463]} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.004']} position={[-3.709, 1.467, -1.221]} scale={[0.191, 1.452, 0.185]} />
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.002']} position={[3.7, 1.467, 1.197]} scale={[0.191, 1.452, 0.185]} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.005']} position={[-3.709, 1.467, 1.197]} scale={[0.191, 1.452, 0.185]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/table.glb')
