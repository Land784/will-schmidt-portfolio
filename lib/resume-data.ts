export type ExperienceEntry = {
    year: string
    title: string
    company: string
    location: string
    date: string
    status?: "Incoming" | "Previous"
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
        year: "Summer 2027",
        title: "AI & Data Engineering Summer Scholar",
        company: "Deloitte",
        location: "Government & Public Services (GPS)",
        date: "Summer 2027",
        status: "Incoming",
        bullets: [],
    },
    {
        year: "May – Oct 2026",
        title: "Software Engineering Intern",
        company: "BPN Solutions",
        location: "Indianapolis, IN",
        date: "May – Oct 2026",
        status: "Previous",
        bullets: [
            "Owned three client products end to end as sole engineer, from scoping in weekly client calls through architecture and deployment",
            "Built and shipped DEEM's EPA-compliance refrigerant-management web app in Next.js and Fastify over SQL Server, delivering a certification-gated purchase-order system with automated inventory drawdown and reconciliation plus mobile barcode scanning, tracking 40,000+ lbs of refrigerant a year against $59K-per-day EPA penalties",
            "Built an e-commerce site for a Detroit-based planter company, working directly with the client to scope requirements",
            "Drove test-driven development with a 200+ test integration suite on a Dockerized SQL Server, and built GitHub Actions and Vercel CI/CD to auto-deploy on merge",
            "Engineered a full-stack job-scheduling and profitability platform in Next.js, TypeScript, and Supabase for a landscaping business launching August 2026, replacing quote-by-feel estimating with per-job margin analytics aimed at lifting the owners' margins from 15-20% toward their 40% goal, and automating crew scheduling and SMS alerts",
        ],
    },
    {
        year: "Summer 2025",
        title: "Software Engineering Intern",
        company: "Sonablate Corp.",
        location: "Indianapolis, IN",
        date: "May – July 2025",
        status: "Previous",
        bullets: [
            "Re-engineered the protected health information (PHI) browser used to manage patient records, migrating the full UI from Java Swing to JavaFX and aligning it with the main application's design system",
            "Built encryption, anonymization, and USB-export features for patient records, hardening handling of sensitive medical data to support HIPAA-compliant workflows",
            "Integrated PACS (Picture Archiving and Communication System) server functions into the browser's export pipeline, partnering with the Head of IT to connect clinical imaging infrastructure",
        ],
    },
];

export const research: ExperienceEntry[] = [
    {
        year: "Aug 2026 – Present",
        title: "Undergraduate Research Assistant",
        company: "AI-Based Medical Image Analysis Lab, CSE Department",
        location: "University of Notre Dame",
        date: "Aug 2026 – Present",
        bullets: [
            "AI-based medical image analysis under Prof. Danny Chen",
            "Performed research tasks on real-time surgical segmentation models",
        ],
    },
];

export const leadership: LeadershipEntry[] = [
    {
        year: "Fall 2026",
        title: "CS4Good",
        role: "Project Lead, Changing Lives Ghana",
        company: "CS4Good",
        location: "University of Notre Dame",
        date: "Fall 2026",
        bullets: [
            "Leading the team building a website for Changing Lives Ghana, a community partner, through Notre Dame's CS4Good club",
        ],
    },
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
        title: "Open-Source Contribution – git-cola (Git GUI)",
        stack: "Python, Qt, Git · Merged July 2026",
        bullets: [
            "Shipped an upstream-merged safety feature adding a collapsible diff preview (diffstat + unified diff) to revert confirmation dialogs, preventing users from irreversibly discarding uncommitted work",
            "Shared path selection between preview and checkout so the two cannot diverge; extended MessageBox with an expand_details API and added unit tests for the new gitcmds diff helper",
        ],
    },
    {
        title: "Plated",
        stack: "Under construction",
        bullets: [
            "Checks Notre Dame dining hall menus and sends notifications, with an allergen- and protein-aware meal builder; 10+ users",
        ],
    },
];
