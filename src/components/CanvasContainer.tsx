'use client';

import React, { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Glitch } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import * as THREE from 'three';
import HeroScene from './scenes/HeroScene';
import StackScene from './scenes/StackScene';
import ProjectsScene from './scenes/ProjectsScene';
import WebGLFallback from './WebGLFallback';
import PreloadManager from './PreloadManager';

// =========================================================================
// 1. REACT ERROR BOUNDARY CLASS COMPONENT
// This safely intercepts any WebGL context loss or crash, preventing 
// your entire website from rendering a broken white or black screen.
// =========================================================================
interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = { hasError: false };

    public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("WebGL Error Intercepted:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

// =========================================================================
// 2. MAIN CANVAS CONTAINER ARCHITECTURE
// =========================================================================
interface CanvasContainerProps {
    currentStage: number;
    activeProject: number;
    setActiveProject: (index: number) => void;
    activeCategory: number;
}

export default function CanvasContainer({
    currentStage,
    activeProject,
    setActiveProject,
    activeCategory
}: CanvasContainerProps) {
    return (
        // Wrap the canvas securely in the WebGL guard we created above
        <WebGLErrorBoundary fallback={<WebGLFallback />}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    failIfMajorPerformanceCaveat: true // Forces fallback if performance is severely degraded
                }}
            >
                <color attach="background" args={['#050505']} />
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <directionalLight position={[-5, 8, 2]} intensity={1} />

                {/* TASK 2.1: The Suspense hook intercepts assets streaming on slow connections.
                  Leaving fallback={null} allows your custom layout preloader to hold the screen
                  safely until the scenes are fully unblocked.
                */}
                <Suspense fallback={null}>
                    <PreloadManager />
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

                    <Glitch
                        delay={new THREE.Vector2(3, 5)}
                        duration={new THREE.Vector2(0.1, 0.3)}
                        strength={new THREE.Vector2(0.1, 0.2)}
                        mode={GlitchMode.SPORADIC}
                        active={currentStage === 1}
                        ratio={0.35}
                    />
                </EffectComposer>
            </Canvas>
        </WebGLErrorBoundary>
    );
}