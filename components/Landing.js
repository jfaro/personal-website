import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import ContactBar from './ContactBar';
import Model from '../components/MacbookModel';
import Loader from '../components/Loader';
import styles from "./Landing.module.scss";

const screenSml = 800;
const screenMed = 992;
const screenLrg = 1200;

export default function Landing() {

    return (
        <div className={styles.content}>
            <div className={styles.center}>
                <div className={styles.textContainer}>
                    <h1>Designer // Developer</h1>
                    <p style={{ marginBottom: '1rem' }}>Full stack designer and developer from Ann Arbor, Michigan. Graduating from the University of Michigan College of Engineering with a MSE in Computer Science in December 2022.</p>
                    <ContactBar />
                </div>

                <div className={styles.canvasContainer}>
                    <div className={styles.canvasArea}>
                        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -20], fov: 50 }}>

                            <pointLight
                                position={[10, 10, 10]}
                                intensity={1.5} />

                            <Suspense fallback={<Loader />}>
                                <group rotation={[0, .9 * Math.PI, 0]}>
                                    <Model />
                                </group>
                                <Environment preset="city" />
                            </Suspense>

                            <ContactShadows
                                rotation-x={Math.PI / 2}
                                position={[0, -5, 0]}
                                opacity={1}
                                width={15}
                                height={15}
                                blur={5}
                                far={5} />

                            <OrbitControls
                                enablePan={false}
                                enableZoom={false}
                                minPolarAngle={Math.PI / 2}
                                maxPolarAngle={Math.PI / 2} />
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}