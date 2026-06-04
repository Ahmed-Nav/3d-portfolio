'use client';

import { ShieldAlert, Terminal } from 'lucide-react';

export default function WebGLFallback() {
    return (
        <div className="w-full h-full bg-[#050505] flex flex-col justify-center items-center px-6 text-center font-mono text-stone-400">
            <div className="max-w-md p-6 bg-stone-950/40 border border-red-500/20 rounded-2xl backdrop-blur-md space-y-4 shadow-2xl">
                <div className="flex items-center justify-center gap-2 text-red-500 text-xs tracking-widest uppercase">
                    <ShieldAlert className="w-4 h-4 animate-pulse" />
                    <span>ACCELERATION_HARDWARE_RESTRICTED</span>
                </div>

                <div className="space-y-2">
                    <h3 className="text-white font-sans text-lg font-black uppercase tracking-tight">
                        WebGL Context Initialization Failed
                    </h3>
                    <p className="text-xs leading-relaxed text-stone-500">
                        Your current browser configuration or hardware interface has restricted 3D context allocation. Core software logs are running in fallback mode.
                    </p>
                </div>

                <div className="text-[10px] bg-black/60 px-4 py-3 rounded-xl border border-stone-900 text-left space-y-1 text-cyan-400">
                    <div className="flex items-center gap-1.5 text-stone-500 text-[9px] mb-1">
                        <Terminal className="w-3 h-3 text-red-500" />
                        <span>SYSTEM_DIAGNOSTICS</span>
                    </div>
                    <p>❯ status: ACTIVE_FALLBACK</p>
                    <p>❯ interface: DOM_INTERACTION_READY</p>
                    <p>❯ resolution: SCROLL_DOWN_TO_VIEW_EXPERTISE</p>
                </div>
            </div>
        </div>
    );
}