export interface TelemetryLog {
    label: string;
    value: string;
}

export interface ProjectStructure {
    id: string;
    title: string;
    tagline: string;
    architectureTag: string;
    techStack: string[];
    telemetry: TelemetryLog[];
    deploymentUrl?: string;
    bounty?: string;
    mobileCategory?: string;
}

export const projectsList: ProjectStructure[] = [
    {
        id: "flowforge",
        title: "FlowForge",
        architectureTag: "Visual Canvas Rigs",
        tagline: "Interactive visual canvas mapping reactive workflow visualizers to an optimized, deterministic UI graph state coordinator.",
        techStack: ["React Flow", "Tailwind CSS", "State Management"],
        telemetry: [
            { label: "Canvas Engine FPS", value: "60 FPS Fixed" },
            { label: "Node State Resolution", value: "Instant" },
            { label: "Graph Engine", value: "Optimized" }
        ],
        deploymentUrl: "https://flowforge-ai-drab.vercel.app/",
        bounty: "1,800,000,000",
        mobileCategory: "VISUAL CANVAS ENGINE"
    },
    {
        id: "panopticon",
        title: "Project Panopticon",
        architectureTag: "Distributed Systems",
        tagline: "Distributed multi-agent intelligence network driving low-latency asynchronous processing, task partitioning, and continuous worker cron-jobs.",
        techStack: ["Python Engine", "Render", "Vercel", "Cron Jobs"],
        telemetry: [
            { label: "Engine Uptime", value: "99.98%" },
            { label: "Async Task Throughput", value: "Highly Concurrent" },
            { label: "Agent Status", value: "Active" }
        ],
        deploymentUrl: "https://project-panopticon-ui-rouge.vercel.app/",
        bounty: "1,500,000,000",
        mobileCategory: "ASYNC INTEL CONFIG",
    },
    {
        id: "analyzer",
        title: "Telemetry Analyzer",
        architectureTag: "Backend Diagnostics",
        tagline: "High-performance backend analytics engine providing structured diagnostics, latency auditing, and system integrity monitoring.",
        techStack: ["NestJS", "TypeScript", "Observability Engine"],
        telemetry: [
            { label: "Event Loop Delay", value: "Minimal" },
            { label: "Stream Processing", value: "Real-Time" },
            { label: "Pipeline Integrity", value: "Stable" }
        ],
        deploymentUrl: "https://nestjs-telemetry-analyzer.vercel.app/",
        bounty: "920,000,000",
        mobileCategory: "BACKEND DIAGNOSTICS"
    },
    {
        id: "aegis",
        title: "Project Aegis",
        architectureTag: "LLMOps / Observability",
        tagline: "Enterprise observability platform providing real-time evaluation, tracing, and tracing for large language model pipelines.",
        techStack: ["Next.js", "Python", "FAISS", "Arize Phoenix"],
        telemetry: [
            { label: "Vector Retrieval", value: "< 45ms" },
            { label: "Trace Context Spans", value: "100% Verified" },
            { label: "Pipeline Status", value: "Optimal" }
        ],
        deploymentUrl: "https://project-aegis-tau.vercel.app/",
        bounty: "1,200,000,000",
        mobileCategory: "OBSERVABILITY ENGINE"
    }
];