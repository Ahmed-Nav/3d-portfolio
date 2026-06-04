'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCursor, Center, Html } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';
import { Model as HologramProjector } from './Hologram_projector_with_hologram';
import { projectsList } from '@/data/projects';

interface SceneProps {
    isActive: boolean;
    activeProject: number;
    setActiveProject: (index: number) => void;
}

export default function ProjectsScene({ isActive, activeProject, setActiveProject }: SceneProps) {
    const groupRef = useRef<THREE.Group>(null);
    const carouselRef = useRef<THREE.Group>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useCursor(hoveredIndex !== null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            const targetScale = isActive ? 1.0 : 0;
            easing.damp3(groupRef.current.scale, [targetScale, targetScale, targetScale], 0.25, delta);

            // ADJUSTED: Moved from -0.35 to 0.1 to clear the left margin text bounding fields
            const targetX = isActive ? 0.1 : 3;
            // ADJUSTED: Lowered from -0.85 to -1.15 to prevent neon rings from clipping your card copy strings
            const targetY = isActive ? -1.15 : -5;

            easing.damp(groupRef.current.position, 'x', targetX, 0.25, delta);
            easing.damp(groupRef.current.position, 'y', targetY, 0.25, delta);
        }

        if (carouselRef.current && isActive) {
            const totalPanels = projectsList.length;
            const arcSpan = Math.PI * 0.6;

            const targetRotationY = activeProject * (arcSpan / (totalPanels - 1));
            easing.damp(carouselRef.current.rotation, 'y', targetRotationY, 0.25, delta);
        }
    });

    return (
        <group ref={groupRef}>
            <Center>
                <HologramProjector />
            </Center>

            {/* CAROUSEL FIXED POSITION:
              - Shifted from [-0.4, 1.25, 0] over to [-1.25, 1.35, 0.2]
              - This pulls the floating cards out of the main dashboard zones and aligns them cleanly on the left!
            */}
            <group ref={carouselRef} position={[-1, 1.35, 0.2]}>
                {projectsList.map((project, index) => {
                    const totalPanels = projectsList.length;

                    const arcSpan = Math.PI * 0.6;
                    const angleOffset = 0;
                    const boundedAngle = -(index * (arcSpan / (totalPanels - 1))) + angleOffset;

                    const radius = 2.15;
                    const posX = Math.sin(boundedAngle) * radius;
                    const posZ = Math.cos(boundedAngle) * radius;

                    const isCurrent = index === activeProject;
                    const isHovered = index === hoveredIndex;

                    return (
                        <group
                            key={project.id}
                            position={[posX, 0, posZ]}
                            rotation={[0, boundedAngle, 0]}
                        >
                            <Html
                                transform
                                distanceFactor={2.4}
                                pointerEvents="auto"
                            >
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveProject(index);
                                    }}
                                    onPointerOver={() => setHoveredIndex(index)}
                                    onPointerOut={() => setHoveredIndex(null)}
                                    className="w-[220px] h-[130px] rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between p-3 select-none text-white font-mono"
                                    style={{
                                        backgroundColor: isCurrent
                                            ? 'rgba(245, 158, 11, 0.12)'
                                            : 'rgba(15, 23, 42, 0.45)',
                                        borderColor: isCurrent
                                            ? 'rgba(245, 158, 11, 0.8)'
                                            : 'rgba(6, 182, 212, 0.2)',
                                        boxShadow: isCurrent || isHovered
                                            ? '0 0 20px rgba(245, 158, 11, 0.3), inset 0 0 10px rgba(245, 158, 11, 0.1)'
                                            : '0 4px 6px rgba(0, 0, 0, 0.3)',
                                        transform: isCurrent ? 'scale(1.05)' : 'scale(1.0)',
                                        opacity: isCurrent ? 1.0 : isHovered ? 0.7 : 0.35,
                                    }}
                                >
                                    <div className="flex justify-between items-start">
                                        <span
                                            className="text-[9px] px-1.5 py-0.5 rounded border uppercase tracking-wider transition-colors duration-300"
                                            style={{
                                                backgroundColor: isCurrent ? 'rgba(120, 53, 4, 0.5)' : 'transparent',
                                                borderColor: isCurrent ? 'rgba(245, 158, 11, 0.3)' : 'rgba(87, 83, 78, 1)',
                                                color: isCurrent ? '#f59e0b' : '#a8a29e'
                                            }}
                                        >
                                            {project.architectureTag.split(' ')[0]}
                                        </span>
                                        <span className="text-[9px] text-stone-600">// 0{index + 1}</span>
                                    </div>

                                    <div className="space-y-1">
                                        <h4
                                            className="text-sm font-black tracking-tight transition-colors duration-300 font-sans"
                                            style={{ color: isCurrent ? '#ffffff' : '#78716c' }}
                                        >
                                            {project.title}
                                        </h4>
                                        <p className="text-[9px] text-stone-400 font-sans line-clamp-2 leading-normal">
                                            {project.tagline}
                                        </p>
                                    </div>
                                </div>
                            </Html>
                        </group>
                    );
                })}
            </group>
        </group>
    );
}