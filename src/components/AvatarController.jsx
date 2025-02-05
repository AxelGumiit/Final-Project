import { useState, useRef } from 'react'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import { Controls } from '../App'
import { Avatar } from '../Items/Avatar'

const MOVEMENT_SPEED = 0.1
const MAX_VELOCITY = 2

export const AvatarController = () => {
  const [isMoving, setIsMoving] = useState(false)

  const leftPressed = useKeyboardControls((state) => state[Controls.left])
  const rightPressed = useKeyboardControls((state) => state[Controls.right])
  const backPressed = useKeyboardControls((state) => state[Controls.back])
  const forwardPressed = useKeyboardControls((state) => state[Controls.forward])

  const rigidbody = useRef()
  const isOnFloor = useRef(true)

  useFrame(() => {
    const movement = { x: 0, y: 0, z: 0 }

    const linvel = rigidbody.current.linvel()
    let changeRotate = false
    let moving = false

    if (rightPressed && linvel.x < MAX_VELOCITY) {
      movement.x += MOVEMENT_SPEED
      changeRotate = true
      moving = true
    }
    if (leftPressed && linvel.x > -MAX_VELOCITY) {
      movement.x -= MOVEMENT_SPEED
      changeRotate = true
      moving = true
    }
    if (backPressed && linvel.z < MAX_VELOCITY) {
      movement.z += MOVEMENT_SPEED
      changeRotate = true
      moving = true
    }
    if (forwardPressed && linvel.z > -MAX_VELOCITY) {
      movement.z -= MOVEMENT_SPEED
      changeRotate = true
      moving = true
    }

    if (moving !== isMoving) {
      setIsMoving(moving)
    }

    rigidbody.current.applyImpulse(movement, true)
    if (changeRotate) {
      const angle = Math.atan2(linvel.x, linvel.z)
      character.current.rotation.y = angle
    }
  })

  const character = useRef()
  return (
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true
        }}
      >
        <CapsuleCollider args={[1, 0.4]} position={[0, 1.2, 0]} />
        <group scale={2} ref={character}>
          <Avatar isMoving={isMoving} />
        </group>
      </RigidBody>
    </group>
  )
}