'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';
import { Model as Monolith } from './Monolith';

interface SceneProps {
    isActive: boolean;
}

export default function HeroScene({ isActive }: SceneProps) {
    const groupRef = useRef<THREE.Group>(null);
    const coreRef = useRef<THREE.Group>(null);

    // Track normalized pointer vectors manually for extra smooth physics interpolation
    const pointer = useThree((state) => state.pointer);

    useFrame((state, delta) => {
        // 1. Scene Entry / Exit Global Scaler
        if (groupRef.current) {
            const targetScale = isActive ? 0.12 : 0;
            easing.damp3(groupRef.current.scale, [targetScale, targetScale, targetScale], 0.25, delta);

            // 2. Base Spatial Coordinates (Our perfectly framed right-hand anchor point)
            const baseX = isActive ? 2.5 : -5;
            const baseY = isActive ? -0.8 : -4;
            const baseZ = isActive ? -2.5 : -6;

            // 3. MOUSE PARALLAX EFFECT: 
            // Multipliers determine how far the model physically slides when tracking the cursor
            const parallaxX = baseX + (pointer.x * 0.4);
            const parallaxY = baseY + (pointer.y * 0.3);

            easing.damp(groupRef.current.position, 'x', parallaxX, 0.3, delta);
            easing.damp(groupRef.current.position, 'y', parallaxY, 0.3, delta);
            easing.damp(groupRef.current.position, 'z', baseZ, 0.3, delta);

            // 4. MOUSE LOOK-AT ROTATION:
            // Makes the monolith pitch (X) and rotate (Y) to face the cursor position dynamically
            const targetRotationX = (pointer.y * 0.25);
            const targetRotationY = (state.clock.getElapsedTime() * 0.08) + (pointer.x * 0.35);

            easing.damp(groupRef.current.rotation, 'x', targetRotationX, 0.2, delta);
            easing.damp(groupRef.current.rotation, 'y', targetRotationY, 0.2, delta);
        }

        // 5. REACTIVE CORE MATERIAL PULSING & STANDBY GLITCH
        if (coreRef.current && isActive) {
            const time = state.clock.getElapsedTime();

            // Standby core breathing baseline frequency calculation
            const breathingFrequency = Math.sin(time * 2.5) * 0.3;
            // Micro-computation noise spikes (high-speed data flicker simulation)
            const noiseSpike = Math.random() > 0.97 ? Math.random() * 0.6 : 0;

            const targetEmissiveIntensity = 1.5 + breathingFrequency + noiseSpike;

            coreRef.current.traverse((child: THREE.Object3D) => {
                if (child instanceof THREE.Mesh && child.material) {
                    const material = child.material;
                    if (!Array.isArray(material) && 'emissiveIntensity' in material) {
                        const standardMat = material as THREE.MeshStandardMaterial;
                        easing.damp(standardMat, 'emissiveIntensity', targetEmissiveIntensity, 0.1, delta);
                    }
                }
            });
        }
    });

    return (
        <group ref={groupRef}>
            {/* coreRef allows us to tap specifically into the child materials without breaking the master positioning group */}
            <group ref={coreRef}>
                <Center>
                    <Monolith />
                </Center>
            </group>
        </group>
    );
}