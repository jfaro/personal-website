import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import Model from '../components/MacbookModel'

const ThreePage = () => {

    return (
        <Canvas dpr={[1, 2]} camera={{ position: [-10, 2, -25], fov: 35 }}>

            <pointLight
                position={[10, 10, 10]}
                intensity={1.5} />

            <Suspense fallback={null}>
                <group rotation={[0, Math.PI, 0]}>
                    <Model />
                </group>
                <Environment preset="city" />
            </Suspense>

            <ContactShadows
                // rotation-x={Math.PI / 2}
                position={[-6, -6.5, -8]}
                opacity={1} width={20}
                height={20} blur={2}
                far={5.5} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2} />
        </Canvas>
    )
}
export default ThreePage