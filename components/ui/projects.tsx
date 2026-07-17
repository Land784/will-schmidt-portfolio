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
        name: "Open-Source Contribution: git-cola",
        hook: "An upstream-merged safety feature for git-cola, a Git GUI: a collapsible diff preview on revert confirmation dialogs that prevents users from irreversibly discarding uncommitted work.",
        description:
            "Adds a diffstat and unified diff preview to the revert confirmation dialog so users see exactly what will be discarded before confirming. " +
            "Shares path selection between the preview and the checkout operation so the two cannot diverge, extends MessageBox with an expand_details API, " +
            "and adds unit tests for the new gitcmds diff helper. Merged upstream in July 2026.",
        tech: ["Python", "Qt", "Git"],
        github: "https://github.com/git-cola/git-cola/pull/1621",
    },
    {
        name: "News Sentiment Stock Price Predictor",
        hook: "A PyTorch model that predicts next-day stock price movement by combining historical market data with FinBERT news-sentiment features.",
        description:
            "An end-to-end data-to-inference pipeline: pulls headlines from NewsAPI, filters them for relevance, scores each with FinBERT, " +
            "and merges daily sentiment with two years of yfinance price data engineered in pandas. " +
            "A feedforward network trains on the result with checkpointing on validation loss, alongside a test suite and an interactive inference CLI.",
        tech: ["PyTorch", "FinBERT", "pandas", "NewsAPI", "yfinance"],
        github: "https://github.com/Land784/news-sentiment-stock-predictor",
    },
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
                    {projects.map((project, index) => (
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
                    ))}
                </div>

            </div>
        </section>
    );
}
