'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { projectsList } from '@/data/projects';
import { Terminal as TerminalIcon, Layers, ExternalLink, ShieldAlert, Mail } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

interface OverlayUIProps {
    currentStage: number;
    activeProject: number;
    setActiveProject: (index: number) => void;
    activeCategory: number;
    setActiveCategory: (index: number) => void;
}

const CyberHeader = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 15, skewX: -10 }}
            animate={{ opacity: 1, y: 0, skewX: 0 }}
            transition={{ delay, duration: 0.4, ease: "easeOut" }}
            className="block"
        >
            {text}
        </motion.span>
    );
};

export default function OverlayUI({ currentStage, activeProject, setActiveProject, activeCategory, setActiveCategory }: OverlayUIProps) {
    const currentProjectData = projectsList[activeProject];

    return (
        <div className="relative z-10 w-full pointer-events-none select-none text-white font-mono">

            {/* BACKGROUND DATA MATRIX LAYER */}
            <div className="absolute inset-0 w-full h-[300vh] opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] mix-blend-screen" />

            {/* ========================================================================= */}
            {/* FLOATING SOCIAL & CONTACT UTILITY NAVIGATION HUB                         */}
            {/* ========================================================================= */}
            <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-4 z-40 pointer-events-auto">
                <motion.a
                    whileHover={{ scale: 1.05, x: -3, borderColor: 'rgba(245, 158, 11, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    href="/documents/Naveed_Resume.pdf" // Make sure your PDF is located exactly here in your public folder!
                    download="Naveed_Software_Systems_Engineer_Resume.pdf"
                    aria-label="Download PDF Resume"
                    className="flex items-center gap-2 px-3 py-2 bg-stone-950/80 border border-amber-500/30 rounded-xl backdrop-blur-md text-amber-400 text-[10px] font-bold tracking-wider shadow-2xl transition-all"
                >
                    <span>CV</span>
                    <span className="text-stone-600">|</span>
                    <span className="text-[8px] animate-pulse text-stone-400">DL_</span>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:naveedahmed151106@gmail.com"
                    aria-label="Send Email Inquiry"
                    className="p-3 bg-stone-950/70 border border-stone-800/80 rounded-xl backdrop-blur-md text-stone-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-xl"
                >
                    <Mail className="w-4 h-4" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Ahmed-Nav"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open GitHub Developer Profile"
                    className="p-3 bg-stone-950/70 border border-stone-800/80 rounded-xl backdrop-blur-md text-stone-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-xl"
                >
                    <GithubIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/naveed-ahmeddev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open LinkedIn Professional Network Profile"
                    className="p-3 bg-stone-950/70 border border-stone-800/80 rounded-xl backdrop-blur-md text-stone-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-xl"
                >
                    <LinkedinIcon className="w-4 h-4" />
                </motion.a>
            </div>

            {/* ========================================================================= */}
            {/* ACT I: PROFESSIONAL HERO DECK (AI & SOFTWARE SYSTEMS)                      */}
            {/* ========================================================================= */}
            <section className="h-screen w-full flex flex-col justify-center items-start px-12 md:px-24 relative overflow-hidden">

                {/* Tactical Professional Header Badge (Actionable Mailto Target Node Bridge) */}
                <motion.a
                    whileHover={{ scale: 1.02, borderColor: 'rgba(245, 158, 11, 0.4)' }}
                    href="mailto:naveedahmed151106@gmail.com"
                    className="absolute top-12 left-12 flex items-center gap-3 text-[10px] text-stone-500 tracking-widest bg-stone-900/40 border border-stone-800/60 px-3 py-1.5 rounded-lg backdrop-blur-sm pointer-events-auto transition-colors group cursor-pointer"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>PORTFOLIO_NODE // CHN_IN</span>
                    <span className="text-stone-700">|</span>
                    <span className="text-stone-400 group-hover:text-amber-400 transition-colors">AVAILABLE FOR ROLES ❯</span>
                </motion.a>

                <div className="max-w-xl pointer-events-auto space-y-5 relative z-10">
                    <AnimatePresence>
                        {currentStage === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-4"
                            >
                                {/* PROMINENT IDENTITY HEADER WRAPPER */}
                                <div className="space-y-3">
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-[10px] font-black uppercase text-amber-400/90 tracking-[0.15em] block border border-amber-500/20 bg-amber-950/20 px-3.5 py-1.5 rounded-lg w-fit"
                                    >
                                        ❯ OPEN TO SWE / AI ENGINEER ROLES AT PRODUCT-FOCUSED TEAMS
                                    </motion.span>

                                    <div className="space-y-1">
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-xs font-bold text-amber-500 tracking-[0.35em] uppercase block"
                                        >
                                            NAVEED AHMED M // AI_SYSTEMS_FULL_STACK_ENGINEER
                                        </motion.span>

                                        {/* Clear, High-Impact Professional Heading Stack */}
                                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-left leading-[0.85] font-sans">
                                            <CyberHeader text="AI & FULL-STACK" delay={0.05} />
                                            <CyberHeader text="ENGINEER" delay={0.1} />
                                            <span className="block text-xl md:text-2xl font-mono font-light tracking-tight mt-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                                                &nbsp;// Specializing in AI & 3D Graphics
                                            </span>
                                        </h1>
                                    </div>
                                </div>

                                {/* Matrix Divider Line */}
                                <div className="flex items-center gap-2 w-full max-w-xs">
                                    <div className="h-[1px] bg-amber-500/30 flex-grow" />
                                    <span className="text-[8px] text-amber-500/60 font-mono tracking-widest animate-pulse">CAPABILITIES_</span>
                                    <div className="h-[1px] bg-stone-800 w-12" />
                                </div>

                                <div className="space-y-3">
                                    <div className="text-[10px] text-stone-500 tracking-wider flex items-center gap-2">
                                        <span className="text-amber-500 font-bold">❯ TRAJECTORY:</span>
                                        <span>AI SYSTEMS & FULL-STACK ENGINEER // CHENNAI</span>
                                    </div>

                                    <p className="text-stone-400 font-sans text-xs md:text-sm leading-relaxed max-w-md border-l-2 border-amber-500/30 pl-4">
                                        Full-Stack Systems Engineer specializing in robust web architectures and intelligent autonomous infrastructure. Proven track record of delivering production-grade dashboards, web telemetry suites, and optimized asynchronous workflows for real-world professional clients.
                                    </p>
                                </div>

                                {/* Interactive Scroll Guide */}
                                <motion.div
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="pt-4 flex items-center gap-3 text-[9px] font-mono text-amber-400 tracking-widest bg-amber-950/20 border border-amber-500/10 px-3 py-2 rounded-xl w-fit"
                                >
                                    <span className="inline-block animate-bounce font-bold">↓</span>
                                    <span>SCROLL TO PROCESS CORE ARCHITECTURE AUDIT</span>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* ACT II: TECHNICAL SPECIALIZATIONS (RECRUITER OPTIMIZED)                    */}
            {/* ========================================================================= */}
            <section className="h-screen w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-12 md:px-24 relative">
                <div className="lg:col-span-5 flex flex-col justify-center pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: currentStage === 1 ? 1 : 0, x: currentStage === 1 ? 0 : -40 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                            <p className="font-mono text-[10px] tracking-widest uppercase text-red-500/80">CORE_EXPERTISE_LOADED</p>
                        </div>
                        {/* Clear Professional Skill Header */}
                        <h2 className="text-5xl font-black uppercase tracking-tight text-white font-sans">TECHNICAL EXPERTISE</h2>
                        <p className="text-stone-400 text-xs font-sans leading-relaxed max-w-sm">
                            Audit language fluencies, systems engineering frameworks, and telemetry logging stacks by selecting any module category deck.
                        </p>

                        {/* Left Column: Re-engineered Category Selector Buttons */}
                        <div className="flex flex-col gap-3 pt-2 w-full max-w-sm md:max-w-md">
                            {skillsData.map((category, idx) => {
                                const isSelected = idx === activeCategory && currentStage === 1;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(idx)}
                                        className={`flex items-start justify-between p-4 rounded-xl border text-left transition-all duration-300 gap-4 ${isSelected
                                            ? 'bg-red-500/10 border-red-500 text-red-400 font-bold shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                                            : 'bg-stone-950/20 border-stone-800/40 text-stone-400 backdrop-blur-sm hover:border-stone-700'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className={`font-mono text-[9px] mt-0.5 tracking-tighter ${isSelected ? 'text-red-400' : 'text-stone-600'}`}>
                                                // 0{idx + 1}
                                            </span>
                                            <span className="font-sans text-xs md:text-sm tracking-tight leading-snug">
                                                {category.title}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center items-start lg:pl-12 relative min-h-[350px] w-full">
                    {/* Added AnimatePresence mode wait layer to smoothly fade logs in and out */}
                    <AnimatePresence mode="wait">
                        {skillsData.map((category, idx) => {
                            if (idx !== activeCategory || currentStage !== 1) return null;

                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="max-w-md w-full pointer-events-auto space-y-3.5"
                                >
                                    {/* Top Control Bar Tab */}
                                    <div className="flex justify-between items-center border border-red-500/30 pb-3 bg-stone-950/70 p-4 rounded-xl backdrop-blur-md shadow-[0_0_25px_rgba(239,68,68,0.15)]">
                                        <div className="flex items-center gap-2">
                                            <TerminalIcon className="text-red-500 w-4 h-4 animate-pulse" />
                                            <span className="text-[10px] uppercase text-stone-300 font-bold tracking-tight">Mainframe_Log_Auditor.sh</span>
                                        </div>
                                        <span className="text-[9px] font-bold text-red-400 bg-red-950/40 border border-red-500/30 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(239,68,68,0.25)]">SECURE_FEED</span>
                                    </div>

                                    {/* Interactive Log Component Cards */}
                                    <div className="space-y-3.5">
                                        {category.skills.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ delay: index * 0.06, type: "spring", stiffness: 120 }}
                                                whileHover={{ x: 6, scale: 1.01, border: "1px solid rgba(239, 68, 68, 0.45)" }}
                                                className="bg-stone-950/75 border border-red-500/20 p-4 rounded-xl space-y-2.5 backdrop-blur-md cursor-pointer transition-colors duration-300"
                                                style={{ boxShadow: '0 0 25px rgba(239, 68, 68, 0.1), inset 0 0 12px rgba(239, 68, 68, 0.04)' }}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white font-black text-sm tracking-tight flex items-center gap-2">
                                                        <span className="text-red-500 text-xs opacity-70 group-hover:opacity-100">❯</span>
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-[9px] bg-red-950/60 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-mono font-bold uppercase shadow-[0_0_8px_rgba(239,68,68,0.2)]">
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                <p className="text-[10px] text-cyan-400 bg-black/60 px-3 py-2 rounded-md border border-stone-900 font-mono tracking-tight break-all leading-normal">
                                                    {skill.diagnostic}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </section>

            {/* ========================================== */}
            {/* ACT III: TELEMETRY DECK                    */}
            {/* ========================================== */}
            <section className="h-screen w-full flex flex-col justify-between items-center p-12 md:p-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: currentStage === 2 ? 1 : 0, y: currentStage === 2 ? 0 : -15 }}
                    className="text-center max-w-xl mt-2"
                >
                    <h2 className="text-4xl font-black tracking-wider uppercase text-amber-500 font-sans">ENGINEERED SYSTEMS</h2>
                    <p className="text-stone-500 text-[10px] tracking-widest mt-1 uppercase">
                        Intercept floating node components or trigger hotkeys to parse platform specifications
                    </p>
                </motion.div>

                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full mb-4">
                    <div className="lg:col-span-5 h-full" />

                    <div className="lg:col-span-7 flex flex-col gap-4 relative w-full items-end justify-center">
                        <AnimatePresence mode="wait">
                            {projectsList.map((project, idx) => {
                                if (idx !== activeProject || currentStage !== 2) return null;

                                return (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-xl w-full flex flex-col gap-3.5 pointer-events-auto"
                                    >
                                        <div
                                            className="bg-stone-900/10 border border-amber-500/20 rounded-2xl p-5 backdrop-blur-md shadow-xl"
                                            style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)' }}
                                        >
                                            <div className="flex justify-between items-center border-b border-stone-800/60 pb-3 mb-3">
                                                <div>
                                                    <span className="text-[9px] bg-amber-950/50 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded uppercase tracking-widest">
                                                        {project.architectureTag}
                                                    </span>
                                                    <h3 className="text-3xl font-black tracking-tight mt-1.5 text-white font-sans">{project.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-stone-300 text-xs md:text-sm font-sans leading-relaxed tracking-wide mt-2">
                                                {project.tagline}
                                            </p>

                                            <div className="flex flex-wrap gap-1.5 mt-4">
                                                {project.techStack.map((tech) => (
                                                    <span key={tech} className="text-[10px] bg-stone-900/40 text-stone-400 border border-stone-800/40 px-2.5 py-1 rounded-md">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-stone-950/20 border border-amber-500/10 rounded-xl p-4 text-xs backdrop-blur-md">
                                            <div className="text-stone-500 mb-2.5 font-bold tracking-widest uppercase text-[9px] flex justify-between items-center">
                                                <span className="text-amber-500 flex items-center gap-1.5">⚡ PIPELINE MATRIX DIAGNOSTICS</span>
                                            </div>
                                            <div className="grid grid-cols-1 gap-2.5">
                                                {project.telemetry.map((log) => (
                                                    <div key={log.label} className="flex justify-between border-b border-stone-900/30 pb-1.5 last:border-0 last:pb-0">
                                                        <span className="text-stone-400">❯ {log.label}:</span>
                                                        <span className="text-amber-400 font-bold">{log.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* HIGH-VISIBILITY INTERACTIVE BOTTOM SELECTION MATRIX */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: currentStage === 2 ? 1 : 0, y: currentStage === 2 ? 0 : 20 }}
                    className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto z-20 mb-2 w-full max-w-6xl justify-center"
                >
                    <div className="flex gap-2.5 bg-stone-950/50 border border-stone-800/80 p-2 rounded-2xl backdrop-blur-md shadow-2xl">
                        {projectsList.map((project, idx) => {
                            const isSelected = idx === activeProject;
                            return (
                                <motion.button
                                    key={project.id}
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveProject(idx)}
                                    className={`px-4 py-2.5 rounded-xl border tracking-tight transition-all duration-300 uppercase text-xs font-bold ${isSelected
                                        ? 'bg-amber-500 border-amber-400 text-black font-black shadow-lg shadow-amber-500/30'
                                        : 'bg-stone-900/50 border-stone-800/80 text-stone-400 hover:border-amber-500/40 hover:text-white'
                                        }`}
                                >
                                    ❯ 0{idx + 1} . {project.title.split(' ').pop()}
                                </motion.button>
                            );
                        })}
                    </div>

                    <AnimatePresence mode="wait">
                        {currentProjectData.deploymentUrl ? (
                            <motion.a
                                key={`link-${activeProject}`}
                                href={currentProjectData.deploymentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' }}
                                whileTap={{ scale: 0.96 }}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-stone-900/80 text-amber-400 font-bold border border-amber-500/40 hover:border-amber-400 transition-colors backdrop-blur-md shadow-lg"
                            >
                                <span>LAUNCH_SYSTEM</span>
                                <ExternalLink className="w-4 h-4 text-amber-500" />
                            </motion.a>
                        ) : (
                            <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-stone-900/20 text-stone-600 border border-stone-800/50 backdrop-blur-md cursor-not-allowed">
                                <span>LOCAL_ONLY</span>
                                <ShieldAlert className="w-4 h-4 text-stone-700" />
                            </div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </section>
        </div>
    );
}