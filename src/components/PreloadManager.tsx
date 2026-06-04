'use client';

import { useGLTF } from '@react-three/drei';

export default function PreloadManager() {
    // Preloads ALL optimized GLTF models into a single, centralized context.
    // This guarantees that when the preloader reaches 100%, every asset needed
    // for all three sections is already materialized in memory.
    useGLTF([
        '/models/monolith_opt.glb',
        '/models/sci-fi_server_racks_opt.glb',
        '/models/hologram_projector_with_hologram_opt.glb',
    ]);

    // This component doesn't render anything; it just orchestrates the asset thread!
    return null;
}