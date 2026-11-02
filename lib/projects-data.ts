export type Project = {
    name: string;
    hook: string;
    description: string;
    tech: string[];
    github?: string;
    status?: string;
    underConstruction?: boolean;
};

const aiFitness: Project = {
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

const gitCola: Project = {
    name: "Open-Source Contribution: git-cola",
    hook: "An upstream-merged safety feature for git-cola, a Git GUI: a collapsible diff preview on revert confirmation dialogs that prevents users from irreversibly discarding uncommitted work.",
    description:
        "Adds a diffstat and unified diff preview to the revert confirmation dialog so users see exactly what will be discarded before confirming. " +
        "Shares path selection between the preview and the checkout operation so the two cannot diverge, extends MessageBox with an expand_details API, " +
        "and adds unit tests for the new gitcmds diff helper. Merged upstream in July 2026.",
    tech: ["Python", "Qt", "Git"],
    github: "https://github.com/git-cola/git-cola/pull/1621",
};

const gameDeck: Project = {
    name: "GameDeck",
    hook:
        "A Windows system-tray app that lets gamers control music and skip YouTube ads via global hotkeys and an in-game overlay — without alt-tabbing out of a fullscreen game.",
    description:
        "Built on .NET 8 and WPF, it uses Windows SMTC for universal media-app control and Win32 RegisterHotKey with a low-level keyboard-hook fallback for raw-input games. " +
        "A translucent, click-through WPF overlay renders track info atop DXGI flip-model fullscreen, and a companion Chrome extension handles YouTube ad-skipping over a token-authenticated local WebSocket. " +
        "Deliberately avoids DLL injection and DirectX hooking to stay anti-cheat safe.",
    tech: ["C# / .NET 8", "WPF", "Win32 API", "Windows SMTC", "WebSocket", "Chrome Extension"],
    github: "https://github.com/Land784/GameDeck",
};

const newsPredictor: Project = {
    name: "News Sentiment Stock Price Predictor",
    hook: "A PyTorch model that predicts next-day stock price movement by combining historical market data with FinBERT news-sentiment features.",
    description:
        "An end-to-end data-to-inference pipeline: pulls headlines from NewsAPI, filters them for relevance, scores each with FinBERT, " +
        "and merges daily sentiment with two years of yfinance price data engineered in pandas. " +
        "A feedforward network trains on the result with checkpointing on validation loss, alongside a test suite and an interactive inference CLI.",
    tech: ["PyTorch", "FinBERT", "pandas", "NewsAPI", "yfinance"],
    github: "https://github.com/Land784/news-sentiment-stock-predictor",
};

const portfolio: Project = {
    name: "Personal Portfolio Website",
    hook: "The site you're viewing: a recruiter-optimized portfolio built with modern web technologies.",
    description:
        "Designed and built from scratch with a recruiter-first philosophy: strong visual hierarchy, fast load times, and mobile responsiveness. " +
        "Features a hero section, experience timeline, embedded resume viewer, and this projects section. " +
        "Architected with reusable components and strict TypeScript throughout.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn/ui"],
    github: "https://github.com/Land784/will-schmidt-portfolio",
};

const changingLivesGhana: Project = {
    name: "Changing Lives Ghana",
    hook: "Leading a Notre Dame CS4Good team of about eight students rebuilding the website for Changing Lives Ghana, a nonprofit, so its founder can update every page without touching code.",
    description:
        "Replacing the charity's GoDaddy site-builder page with a static Astro and TypeScript site whose content comes entirely from Sanity. " +
        "I set up the repo, CI, and the Sanity Studio content schemas, then wired the site to fetch content at build time, with Portable Text rendering and responsive srcset images. " +
        "The schema requires alt text on every image, and pages target WCAG AA contrast down to 360px wide. Launching on Cloudflare by the end of November 2026.",
    tech: ["Astro", "TypeScript", "React", "Tailwind CSS v4", "Sanity", "GROQ", "Cloudflare", "GitHub Actions"],
    status: "Team lead",
};

const plated: Project = {
    name: "Plated",
    hook: "Pushes Notre Dame dining hall menus to 10+ subscribers' phones at the times they eat, filtered to the stations they visit and led by each hall's highest-protein mains.",
    description:
        "A Python job on a GitHub Actions cron pulls menus from Nutrislice's unofficial JSON API, ranks each station's mains, and sends every subscriber a push over ntfy, trimmed to fit iOS's notification size limit. " +
        "Subscribers manage their halls, stations, and send times in an invite-only Next.js web app on Supabase, where row-level security and column grants limit each user to their own row. " +
        "A live preview runs the same Python renderer as a Vercel function, so it matches the real push exactly. A macro- and allergen-aware meal planner that searches serving combinations against each user's goals is being rebuilt.",
    tech: ["Python", "httpx", "Pydantic", "Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS v4", "ntfy", "pytest", "Vitest", "GitHub Actions"],
    github: "https://github.com/Land784/Plated",
    underConstruction: true,
};

const trek: Project = {
    name: "Trek: Road Trip Generator",
    hook: "A road trip planner that builds itineraries and packing lists around what your vehicle can actually do: its fuel range, size, and cargo space.",
    description:
        "Building the full stack for Notre Dame's Database Concepts course: a Flask app over a 19-table MySQL schema, server-rendered Jinja pages, " +
        "and every query hand-written as parameterized SQL with no ORM. Loads 50,407 real vehicle models from fueleconomy.gov and runs on a Notre Dame CSE server. " +
        "Next up: an itinerary optimizer that splits a route into driving days and picks overnight stops, and a packing solver that decides what gear fits and what gets cut.",
    tech: ["Python", "Flask", "MySQL", "SQL", "Jinja2", "HTML/CSS"],
    status: "Team project",
};

const rankedBy: Project = {
    name: "Ranked By",
    hook: "Daily puzzle website: players see a pre-filled tier list and guess what it's ranked by, with hints that get more revealing. Easy, medium and hard puzzles every day, plus build-your-own tier lists.",
    description: "",
    tech: [],
    underConstruction: true,
};

// Homepage shows the strongest three; /projects shows everything, in this order.
export const featuredProject = plated;
export const homeProjects: Project[] = [gitCola, changingLivesGhana];
export const otherProjects: Project[] = [gitCola, changingLivesGhana, aiFitness, gameDeck, newsPredictor, portfolio, trek, rankedBy];
