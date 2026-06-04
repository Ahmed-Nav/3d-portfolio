'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with tailored kinetics for heavy WebGL frames
        const lenis = new Lenis({
            duration: 1.4,          // How long the smooth transition animation lasts (in seconds)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom cinematic ease-out curve
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.05,  // Subtly amplifies scroll sensitivity for smooth responses
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Connect Lenis straight into the browser's native animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Clean up scroll bindings when the component unmounts to prevent memory leaks
        return () => {
            lenis.destroy();
        };
    }, []);

    return <div className="w-full h-full">{children}</div>;
}