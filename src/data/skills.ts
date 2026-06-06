export interface SkillItem {
    name: string;
    level: string;
    diagnostic: string;
}

export interface SkillCategory {
    id: string;
    title: string;
    skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
    {
        id: "ai-engineering",
        title: "AI Engineering & Intelligent Systems",
        skills: [
            { name: "Asynchronous Multi-Agent Networks", level: "Expert", diagnostic: "ORCHESTRATION_OK // Multi-agent workflow stable (LangGraph, CrewAI, AutoGen)" },
            { name: "Enterprise LLMOps (Arize Phoenix)", level: "Advanced", diagnostic: "OBSERVABILITY_OK // Real-time trace mapping for LangChain & LlamaIndex pipelines" },
            { name: "Vector Databases & Embeddings (FAISS)", level: "Advanced", diagnostic: "RETRIEVAL_OK < 45ms // Document ingestion indexed via FAISS & LlamaIndex" }
        ]
    },
    {
        id: "software-architecture",
        title: "Core Software & Backend Systems",
        skills: [
            { name: "NestJS / Node.js Ecosystem", level: "Expert", diagnostic: "COMPILER_STABLE // Advanced modular backend architecture" },
            { name: "Distributed Microservices & Cron Automation", level: "Advanced", diagnostic: "PROCESS_POOL_OK // Asynchronous microservices containerized via Docker & FastAPI" },
            { name: "Relational & NoSQL Datastores", level: "Advanced", diagnostic: "DATABASE_OK // PostgreSQL transaction layers & Redis caching optimized" }
        ]
    },
    {
        id: "graphics-frontend",
        title: "Graphics & Advanced Interfaces",
        skills: [
            { name: "3D WebGL / Three.js Graphics", level: "Intermediate", diagnostic: "RENDER_STABLE // Interactive shader matrices compiled" },
            { name: "TypeScript & React / Next.js Frameworks", level: "Expert", diagnostic: "UI_CORE_OK // High-fidelity, type-safe reactive architecture" },
            { name: "Tailwind CSS & Canvas Animation", level: "Expert", diagnostic: "LAYOUT_FLOW // Fluid glassmorphic UI tokens compiled" }
        ]
    }
];