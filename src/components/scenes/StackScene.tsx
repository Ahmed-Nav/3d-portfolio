'use html';
'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';
import { Model as ServerRack } from './sci_fi_server';

interface StackProps {
    isActive: boolean;
    activeCategory: number;
}

export default function StackScene({ isActive, activeCategory }: StackProps) {
    const mainGroupRef = useRef<THREE.Group>(null);
    const serverRotationRef = useRef<THREE.Group>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((state, delta) => {
        if (mainGroupRef.current) {
            const targetScale = isActive ? 0.45 : 0;
            const targetX = isActive ? 1.8 : 6;
            const targetY = isActive ? -0.5 : -5;
            const targetZ = isActive ? -0.8 : -5;

            easing.damp3(mainGroupRef.current.scale, [targetScale, targetScale, targetScale], 0.25, delta);
            easing.damp(mainGroupRef.current.position, 'x', targetX, 0.25, delta);
            easing.damp(mainGroupRef.current.position, 'y', targetY, 0.25, delta);
            easing.damp(mainGroupRef.current.position, 'z', targetZ, 0.25, delta);
        }

        if (serverRotationRef.current && isActive) {
            // 1. Core Processing Vibration (High-tech computation effect)
            const time = state.clock.getElapsedTime();
            serverRotationRef.current.position.y = Math.sin(time * 14) * 0.01;

            // 2. Mainframe Rotation Pivot Targeting
            // Rotates based on selection to bring the active column cluster into focal perspective
            const baseFrontFacingRotation = Math.PI;
            const interactiveTargetAngle = baseFrontFacingRotation + (activeCategory * 0.22 - 0.22);
            easing.damp(serverRotationRef.current.rotation, 'y', interactiveTargetAngle, 0.3, delta);

            // 3. Dynamic Hardware Light Core Surge
            // Makes a localized light inside the canvas pulsate and flare up based on the active state
            if (lightRef.current) {
                const surgeIntensity = 2.0 + Math.sin(time * 5) * 0.5;
                easing.damp(lightRef.current, 'intensity', surgeIntensity, 0.2, delta);
                // Shift light source location to follow the active category module
                const targetLightX = (activeCategory - 1) * 0.6;
                easing.damp(lightRef.current.position, 'x', targetLightX, 0.25, delta);
            }
        }
    });

    return (
        <group ref={mainGroupRef}>
            <gridHelper args={[16, 16, '#ef4444', '#1c1917']} position={[0, -1.0, 0]} />

            {/* Localized Hardware Glow System Node */}
            <pointLight
                ref={lightRef}
                color="#ef4444"
                distance={4}
                decay={2}
                position={[0, 0.5, 0.5]}
            />

            <group ref={serverRotationRef} position={[0, 0, 0]}>
                <Center>
                    {/* The Server Rack renders natively, inheriting the ambient glow configurations */}
                    <ServerRack scale={0.08} />
                </Center>
            </group>
        </group>
    );
}