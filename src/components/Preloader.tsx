'use html';
'use client';

import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const { active, progress } = useProgress();

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-center items-center font-mono text-white"
                >
                    <div className="space-y-3 max-w-xs w-full px-6">
                        <div className="flex justify-between text-[10px] text-stone-500 tracking-widest">
                            <span>INITIALIZING_SYSTEM_CORE</span>
                            <span className="text-amber-400 font-bold">{Math.round(progress)}%</span>
                        </div>
                        {/* High-tech progress track bar */}
                        <div className="h-[2px] bg-stone-900 w-full rounded-full overflow-hidden border border-stone-800/30">
                            <motion.div
                                className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}