'use client';

import { Canvas } from '@react-three/fiber';
import { Center, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Glitch } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import { Suspense } from 'react';
import * as THREE from 'three';
import HeroScene from './scenes/HeroScene';
import StackScene from './scenes/StackScene';
import ProjectsScene from './scenes/ProjectsScene';

interface CanvasContainerProps {
    currentStage: number;
    activeProject: number;
    setActiveProject: (index: number) => void;
    activeCategory: number;
}

export default function CanvasContainer({ currentStage, activeProject, setActiveProject, activeCategory }: CanvasContainerProps) {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true, alpha: false }}
        >
            <color attach="background" args={['#050505']} />
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[-5, 8, 2]} intensity={1} />

            <Suspense fallback={null}>
                <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
                    <Center>
                        <HeroScene isActive={currentStage === 0} />
                        <StackScene isActive={currentStage === 1} activeCategory={activeCategory} />
                        <ProjectsScene
                            isActive={currentStage === 2}
                            activeProject={activeProject}
                            setActiveProject={setActiveProject}
                        />
                    </Center>
                </Float>
            </Suspense>

            <EffectComposer>
                <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.2} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />

                {/* The Operation Glitch Layer: Actively triggers a cybernetic scanning distortion 
      briefly as you click through different skill sectors */}
                <Glitch
                    delay={new THREE.Vector2(3, 5)} // random glitch intervals during standby
                    duration={new THREE.Vector2(0.1, 0.3)}
                    strength={new THREE.Vector2(0.1, 0.2)}
                    mode={GlitchMode.SPORADIC}
                    active={currentStage === 1} // Only operational when inside Act II Section!
                    ratio={0.35}
                />
            </EffectComposer>
        </Canvas>
    );
}