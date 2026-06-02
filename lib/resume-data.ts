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
    org: string
    bullets: string[]
}

export const experience: ExperienceEntry[] = [
    {
        year: "Summer 2026",
        title: "AI Solutions Engineer Intern",
        company: "BPN Solutions",
        location: "Indianapolis, IN",
        date: "Summer 2026",
        bullets: [
            "Building custom AI powered internal systems and solutions for multiple small companies",
        ],
    },
    {
        year: "Summer 2025",
        title: "Software Engineer Intern",
        company: "Sonablate Corp.",
        location: "Indianapolis, IN",
        date: "May – July 2025",
        bullets: [
            "Migrated the protected health information (PHI) browser user interface from Java Swing to JavaFX, adding features like encryption, anonymization, and USB export of patient records, while aligning the interface with the main application's look and feel",
            "Accelerated the adoption of the updated PHI browser from version 6.9 to version 6.8.2",
            "Utilized ANT build automation to streamline software compilation, testing, and deployment",
            "Collaborated with the head of Information Technology to incorporate PACS (Picture Archiving and Communication System) server functions to the PHI browser's export feature",
        ],
    },
];

export const leadership: LeadershipEntry[] = [
    {
        year: "July – Aug 2025",
        title: "Notre Dame Engineering Summer Abroad Program",
        role: "Student",
        company: "Notre Dame Engineering Summer Abroad Program",
        location: "Rome, Italy",
        date: "July – Aug 2025",
        bullets: [
            "Completed coursework in Technical Writing and Ethical and Professional Issues including drafting an app proposal to improve bus arrival time prediction accuracy for the city of Rome",
            "Adapted to new academic and cultural environments, enhancing global perspective and cross-cultural communication",
        ],
    },
    {
        year: "Summers 2022–2024",
        title: "Junior Counselor Team Leader",
        role: "Junior Counselor Team Leader",
        company: "Diabetes Youth Foundation of Indiana",
        location: "Noblesville, Indiana",
        date: "Summers 2022–2024",
        bullets: [
            "Led a team of six other junior counselors to clean and maintain camp facilities",
            "Assisted campers aged seven to fifteen in understanding, managing, and improving their personal care and management of their Type 1 Diabetes",
        ],
    },
];

export const skills: string[] = [
    "Python", "Java", "C", "C++", "SQL", "JavaFX", "PyTorch", "PANDAS",
    "OpenCV", "Git", "AWS", "Linux", "Vim", "SolidWorks", "Excel",
];

export const courses: string[] = [
    "Data Structures",
    "Introduction to Embedded Systems",
    "Technical Writing",
    "Systems Programming",
    "Discrete Math",
    
];

export const projects: ProjectEntry[] = [
    {
        title: "OpenCV Picture Based Attendance Project",
        org: "Park Tudor School, Indianapolis, IN",
        bullets: [
            "Designed and implemented a computer vision tool with OpenCV that automated classroom attendance by identifying student faces, improving efficiency and accuracy",
        ],
    },
    {
        title: "Graphics Based Blackjack Game in C",
        org: "University of Notre Dame",
        bullets: [
            "Built a Blackjack game in C using graphics libraries, integrating card rendering, user input, and game state management to demonstrate proficiency in low-level programming and interacting systems",
        ],
    },
    {
        title: "News Sentiment Stock Price Predictor",
        org: "University of Notre Dame",
        bullets: [
            "Developed a stock price prediction model using PyTorch, integrating historical stock data from yfinance and news sentiment analysis via NewsAPI",
            "Applied FinBERT for NLP-based financial sentiment analysis to enhance the predictive model's features",
            "Processed and cleaned large financial and news related datasets using pandas",
        ],
    },
];
