'use html';
'use client';

import { useState, useEffect } from 'react';
import CanvasContainer from '@/components/CanvasContainer';
import OverlayUI from '@/components/OverlayUI';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0); // Sync bridge for skills section

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < windowHeight * 0.8) {
        setCurrentStage(0);
      } else if (scrollY >= windowHeight * 0.8 && scrollY < windowHeight * 1.8) {
        setCurrentStage(1); // Tech Stack
      } else {
        setCurrentStage(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-[300vh] bg-[#050505] text-white selection:bg-amber-500 selection:text-black">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Preloader />
        <CanvasContainer
          currentStage={currentStage}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          activeCategory={activeCategory} // Pass to 3D Canvas
        />
      </div>

      <OverlayUI
        currentStage={currentStage}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        activeCategory={activeCategory} // Pass to 2D UI Overlay
        setActiveCategory={setActiveCategory}
      />
    </main>
  );
}