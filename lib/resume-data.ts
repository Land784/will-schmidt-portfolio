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
        year: "Starting Aug 2026",
        title: "Incoming Undergraduate Research Assistant",
        company: "AI-Based Medical Image Analysis Lab, CSE Department",
        location: "University of Notre Dame",
        date: "Starting Aug 2026",
        bullets: [
            "AI-based medical image analysis under Prof. Danny Chen",
        ],
    },
    {
        year: "May 2026 – Present",
        title: "Software Engineering Intern",
        company: "BPN Solutions",
        location: "Indianapolis, IN",
        date: "May 2026 – Present",
        bullets: [
            "Architected and delivered a full-stack job scheduling and profitability platform (Next.js, TypeScript, Node.js, Supabase) as sole engineer, scoping requirements directly with the owner of Roots Ops Landscaping",
            "Built per-job profitability analytics that improved quoting margins by 20%, and automated job scheduling and crew notifications using cron jobs and Twilio SMS",
            "Delivered a production refrigerant management system for DEEM, translating client requirements into an EPA audit-ready platform optimized for technician use on mobile",
            "Wrote a 200+ test integration suite against a Dockerized SQL Server using test-driven development; set up CI/CD with GitHub Actions and Vercel to auto-deploy on merge",
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
        year: "Summers 2022–2024",
        title: "Diabetes Youth Foundation of Indiana",
        role: "Junior Counselor Team Leader",
        company: "Diabetes Youth Foundation of Indiana",
        location: "Noblesville, IN",
        date: "Summers 2022–2024",
        bullets: [
            "Led a team of six junior counselors supporting campers aged 7–15 in managing type 1 diabetes, mentoring daily self-care while maintaining camp operations across multiple summer sessions",
        ],
    },
    {
        year: "Aug 2024 – Present",
        title: "Student DJ",
        role: "Independent",
        company: "Independent",
        location: "Notre Dame, IN",
        date: "Aug 2024 – Present",
        bullets: [
            "Self-taught DJ performing campus gigs; built custom production speakers from scratch with crossovers, woofers, and cabinets",
        ],
    },
    {
        year: "Jun – Aug 2025",
        title: "Notre Dame Engineering Summer Program",
        role: "Student",
        company: "Notre Dame Engineering Summer Program",
        location: "Rome, Italy",
        date: "Jun – Aug 2025",
        bullets: [
            "Completed Technical Writing and Professional Ethics coursework; proposed software improving Rome's bus-arrival predictions",
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
        items: ["Node.js", "Next.js", "React", "Fastify", "FastAPI", "PyTorch", "OpenCV", "pandas", "Tailwind CSS", "REST APIs"],
    },
    {
        label: "Tools & Platforms",
        items: ["Git", "Docker", "AWS", "PostgreSQL", "Supabase", "Twilio", "GitHub Actions", "Vercel", "Linux", "Vim"],
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
            "Built a full-stack platform (FastAPI, PostgreSQL, Next.js) that combines personal Strava, WHOOP, and Dexcom G7 glucose data to generate personalized training plans and coaching using the Anthropic API",
            "Engineered an async FastAPI backend integrating four external REST APIs via OAuth 2.0; implemented JWT authentication with bcrypt-hashed passwords and per-user data isolation",
        ],
    },
    {
        title: "News Sentiment Stock Price Predictor",
        stack: "PyTorch, FinBERT, pandas, NewsAPI",
        bullets: [
            "Developed a PyTorch stock-price prediction model combining historical market data (yfinance) with FinBERT news-sentiment features engineered from large financial and news datasets using pandas",
        ],
    },
    {
        title: "Open-Source Contribution – git-cola (Git GUI)",
        stack: "Python, Qt, Git · Merged July 2026",
        bullets: [
            "Shipped an upstream-merged safety feature adding a collapsible diff preview (diffstat + unified diff) to revert confirmation dialogs, preventing users from irreversibly discarding uncommitted work",
            "Shared path selection between preview and checkout so the two cannot diverge; extended MessageBox with an expand_details API and added unit tests for the new gitcmds diff helper",
        ],
    },
];
