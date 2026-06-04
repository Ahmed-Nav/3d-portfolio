'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, Sparkles, Flame, Terminal, Cpu, BrainCircuit, Anchor, Coins, Compass } from 'lucide-react';
import { skillsData } from '@/data/skills';
import { projectsList } from '@/data/projects';

const shonenSpring = {
    type: "spring",
    mass: 0.3,
    stiffness: 550,
    damping: 12
};

const titanLockSpring = {
    type: "spring",
    mass: 0.6,
    stiffness: 400,
    damping: 16
};

const pirateSlamSpring = {
    type: "spring",
    mass: 0.8,
    stiffness: 280,
    damping: 14
};

const customStyles = `
  @keyframes mangaFlameTop {
    0%, 100% { transform: scaleY(1) rotate(-2deg) skewX(-2deg); filter: blur(0.5px); opacity: 0.8; }
    50% { transform: scaleY(1.1) rotate(2deg) skewX(2deg); filter: blur(0.2px); opacity: 0.95; }
  }
  @keyframes mangaFlameBottom {
    0%, 100% { transform: scaleY(1) rotate(2deg) skewX(2deg); filter: blur(0.5px); opacity: 0.8; }
    50% { transform: scaleY(1.1) rotate(-2deg) skewX(-2deg); filter: blur(0.2px); opacity: 0.95; }
  }
  @keyframes titanLightningStrike {
    0% { opacity: 0; clip-path: polygon(40% 0%, 60% 0%, 48% 35%, 70% 25%, 35% 68%, 58% 62%, 30% 100%, 38% 100%, 48% 66%, 38% 70%, 55% 32%, 42% 36%); background-color: #00ff66; }
    15% { opacity: 1; background-color: #00ff66; filter: drop-shadow(0 0 40px #00ff66) brightness(1.6); }
    30% { opacity: 0.2; background-color: #ffffff; }
    45% { opacity: 1; background-color: #00ff66; filter: drop-shadow(0 0 50px #00ff66); }
    70% { opacity: 0.8; background-color: #047857; }
    100% { opacity: 0; transform: scale(1.05); }
  }
  @keyframes titanScreenShake {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(-4px, 5px) rotate(-1deg); }
    40% { transform: translate(4px, -3px) rotate(1deg); }
    60% { transform: translate(-5px, -2px) rotate(0deg); }
    80% { transform: translate(3px, 4px) rotate(1deg); }
  }
  @keyframes bladeSlashAnimation {
    0% { transform: translateX(-110%) skewX(-35deg); opacity: 1; }
    25% { opacity: 1; background-color: #00ff66; }
    100% { transform: translateX(220%) skewX(-35deg); opacity: 0; }
  }
  @keyframes titanGlowSurge {
    0%, 100% { border-color: #1c1917; filter: drop-shadow(0 0 0px transparent); }
    15% { border-color: #00ff66; filter: drop-shadow(0 0 8px #00ff66); }
    30% { border-color: #1c1917; filter: drop-shadow(0 0 1px rgba(0,255,102,0.2)); }
    45% { border-color: #22c55e; filter: drop-shadow(0 0 12px #22c55e); }
    60% { border-color: #1c1917; filter: drop-shadow(0 0 0px transparent); }
    80% { border-color: #00ff66; filter: drop-shadow(0 0 6px #00ff66); }
  }
  @keyframes electricFlicker {
    0%, 100% { opacity: 0.85; }
    50% { opacity: 1; }
    25% { opacity: 0.75; }
    75% { opacity: 0.9; }
  }
/* 🫧 SABAODY OCEAN BUBBLES FLOATING DRIFT ENGINE */
  @keyframes sabaodyBubbleDrift {
    0% { transform: translateY(105vh) scale(0.8); opacity: 0; }
    10% { opacity: 0.25; }
    90% { opacity: 0.15; }
    100% { transform: translateY(-10vh) scale(1.2) translateX(30px); opacity: 0; }
  }

  /* 🏴‍☠️ SEA LEGEND FLOATING POSTER CALIBRATION */
  @keyframes oceanPosterFloat {
    0% { transform: translateY(0px) rotate(0.5deg); }
    50% { transform: translateY(-6px) rotate(-0.5deg); }
    100% { transform: translateY(0px) rotate(0.5deg); }
  }

  /* 🔥 SUPREME CONQUEROR HAKI AURORA GRADIENT BURST */
  @keyframes supremeHakiAura {
    0%, 100% { transform: scale(1) rotate(0deg); filter: blur(3px); opacity: 0; }
    20% { transform: scale(1.05) rotate(1.5deg) translate(3px, -2px); filter: blur(5px); opacity: 0.65; background-color: #ef4444; }
    50% { transform: scale(0.98) rotate(-1deg) translate(-2px, 3px); filter: blur(4px); opacity: 0.4; background-color: #7c3aed; }
    75% { transform: scale(1.03) rotate(0.5deg) translate(1px, -4px); filter: blur(6px); opacity: 0.7; background-color: #b91c1c; }
  }
`;

export default function MobileAnimePortfolio() {
    const [activeTab, setActiveTab] = useState<'home' | 'skills' | 'projects'>('home');
    const [selectedDivision, setSelectedDivision] = useState(0);
    const [triggerLightning, setTriggerLightning] = useState(false);
    const [triggerSlash, setTriggerSlash] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const calculateScrollRoute = () => {
            if (activeTab !== 'projects') return;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return;
            setScrollPercent((window.scrollY / docHeight) * 100);
        };

        window.addEventListener('scroll', calculateScrollRoute);
        return () => window.removeEventListener('scroll', calculateScrollRoute);
    }, [activeTab]);

    useEffect(() => {
        if (activeTab === 'skills') {
            setTriggerLightning(true);
            const timer = setTimeout(() => setTriggerLightning(false), 650);
            return () => clearTimeout(timer);
        }
    }, [activeTab]);

    const changeDivision = (index: number) => {
        if (index === selectedDivision) return;
        setSelectedDivision(index);
        setTriggerSlash(true);
        setTimeout(() => setTriggerSlash(false), 650);
    };

    const getEmberColor = (index: number) => {
        const colors = ['#ff4500', '#ffaa00', '#ff003c', '#2c2523'];
        return colors[index % colors.length];
    };

    const getTitanParticleColor = (index: number) => {
        const colors = ['#00ff66', '#059669', '#34d399', '#a7f3d0'];
        return colors[index % colors.length];
    };

    const categoryIcons = [Terminal, Cpu, BrainCircuit];

    return (
        <div
            className="min-h-screen bg-[#f5f4f0] text-stone-900 font-sans flex flex-col justify-between overflow-x-hidden relative select-none selection:bg-emerald-500 selection:text-white"
            style={{ animation: triggerLightning ? 'titanScreenShake 0.45s ease-in-out' : 'none' }}
        >

            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            {/* BACKGROUND GRAPHIC INTERCEPT */}
            <div
                className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
                style={{
                    backgroundImage: activeTab === 'skills'
                        ? 'linear-gradient(#e1ded4 1px, transparent 1px), linear-gradient(90deg, #e1ded4 1px, transparent 1px)'
                        : 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: activeTab === 'skills' ? '30px_30px' : '24px_24px',
                    opacity: activeTab === 'skills' ? 0.4 : 0.1
                }}
            />

            {/* AMBIENT PARTICLE LAYER */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                {activeTab === 'home' && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={`home-ember-${i}`}
                        className="absolute"
                        style={{
                            width: i % 3 === 0 ? '5px' : i % 3 === 1 ? '3px' : '2px',
                            height: i % 3 === 0 ? '5px' : i % 3 === 1 ? '7px' : '4px',
                            backgroundColor: getEmberColor(i),
                            left: `${5 + Math.random() * 90}%`,
                            bottom: `-20px`,
                            transform: 'rotate(45deg)',
                        }}
                        animate={{
                            y: ['0vh', '-110vh'],
                            x: ['0px', `${(i % 2 === 0 ? 45 : -45) * Math.random()}px`],
                            rotate: [45, 360 + Math.random() * 360],
                            opacity: [0, 0.9, 0.5, 0]
                        }}
                        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: i * 0.2, ease: "easeOut" }}
                    />
                ))}

                {activeTab === 'skills' && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={`titan-steam-${i}`}
                        className="absolute"
                        style={{
                            width: i % 2 === 0 ? '4px' : '2px',
                            height: i % 2 === 0 ? '4px' : '8px',
                            backgroundColor: getTitanParticleColor(i),
                            left: `${5 + Math.random() * 95}%`,
                            bottom: `-20px`,
                        }}
                        animate={{
                            y: ['0vh', '-110vh'],
                            x: ['0px', `${(i % 2 === 0 ? 30 : -30) * Math.random()}px`],
                            opacity: [0, 0.7, 0.3, 0],
                            filter: ['blur(0px)', 'blur(2px)']
                        }}
                        transition={{ duration: 2.5 + Math.random() * 3, repeat: Infinity, delay: i * 0.15, ease: "linear" }}
                    />
                ))}
            </div>

            {/* THE TITAN LIGHTNING TRANSFORMATION OVERLAY FRAME */}
            {triggerLightning && (
                <div className="fixed inset-0 z-50 pointer-events-none w-screen h-screen bg-transparent">
                    <div className="w-full h-full" style={{ animation: 'titanLightningStrike 0.6s cubic-bezier(0.15, 0.85, 0.35, 1) forwards' }} />
                </div>
            )}

            {/* HEADER HUD */}
            <header className="p-4 bg-[#f5f4f0] border-b-4 border-stone-900 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-1.5">
                    <Flame className={`w-4 h-4 animate-pulse ${activeTab === 'skills' ? 'text-emerald-500' : 'text-orange-500'}`} />
                    <span className="text-[11px] font-black tracking-widest uppercase font-mono">NAVEED // VOL.01</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 border-2 border-stone-900 bg-white font-black uppercase tracking-tight shadow-[2px_2px_0px_#1c1917]">
                    {activeTab === 'home' ? '第1章 // HEROIC' : activeTab === 'skills' ? '第2章 // DISCLOSURE' : '第3章 // ARCHIVE'}
                </span>
            </header>

            {/* MAIN PORTAL AREA */}
            <main className="flex-grow p-6 flex flex-col justify-center items-center relative z-20 w-full">

                {/* SCREEN 1: FIRE FORCE DECK */}
                {activeTab === 'home' && (
                    <div className="w-full max-w-sm space-y-6">
                        <div className="space-y-1 relative">
                            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-1 text-[11px] font-black text-orange-600 tracking-wider font-mono">
                                <span>❯❯ IGNITION_BURST // ACTIVE</span>
                                <Sparkles className="w-3 h-3 fill-orange-500 text-orange-500" />
                            </motion.div>
                            <div className="relative overflow-hidden py-1">
                                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.25, ease: [0.85, 0, 0.15, 1] }} className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform -skew-x-12 origin-left z-0" />
                                <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={shonenSpring} className="text-4xl font-black tracking-tighter uppercase italic text-white relative z-10 px-2 drop-shadow-[2.5px_2.5px_0px_#000]">Naveed Ahmed M</motion.h1>
                            </div>
                            <p className="text-xs font-bold text-stone-500 tracking-tight font-mono mt-1">// AI SYSTEMS & 3D WEB GRAPHICS INTERFACES</p>
                        </div>
                        <div className="relative w-full py-3 px-2">
                            {/* --- TOP FLAMES LAYER --- */}
                            <div
                                className="absolute -top-3 left-6 right-12 h-12 bg-gradient-to-t from-orange-600 to-red-600 z-0 pointer-events-none origin-bottom opacity-80"
                                style={{
                                    clipPath: 'polygon(50% 0%, 63% 38%, 81% 21%, 74% 56%, 100% 43%, 84% 78%, 64% 70%, 51% 100%, 36% 68%, 18% 81%, 23% 53%, 0% 51%, 22% 31%, 35% 44%)',
                                    animation: 'mangaFlameTop 1.2s ease-in-out infinite'
                                }}
                            />
                            <div
                                className="absolute -top-2 left-16 right-20 h-10 bg-gradient-to-t from-yellow-400 to-orange-500 z-0 pointer-events-none origin-bottom"
                                style={{
                                    clipPath: 'polygon(50% 0%, 65% 40%, 85% 25%, 75% 60%, 100% 50%, 82% 80%, 60% 68%, 50% 100%, 40% 68%, 15% 75%, 25% 55%, 0% 45%, 25% 35%, 38% 45%)',
                                    animation: 'mangaFlameTop 0.8s ease-in-out infinite alternate'
                                }}
                            />

                            {/* --- BOTTOM FLAMES LAYER --- */}
                            <div
                                className="absolute -bottom-3 left-10 right-8 h-12 bg-gradient-to-b from-orange-600 to-red-600 z-0 pointer-events-none origin-top opacity-80"
                                style={{
                                    clipPath: 'polygon(50% 100%, 63% 62%, 81% 79%, 74% 44%, 100% 57%, 84% 22%, 64% 30%, 51% 0%, 36% 32%, 18% 19%, 23% 47%, 0% 49%, 22% 69%, 35% 56%)',
                                    animation: 'mangaFlameBottom 1.3s ease-in-out infinite'
                                }}
                            />
                            <div
                                className="absolute -bottom-2 left-20 right-16 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 z-0 pointer-events-none origin-top"
                                style={{
                                    clipPath: 'polygon(50% 100%, 65% 60%, 85% 75%, 75% 40%, 100% 50%, 82% 20%, 60% 32%, 50% 0%, 40% 32%, 15% 25%, 25% 45%, 0% 55%, 25% 65%, 38% 55%)',
                                    animation: 'mangaFlameBottom 0.8s ease-in-out infinite alternate'
                                }}
                            />
                            <motion.div whileTap={{ scale: 0.98 }} className="w-full h-48 border-4 border-stone-900 bg-white relative overflow-hidden shadow-[6px_6px_0px_#1c1917] z-10">
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[35px] border-t-orange-500 border-l-[35px] border-l-transparent z-20" />
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-stone-950/5 border-l-2 border-stone-900 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '6px_6px' }} />
                                <div className="absolute inset-0 flex items-center justify-center z-10"><span className="text-[11px] text-stone-900 font-black tracking-[0.2em] uppercase bg-[#f5f4f0] border-2 border-stone-900 px-4 py-2 shadow-[3px_3px_0px_#000]">[ HERO_ARTWORK_RIG ]</span></div>
                            </motion.div>
                        </div>
                        <p className="text-stone-700 font-medium text-xs leading-relaxed border-l-4 border-orange-500 pl-4 italic">Forging robust software architectures with a specialized focus on autonomous intelligence networks, vector indices, and interactive, frame-stabilized WebGL viewport environments.</p>
                        <div className="grid grid-cols-2 gap-4 pt-1">
                            <a href="mailto:naveedahmed151106@gmail.com" className="flex items-center justify-center gap-2 p-3 border-4 border-stone-900 bg-white text-xs font-black uppercase shadow-[4px_4px_0px_#1c1917]"><Mail className="w-4 h-4 text-orange-500 stroke-[2.5]" /> Connect_Node</a>
                            <a href="/documents/Naveed_Resume.pdf" download className="flex items-center justify-center gap-2 p-3 border-4 border-stone-900 bg-orange-500 text-xs font-black uppercase text-white shadow-[4px_4px_0px_#1c1917]"><FileText className="w-4 h-4 text-white stroke-[2.5]" /> Download_CV</a>
                        </div>
                    </div>
                )}

                {/* SCREEN 2: THE TITAN HARDENING DISCLOSURE INTERFACE */}
                {activeTab === 'skills' && (
                    <div className="w-full max-w-sm space-y-6 relative">

                        {/* MID-EPISODE SCHEMATIC BANNER */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={titanLockSpring}
                            className="p-3 border-4 border-stone-900 bg-[#eadeca] border-double relative overflow-hidden shadow-[4px_4px_0px_#1c1917]"
                        >
                            <div className="absolute -right-6 -bottom-6 w-16 h-16 border-2 border-stone-900/10 rounded-full flex items-center justify-center text-[8px] font-bold text-stone-900/10 rotate-45">SCOUT_DIV</div>
                            <span className="text-[8px] font-black tracking-widest text-stone-500 block uppercase font-mono">PUBLICLY DISCLOSABLE INFORMATION // 公開可能な情報</span>
                            <h2 className="text-base font-black tracking-tight mt-0.5 uppercase text-stone-900 font-sans">
                                TACTICAL CAPABILITY DATABASE
                            </h2>
                        </motion.div>

                        {/* MILITARY REGIMENT DIVISIONS */}
                        <div className="grid grid-cols-3 gap-2.5 relative z-10">
                            {skillsData.map((category, idx) => {
                                const isSelected = idx === selectedDivision;
                                const IconComponent = categoryIcons[idx];

                                return (
                                    <motion.button
                                        key={category.id}
                                        onClick={() => changeDivision(idx)}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-2.5 border-2 rounded-none flex flex-col items-center justify-center gap-1.5 transition-all text-center relative ${isSelected
                                            ? 'bg-stone-900 text-white border-stone-900 shadow-[3px_3px_0px_#00ff66]'
                                            : 'bg-white text-stone-400 border-stone-300 shadow-[2px_2px_0px_#e6e4dc]'
                                            }`}
                                    >
                                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-b border-r border-stone-200 bg-[#f5f4f0]" />
                                        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-b border-l border-stone-200 bg-[#f5f4f0]" />

                                        <IconComponent className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-stone-400'}`} />
                                        <span className="text-[9px] font-black tracking-tighter uppercase leading-none">
                                            {category.id === 'utilities' ? 'LLMOPS' : category.title.split(' ')[0]}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* ⚔️ THE INTERCEPTING OMNI-DIRECTIONAL BLADE SLASH FIELD */}
                        <div className="relative w-full overflow-hidden">
                            {triggerSlash && (
                                <div
                                    className="absolute inset-y-0 left-0 w-full z-30 pointer-events-none"
                                    style={{
                                        height: '100%',
                                        background: 'linear-gradient(90deg, transparent, rgba(0,255,102,0.6) 30%, #fff 50%, rgba(0,255,102,0.6) 70%, transparent)',
                                        animation: 'bladeSlashAnimation 0.65s cubic-bezier(0.25, 1, 0.5, 1) forwards'
                                    }}
                                />
                            )}

                            {/* SKILL CARDS STACK */}
                            <div className="space-y-8 relative py-4 px-2">
                                {skillsData[selectedDivision].skills.map((skill, index) => (
                                    <motion.div
                                        key={`${selectedDivision}-${index}`}
                                        className="relative overflow-visible"
                                        initial={{ opacity: 0, x: -30, scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ ...titanLockSpring, delay: index * 0.05 }}
                                    >

                                        {/* ⚡ Glowing Electric Border SVG */}
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <defs>
                                                <filter id={`electric-glow-${selectedDivision}-${index}`} x="-20%" y="-20%" width="140%" height="140%">
                                                    <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="4" result="noise">
                                                        <animate attributeName="seed" from="1" to="100" dur="0.8s" repeatCount="indefinite" />
                                                    </feTurbulence>
                                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                                                    <feGaussianBlur in="displaced" stdDeviation="0.8" result="blur1" />
                                                    <feGaussianBlur in="displaced" stdDeviation="2.5" result="blur2" />
                                                    <feMerge>
                                                        <feMergeNode in="blur2" />
                                                        <feMergeNode in="blur1" />
                                                        <feMergeNode in="displaced" />
                                                    </feMerge>
                                                </filter>
                                                <linearGradient id={`electric-grad-${selectedDivision}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#00ff66" />
                                                    <stop offset="50%" stopColor="#34d399" />
                                                    <stop offset="100%" stopColor="#059669" />
                                                </linearGradient>
                                            </defs>
                                            <polygon
                                                points="0,0 96,1 100,4 99,45 100,52 98,94 95,100 45,99 38,100 3,98 0,93 1,48 0,35"
                                                fill="none"
                                                stroke={`url(#electric-grad-${selectedDivision}-${index})`}
                                                strokeWidth="1.2"
                                                filter={`url(#electric-glow-${selectedDivision}-${index})`}
                                                className="opacity-95"
                                                style={{
                                                    animation: 'electricFlicker 0.15s infinite alternate'
                                                }}
                                            />
                                        </svg>

                                        {/* 🩸 Anime Blood Splatter - Top Right (Behind Card) */}
                                        <svg className="absolute -top-10 -right-10 w-36 h-36 pointer-events-none z-0 opacity-95" viewBox="0 0 100 100">
                                            <path
                                                d="M50 50 Q55 35 65 20 Q55 42 52 45 Q68 45 85 40 Q62 52 58 52 Q70 65 80 80 Q62 68 55 70 Q48 85 40 95 Q48 72 48 68 Q30 65 15 60 Q38 58 42 55 Q32 38 20 25 Q42 45 50 50 Z"
                                                fill="#8a0303"
                                            />
                                            <path
                                                d="M50 50 Q53 40 60 30 Q53 44 51 46 Q62 46 75 43 Q58 51 55 51 Q62 60 70 70 Q58 62 53 63 Q49 72 44 80 Q49 65 49 62 Q38 60 25 57 Q42 56 44 54 Q38 46 30 35 Q44 48 50 50 Z"
                                                fill="#500000"
                                            />
                                            <circle cx="75" cy="25" r="2.5" fill="#8a0303" />
                                            <circle cx="85" cy="55" r="1.5" fill="#8a0303" />
                                            <circle cx="30" cy="75" r="2" fill="#8a0303" />
                                            <circle cx="62" cy="88" r="2.8" fill="#8a0303" />
                                        </svg>

                                        {/* 🩸 Anime Blood Splatter - Bottom Left (Behind Card) */}
                                        <svg className="absolute -bottom-12 -left-12 w-36 h-36 pointer-events-none z-0 opacity-95" viewBox="0 0 100 100">
                                            <path
                                                d="M40 40 Q38 25 35 10 Q40 28 42 30 Q52 30 68 25 Q48 38 45 40 Q55 52 65 65 Q48 52 44 55 Q40 70 38 90 Q38 60 37 55 Q25 50 10 48 Q30 46 34 44 Q28 32 15 20 Q35 38 40 40 Z"
                                                fill="#8a0303"
                                            />
                                            <path
                                                d="M40 40 Q38 30 36 20 Q40 31 41 32 Q48 32 60 28 Q46 38 44 40 Q51 49 58 58 Q46 49 43 51 Q40 62 38 78 Q38 55 37 52 Q29 48 18 46 Q31 45 34 43 Q31 34 22 25 Q36 38 40 40 Z"
                                                fill="#500000"
                                            />
                                            <circle cx="37" cy="96" r="1.5" fill="#8a0303" />
                                            <circle cx="48" cy="78" r="2" fill="#8a0303" />
                                            <circle cx="22" cy="62" r="1" fill="#8a0303" />
                                        </svg>

                                        {/* TATTERED/SHREDDED CLIPPING BOUNDS CARD EDGE BLOCK */}
                                        <div
                                            className="bg-white border-4 border-stone-900 p-4 shadow-[5px_5px_0px_#1c1917] relative overflow-hidden z-10"
                                            style={{
                                                clipPath: 'polygon(0% 0%, 96% 1%, 100% 4%, 99% 45%, 100% 52%, 98% 94%, 95% 100%, 45% 99%, 38% 100%, 3% 98%, 0% 93%, 1% 48%, 0% 35%)',
                                            }}
                                        >
                                            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-stone-900 z-10" />
                                            <div className="absolute top-2 right-4 w-1 h-1 bg-stone-900 rounded-full z-10" />
                                            <div className="absolute bottom-2 right-4 w-1 h-1 bg-stone-900 rounded-full z-10" />

                                            <div className="flex justify-between items-center pb-2 border-b-2 border-stone-100 pl-2 relative z-10">
                                                <span className="text-xs font-black tracking-tight text-stone-900 uppercase font-sans">
                                                    ⚔️ {skill.name}
                                                </span>
                                                <span className="text-[8px] font-black tracking-widest bg-stone-100 border border-emerald-500/40 text-emerald-700 px-2 py-0.5 font-mono shadow-[1px_1px_0px_#000]">
                                                    [ {skill.level} ]
                                                </span>
                                            </div>

                                            <div className="mt-2.5 bg-[#fcfbf9]/95 border border-stone-200 p-3 relative z-10">
                                                <div className="absolute right-2 top-1 text-[7px] font-black text-emerald-600/30 font-mono tracking-widest">SCOUT_CORE</div>
                                                <p className="text-[10px] text-stone-600 leading-relaxed font-mono font-medium tracking-tight">
                                                    {skill.diagnostic}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center text-[9px] text-stone-400 font-mono tracking-widest uppercase italic pt-1">
                            // SHINGEKI NO KYOJIN SYSTEMS OPERATOR REGISTER
                        </motion.div>

                    </div>
                )}
                {/* ========================================================================= */}
                {/* 🏴‍☠️ SCREEN 3: ONE PIECE VOYAGE LOG DECK (BUBBLES & CONNECTING TRACKS)      */}
                {/* ========================================================================= */}
                {activeTab === 'projects' && (
                    <div className="w-full max-w-sm space-y-12 relative pb-12">

                        {/* THE WEATHERED MARINERS BANNER */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={shonenSpring}
                            className="p-3.5 border-4 border-stone-900 bg-[#eccb9a] relative overflow-hidden shadow-[5px_5px_0px_#1c1917] z-20"
                            style={{ backgroundImage: 'radial-gradient(#bca27e 1.2px, transparent 1.2px)', backgroundSize: '16px_16px' }}
                        >
                            <div className="absolute right-2 top-2 text-stone-900/10"><Anchor className="w-10 h-10 rotate-12" /></div>
                            <span className="text-[8px] font-black tracking-[0.2em] text-amber-900 block font-mono">// GRAND LINE LOG DESPATCH</span>
                            <h2 className="text-base font-black tracking-tighter uppercase text-stone-900 mt-0.5">
                                WANTED VOYAGE ARCHIVE
                            </h2>
                        </motion.div>

                        {/* ========================================================================= */}
                        {/* 🗺️ FIXED INTERISLAND SCROLLING ROUTE ROAD LINE CONNECTOR                  */}
                        {/* ========================================================================= */}
                        <div className="absolute left-[26px] top-[90px] bottom-[40px] w-1 bg-[#1c1917]/20 z-0 pointer-events-none">
                            {/* Proactive scrolling fill height overlay indicator block */}
                            <div
                                className="w-full bg-gradient-to-b from-amber-600 to-red-600 transition-all duration-150 ease-out"
                                style={{ height: `${scrollPercent}%`, boxShadow: '0 0 8px #ea580c' }}
                            />
                        </div>

                        {/* HIGH SEAS BOUNTY POSTER LAYOUT MATRICES */}
                        <div className="space-y-14 relative z-10 w-full pl-6">
                            {projectsList.map((project, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-visible group"
                                    style={{ animation: `oceanPosterFloat ${3.5 + index * 0.5}s ease-in-out infinite alternate` }}
                                >
                                    {/* 🗺️ Active Navigation Tracking Anchor Anchor Pin Node */}
                                    <div className="absolute -left-[33px] top-8 w-4 h-4 bg-[#f5f4f0] border-4 border-stone-900 rounded-full z-30 flex items-center justify-center">
                                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${scrollPercent > (index * 30) ? 'bg-red-600 animate-ping' : 'bg-stone-400'}`} />
                                    </div>

                                    {/* 🔮 SUPREME RED-PURPLE GRADIENT HAKI COMPASS BURST */}
                                    <div
                                        className="absolute -inset-2 z-0 pointer-events-none rounded-none opacity-0 group-active:opacity-100 transition-opacity duration-300"
                                        style={{
                                            clipPath: 'polygon(0% 0%, 98% 2%, 100% 5%, 99% 45%, 100% 55%, 98% 95%, 95% 100%, 45% 99%, 3% 98%, 0% 35%)',
                                            animation: 'supremeHakiAura 0.25s steps(3) infinite'
                                        }}
                                    />

                                    {/* WANTED POSTERS CORE PANEL */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -150, rotate: index % 2 === 0 ? 3 : -3 }}
                                        animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
                                        transition={{ ...pirateSlamSpring, delay: index * 0.12 }}
                                        whileTap={{ scale: 0.98, rotate: 0 }}
                                        className="bg-[#f0e4cf] border-4 border-stone-900 p-5 shadow-[5px_5px_0px_#1c1917] relative z-10 cursor-pointer select-none rounded-none"
                                        style={{
                                            clipPath: 'polygon(0% 0%, 97% 0.5%, 100% 3%, 99.5% 48%, 100% 55%, 99% 96%, 96% 100%, 52% 99.5%, 45% 100%, 4% 99%, 0% 95%, 0.5% 42%, 0% 25%)'
                                        }}
                                    >
                                        <div className="absolute top-2 left-3 text-[6px] font-black font-mono text-amber-900/40 tracking-wider">OP_VOL_01 // SEC_03</div>
                                        <div className="absolute top-2 right-3 text-[6px] font-black font-mono text-amber-900/40 tracking-wider">NEW_WORLD_LINE</div>

                                        {/* POSTER HEADING */}
                                        <div className="text-center space-y-1 pb-2.5 border-b-4 border-double border-stone-900/20">
                                            <span className="text-[8px] font-black tracking-widest text-amber-800 bg-amber-900/10 px-2 py-0.5 rounded-none font-mono">
                                                {project.mobileCategory}
                                            </span>
                                            <h3 className="text-xl font-black uppercase italic tracking-tighter text-stone-900 block font-sans drop-shadow-[1px_1px_0px_#fff]">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* PARCHMENT MANIFEST METRICS LOG TEXT */}
                                        <div className="my-4 p-3 bg-[#e8dcbe] border-2 border-stone-900/20 rounded-none relative">
                                            <p className="text-[10px] text-stone-800 leading-relaxed font-mono font-medium tracking-tight">
                                                {project.tagline}
                                            </p>
                                        </div>

                                        {/* THE REWARD AREA */}
                                        <div className="flex justify-between items-center pt-2 border-t-2 border-dashed border-stone-900/30">
                                            <div className="flex gap-1">
                                                {project.techStack.slice(0, 2).map((t, idx) => (
                                                    <span key={idx} className="text-[8px] font-black border-2 border-stone-900 bg-white px-2 py-0.5 uppercase tracking-tighter shadow-[1.5px_1.5px_0px_#000]">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-1 text-red-800 bg-red-900/5 px-2.5 py-0.5 border-2 border-stone-900 shadow-[2px_2px_0px_#000]">
                                                <span className="text-[10px] font-black tracking-tight font-sans text-stone-900">WANTED:</span>
                                                <span className="text-[10px] font-black tracking-tight font-mono italic text-red-700">
                                                    ฿ {project.bounty}-
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* LOG POSE TRACKING COMPASS FOOTNOTE */}
                        <div className="text-center text-[9px] text-stone-400 font-mono tracking-widest uppercase italic pt-1">
                            // CHART UNCHARTED INFRASTRUCTURES // RECONNAISSANCE_DONE
                        </div>

                    </div>
                )}
            </main>

            {/* TACTICAL NAVIGATION */}
            <nav className="p-3 bg-[#f5f4f0] border-t-4 border-stone-900 sticky bottom-0 z-50 grid grid-cols-3 gap-2 shadow-2xl">
                <button onClick={() => setActiveTab('home')} className={`py-2 text-[11px] font-black uppercase transition-all tracking-tight border-2 ${activeTab === 'home' ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-400 border-stone-200'}`}>01 // CORE</button>
                <button onClick={() => setActiveTab('skills')} className={`py-2 text-[11px] font-black uppercase transition-all tracking-tight border-2 ${activeTab === 'skills' ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-400 border-stone-200'}`}>02 // STACK</button>
                <button onClick={() => setActiveTab('projects')} className={`py-2 text-[11px] font-black uppercase transition-all tracking-tight border-2 ${activeTab === 'projects' ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-400 border-stone-200'}`}>03 // WORK</button>
            </nav>
        </div>
    );
}