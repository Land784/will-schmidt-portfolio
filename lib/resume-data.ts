export type ExperienceEntry = {
    year: string
    title: string
    company: string
    location: string
    date: string
    bullets: string[]
}

export type LeadershipEntry = {
    year: string
    title: string
    role: string
    company: string
    location: string
    date: string
    bullets: string[]
}

export type ProjectEntry = {
    title: string
    stack: string
    bullets: string[]
}

export type SkillGroup = {
    label: string
    items: string[]
}

export const experience: ExperienceEntry[] = [
    {
        year: "2025 – Present",
        title: "Software Engineer",
        company: "BPN Solutions",
        location: "Indianapolis, IN",
        date: "2025 – Present",
        bullets: [
            "Sole engineer on a full-stack job scheduling and profitability platform (Next.js, TypeScript, Node.js, Supabase) for Roots Ops, a landscaping company, so the owner can quote from actual per-job profit margins instead of intuition",
            "Built profitability analytics, job scheduling, and automated notifications using cron jobs and Twilio SMS integration, with Supabase handling authentication and the Postgres database",
            "Owned a separate fixed-price engagement, translating a non-technical client's requirements into a production refrigerant management system for HVAC technicians",
            "Architected a TypeScript Turborepo monorepo (Fastify REST API, Next.js web app, shared domain package) backed by SQL Server, replacing a paper based workflow with an EPA audit-ready system",
            "Practiced test-driven development with a 70+ test integration suite against a Dockerized SQL Server; set up CI/CD with GitHub Actions and Vercel with auto-deploy on merge",
        ],
    },
    {
        year: "Summer 2025",
        title: "Software Engineering Intern",
        company: "Sonablate Corp.",
        location: "Indianapolis, IN",
        date: "May – July 2025",
        bullets: [
            "Re-engineered the protected health information (PHI) browser used to manage patient records, migrating the full UI from Java Swing to JavaFX and aligning it with the main application's design system",
            "Built encryption, anonymization, and USB-export features for patient records, hardening handling of sensitive medical data to support HIPAA-compliant workflows",
            "Integrated PACS (Picture Archiving and Communication System) server functions into the browser's export pipeline, partnering with the Head of IT to connect clinical imaging infrastructure",
        ],
    },
];

export const leadership: LeadershipEntry[] = [
    {
        year: "Jul – Aug 2025",
        title: "Notre Dame Engineering Summer Program",
        role: "Student",
        company: "Notre Dame Engineering Summer Program",
        location: "Rome, Italy",
        date: "Jul – Aug 2025",
        bullets: [
            "Completed coursework in Technical Writing and Professional Ethics; drafted a software proposal to improve bus-arrival-time prediction accuracy for the city of Rome",
        ],
    },
    {
        year: "Summers 2022–2024",
        title: "Junior Counselor Team Leader",
        role: "Junior Counselor Team Leader",
        company: "Diabetes Youth Foundation of Indiana",
        location: "Noblesville, IN",
        date: "Summers 2022–2024",
        bullets: [
            "Led a team of six junior counselors and supported campers aged 7–15 in managing type 1 diabetes",
        ],
    },
];

export const skillGroups: SkillGroup[] = [
    {
        label: "Languages",
        items: ["Python", "Java", "C", "C++", "SQL", "TypeScript", "JavaScript", "Bash"],
    },
    {
        label: "Frameworks & Libraries",
        items: ["Node.js", "Next.js", "React", "Fastify", "FastAPI", "PyTorch", "OpenCV", "pandas", "SQLAlchemy", "Tailwind CSS", "REST APIs"],
    },
    {
        label: "Tools & Platforms",
        items: ["Git", "Docker", "AWS", "PostgreSQL", "Supabase", "SQL Server", "Twilio", "Turborepo", "GitHub Actions", "Vercel", "Linux", "Vim"],
    },
];

export const courses: string[] = [
    "Data Structures and Algorithms",
    "Systems Programming",
    "Embedded Systems",
    "Discrete Mathematics",
    "Computer Architecture",
    "Technical Writing",
];

export const projects: ProjectEntry[] = [
    {
        title: "AI Fitness Platform",
        stack: "FastAPI, PostgreSQL, Next.js, Docker, Dexcom API, Anthropic Claude",
        bullets: [
            "Built a full-stack platform (FastAPI, PostgreSQL, Next.js) that combines Strava, WHOOP, and Dexcom G7 glucose data and uses the Anthropic API to generate personalized training plans and coaching",
            "Engineered an async FastAPI backend integrating four external REST APIs via OAuth 2.0; implemented JWT authentication with bcrypt-hashed passwords and per-user data isolation",
        ],
    },
    {
        title: "News Sentiment Stock Price Predictor",
        stack: "PyTorch, FinBERT, pandas, NewsAPI",
        bullets: [
            "Developed a stock price prediction model in PyTorch combining historical market data (yfinance) with FinBERT news sentiment features engineered in pandas",
        ],
    },
];
