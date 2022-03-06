import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Environment,
    ContactShadows,
    OrbitControls,
} from '@react-three/drei'
import styled from 'styled-components';
import ContactBar from './ContactBar';
import Model from '../components/MacbookModel';
import Loader from '../components/Loader';

const screenSml = 800;
const screenMed = 992;
const screenLrg = 1200;

const Content = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;

    @media(max-width: ${screenSml}px) {
        flex-direction: column;
        width: 100%;
        > * + * {
            margin-top: 2rem;
        }
    }
`;

const TextContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 1;
    
    > * + * {
        margin-top: 2rem;
    }

    @media(max-width: ${screenSml}px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

const CanvasContainer = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;

    @media(max-width: ${screenSml}px) {
        display: none;
    }
    overflow: visible;
`;

const CanvasArea = styled.div`
    width: 500px;
    height: 100%;
    pointer-events: none;

    @media(min-width: ${screenSml}px) {
        position: absolute;
        left: -100px;
        width: 600px;
        height: 600px;
        pointer-events: none;
    }

    @media(min-width: ${screenMed}px) {
        position: absolute;
        left: -150px;
        width: 700px;
        height: 700px;
        pointer-events: all;
    }

    @media(min-width: ${screenLrg}px) {
        position: absolute;
        left: -150px;
        width: 800px;
        height: 800px;
        pointer-events: all;
    }
`;

export default function Landing() {
    return (
        <Content>
            <Center>
                <TextContainer>
                    <h1>Designer // Developer</h1>
                    <p style={{ marginBottom: '1rem' }}>Full stack designer and developer from Ann Arbor, Michigan. Graduating from the University of Michigan College of Engineering with a MSE in Computer Science in December 2022.</p>
                    <ContactBar />
                </TextContainer>

                <CanvasContainer>
                    <CanvasArea>
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
                    </CanvasArea>
                </CanvasContainer>
            </Center>
        </Content>
    )
}