'use client';

import { useState, useEffect } from 'react';
import CanvasContainer from '@/components/CanvasContainer';
import OverlayUI from '@/components/OverlayUI';
import Preloader from '@/components/Preloader';
import MobileAnimePortfolio from '@/components/mobile/MobileAnimePortfolio'; // Import your mobile component

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0); // Sync bridge for skills section
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // Track device type

  useEffect(() => {
    // 📱 Check device width on mount and on resize
    const checkResponsiveGateway = () => {
      setIsMobile(window.innerWidth < 1024); // Handshake breakpoint at 1024px
    };

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

    // Initialize checks
    checkResponsiveGateway();
    handleScroll();

    window.addEventListener('resize', checkResponsiveGateway);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkResponsiveGateway);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent UI flickering while checking device dimensions
  if (isMobile === null) return <Preloader />;

  // =========================================================================
  // 📱 MOBILE ROUTE: Fires up the action-packed Fire Force view
  // =========================================================================
  if (isMobile) {
    return (
      <main className="bg-[#060608] min-h-screen">
        <MobileAnimePortfolio />
      </main>
    );
  }

  // =========================================================================
  // 💻 DESKTOP ROUTE: Standard 3D WebGL Setup
  // =========================================================================
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

      {/* SEO Crawl Matrix stays active and perfectly indexable on the root level */}
      <section className="sr-only font-sans opacity-0 select-none pointer-events-none absolute bottom-0 left-0" aria-hidden={true}>
        <h2>Naveed - Software Systems Engineer Portfolio Workspace</h2>
        <p>Specialized Technical Proficiencies: Data Structures and Algorithms (DSA), WebGL, Three.js, React Three Fiber, GSAP ScrollTrigger, LLMOps Observability, Vector DB Integration, FAISS, Arize Phoenix, Asynchronous Architecture Execution, Python engines, Vercel deployments, Next.js framework architectures.</p>

        <article>
          <h3>Flowforge - Interactive UI Graph Engine Canvas</h3>
          <p>Interactive visual canvas mapping reactive node workflow visualizers to an optimized, completely deterministic UI graph state coordinator operating fixed at 60 FPS performance bounds.</p>
        </article>

        <article>
          <h3>Project Aegis - Enterprise LLMOps Platform</h3>
          <p>Enterprise observability and LLMOps deployment suite utilizing document ingestion with FAISS vectors and logging integration backed by Arize Phoenix telemetry.</p>
        </article>

        <article>
          <h3>Project Panopticon - Asynchronous Multi-Agent Intelligence Network</h3>
          <p>Multi-agent software configuration running asynchronous backend computations deployed securely via an automated python engine on Render with continuous cron-job uptime validation.</p>
        </article>
      </section>
    </main>
  );
}