const featured = {
    name: "AI Fitness Platform",
    hook: "A multi-user platform that unifies Strava, WHOOP, and Dexcom G7 glucose data and layers Claude on top for training plans and natural-language coaching.",
    description:
        "Full-stack application built around an async FastAPI backend that integrates four external APIs (Strava, WHOOP, Dexcom, and Anthropic's Claude) via OAuth and typed HTTP clients. " +
        "Implements JWT authentication with bcrypt-hashed passwords and strict per-user data isolation, with business logic separated into a testable service layer. " +
        "PostgreSQL schema is version-controlled through Alembic migrations, and the entire stack (Postgres, backend, and Next.js frontend) runs reproducibly via Docker Compose.",
    tech: [
        "FastAPI",
        "SQLAlchemy 2.0",
        "PostgreSQL",
        "Next.js 15",
        "React 19",
        "Docker",
        "Dexcom API",
        "Anthropic Claude",
        "JWT Auth",
    ],
    github: "https://github.com/Land784/whoop-strava-fitness-tracker",
};

const projects = [
    {
        name: "Personal Portfolio Website",
        hook: "The site you're viewing: a recruiter-optimized portfolio built with modern web technologies.",
        description:
            "Designed and built from scratch with a recruiter-first philosophy: strong visual hierarchy, fast load times, and mobile responsiveness. " +
            "Features a hero section, experience timeline, embedded resume viewer, and this projects section. " +
            "Architected with reusable components and strict TypeScript throughout.",
        tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn/ui"],
        github: "https://github.com/Land784/will-schmidt-portfolio",
    },
    {
        name: "Project Title",
        hook: "One-sentence description of what this project does and why it matters.",
        description:
            "A short technical summary of how it was built, what problems it solved, and any notable engineering decisions made along the way.",
        tech: ["TypeScript", "Node.js", "Docker"],
        github: "#",
        comingSoon: true,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-black text-white px-6 py-24">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-5xl font-bold mb-12">Projects</h2>

                {/* Featured card */}
                <div className="border border-white/30 rounded-2xl p-8 mb-8">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
                        Featured
                    </span>

                    <h3 className="text-3xl font-bold mb-2">{featured.name}</h3>

                    <p className="text-gray-300 text-lg mb-4">{featured.hook}</p>

                    <p className="text-gray-400 leading-relaxed mb-6">{featured.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {featured.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-3 py-1 border border-white/20 rounded-full text-gray-300"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <a
                        href={featured.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-xl hover:bg-white hover:text-black transition"
                    >
                        GitHub →
                    </a>
                </div>

                {/* Secondary project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) =>
                        project.comingSoon ? (
                            <div
                                key={index}
                                className="border border-dashed border-white/20 rounded-2xl p-6 flex flex-col"
                            >
                                <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-3 block">
                                    Coming Soon
                                </span>

                                <h3 className="text-xl font-bold mb-1 text-gray-400">{project.name}</h3>

                                <p className="text-gray-500 text-sm mb-3">{project.hook}</p>

                                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1 border border-white/10 rounded-full text-gray-600"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 border border-white/10 px-5 py-2.5 rounded-xl w-fit cursor-not-allowed">
                                    GitHub →
                                </span>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="border border-white/30 rounded-2xl p-6 flex flex-col"
                            >
                                <h3 className="text-xl font-bold mb-1">{project.name}</h3>

                                <p className="text-gray-300 text-sm mb-3">{project.hook}</p>

                                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1 border border-white/20 rounded-full text-gray-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-xl w-fit hover:bg-white hover:text-black transition"
                                >
                                    GitHub →
                                </a>
                            </div>
                        )
                    )}
                </div>

            </div>
        </section>
    );
}
