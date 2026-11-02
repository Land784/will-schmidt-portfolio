import StatusBadge from "@/components/ui/status-badge";
import TiltCard from "@/components/ui/tilt-card";
import LastCommit from "@/components/ui/last-commit";
import { cn } from "@/lib/utils";

type Project = {
    name: string;
    hook: string;
    description: string;
    tech: string[];
    github?: string;
    status?: string;
    underConstruction?: boolean;
};

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

const projects: Project[] = [
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
        name: "GameDeck",
        hook:
            "A Windows system-tray app that lets gamers control music and skip YouTube ads via global hotkeys and an in-game overlay — without alt-tabbing out of a fullscreen game.",
        description:
            "Built on .NET 8 and WPF, it uses Windows SMTC for universal media-app control and Win32 RegisterHotKey with a low-level keyboard-hook fallback for raw-input games. " +
            "A translucent, click-through WPF overlay renders track info atop DXGI flip-model fullscreen, and a companion Chrome extension handles YouTube ad-skipping over a token-authenticated local WebSocket. " +
            "Deliberately avoids DLL injection and DirectX hooking to stay anti-cheat safe.",
        tech: ["C# / .NET 8", "WPF", "Win32 API", "Windows SMTC", "WebSocket", "Chrome Extension"],
        github: "https://github.com/Land784/GameDeck",
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
    {
        name: "Changing Lives Ghana",
        hook: "Leading a Notre Dame CS4Good team of about eight students rebuilding the website for Changing Lives Ghana, a nonprofit, so its founder can update every page without touching code.",
        description:
            "Replacing the charity's GoDaddy site-builder page with a static Astro and TypeScript site whose content comes entirely from Sanity. " +
            "I set up the repo, CI, and the Sanity Studio content schemas, then wired the site to fetch content at build time, with Portable Text rendering and responsive srcset images. " +
            "The schema requires alt text on every image, and pages target WCAG AA contrast down to 360px wide. Launching on Cloudflare by the end of November 2026.",
        tech: ["Astro", "TypeScript", "React", "Tailwind CSS v4", "Sanity", "GROQ", "Cloudflare", "GitHub Actions"],
        status: "Team lead",
    },
    {
        name: "Plated",
        hook: "Pushes Notre Dame dining hall menus to 10+ subscribers' phones at the times they eat, filtered to the stations they visit and led by each hall's highest-protein mains.",
        description:
            "A Python job on a GitHub Actions cron pulls menus from Nutrislice's unofficial JSON API, ranks each station's mains, and sends every subscriber a push over ntfy, trimmed to fit iOS's notification size limit. " +
            "Subscribers manage their halls, stations, and send times in an invite-only Next.js web app on Supabase, where row-level security and column grants limit each user to their own row. " +
            "A live preview runs the same Python renderer as a Vercel function, so it matches the real push exactly. A macro- and allergen-aware meal planner that searches serving combinations against each user's goals is being rebuilt.",
        tech: ["Python", "httpx", "Pydantic", "Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS v4", "ntfy", "pytest", "Vitest", "GitHub Actions"],
        github: "https://github.com/Land784/Plated",
        underConstruction: true,
    },
    {
        name: "Trek: Road Trip Generator",
        hook: "A road trip planner that builds itineraries and packing lists around what your vehicle can actually do: its fuel range, size, and cargo space.",
        description:
            "Building the full stack for Notre Dame's Database Concepts course: a Flask app over a 19-table MySQL schema, server-rendered Jinja pages, " +
            "and every query hand-written as parameterized SQL with no ORM. Loads 50,407 real vehicle models from fueleconomy.gov and runs on a Notre Dame CSE server. " +
            "Next up: an itinerary optimizer that splits a route into driving days and picks overnight stops, and a packing solver that decides what gear fits and what gets cut.",
        tech: ["Python", "Flask", "MySQL", "SQL", "Jinja2", "HTML/CSS"],
        status: "Team project",
    },
    {
        name: "Ranked By",
        hook: "Daily puzzle website: players see a pre-filled tier list and guess what it's ranked by, with hints that get more revealing. Easy, medium and hard puzzles every day, plus build-your-own tier lists.",
        description: "",
        tech: [],
        underConstruction: true,
    },
];

// Latest commit date for repos under github.com/Land784; anything else (upstream PRs, private repos) gets none.
async function lastCommitDate(github?: string): Promise<string | null> {
    const repo = github?.match(/^https:\/\/github\.com\/(Land784\/[^/]+)$/)?.[1];
    if (!repo) return null;
    try {
        const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, { next: { revalidate: 3600 } });
        if (!res.ok) return null;
        const [latest] = await res.json();
        return latest?.commit?.committer?.date ?? null;
    } catch {
        return null;
    }
}

export default async function Projects() {
    const [featuredCommit, ...projectCommits] = await Promise.all([featured, ...projects].map((p) => lastCommitDate(p.github)));

    return (
        <section id="projects" className="bg-black text-white px-6 py-24">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-5xl font-bold mb-12">Projects</h2>

                {/* Featured card */}
                <TiltCard className="border border-white/30 rounded-2xl p-8 mb-8">
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

                    {featuredCommit && <LastCommit date={featuredCommit} />}

                    <a
                        href={featured.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-xl hover:bg-white hover:text-black transition"
                    >
                        GitHub →
                    </a>
                </TiltCard>

                {/* Secondary project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <TiltCard
                            key={index}
                            className="relative border border-white/30 rounded-2xl p-6 flex flex-col"
                        >
                            {project.underConstruction && (
                                // caution-tape stripes framing a yellow label
                                <span className="absolute top-3 right-3 rounded p-[3px] bg-[repeating-linear-gradient(-45deg,#facc15_0_6px,#000_6px_12px)]">
                                    <span className="block rounded-sm bg-yellow-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                                        Under construction
                                    </span>
                                </span>
                            )}

                            {/* leave room for the corner tape */}
                            <h3 className={cn("text-xl font-bold mb-1", project.underConstruction && "pr-36")}>
                                {project.name}
                                {project.status && <StatusBadge label={project.status} />}
                            </h3>

                            <p className="text-gray-300 text-sm mb-3">{project.hook}</p>

                            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                                {project.description}
                            </p>

                            {project.tech.length > 0 && (
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
                            )}

                            {projectCommits[index] && <LastCommit date={projectCommits[index]} />}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-xl w-fit hover:bg-white hover:text-black transition"
                                >
                                    GitHub →
                                </a>
                            )}
                        </TiltCard>
                    ))}
                </div>

            </div>
        </section>
    );
}
