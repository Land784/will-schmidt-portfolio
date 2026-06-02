const skills = [
    "Python", "Java", "C", "C++", "SQL", "JavaFX", "PyTorch", "PANDAS",
    "OpenCV", "Git", "AWS", "Linux", "Vim", "SolidWorks", "Excel",
];

const courseworkAndProjects = [
    {
        title: "Data Structures",
        org: "University of Notre Dame",
        date: "Fall 2025",
        bullets: [
            "Implemented core data structures (arrays, linked lists, stacks, queues, trees, graphs) in C and Python; applied searching, sorting, and algorithmic strategies to problem-solving",
        ],
    },
    {
        title: "Introduction to Embedded Systems",
        org: "University of Notre Dame",
        date: "Fall 2025",
        bullets: [
            "Designed, programmed, and deployed Arduino-based embedded systems for data collection and system control",
        ],
    },
    {
        title: "Technical Writing",
        org: "University of Notre Dame",
        date: "Spring 2025",
        bullets: [
            "Applied structured writing processes, including planning, drafting, revising, and editing to produce professional quality documentation",
        ],
    },
    {
        title: "OpenCV Picture Based Attendance Project",
        org: "Park Tudor School, Indianapolis, IN",
        date: null,
        bullets: [
            "Designed and implemented a computer vision tool with OpenCV that automated classroom attendance by identifying student faces, improving efficiency and accuracy",
        ],
    },
    {
        title: "Graphics Based Blackjack Game in C",
        org: "University of Notre Dame",
        date: null,
        bullets: [
            "Built a Blackjack game in C using graphics libraries, integrating card rendering, user input, and game state management to demonstrate proficiency in low-level programming and interacting systems",
        ],
    },
    {
        title: "News Sentiment Stock Price Predictor",
        org: "University of Notre Dame",
        date: null,
        bullets: [
            "Developed a stock price prediction model using PyTorch, integrating historical stock data from yfinance and news sentiment analysis via NewsAPI",
            "Applied FinBERT for NLP-based financial sentiment analysis to enhance the predictive model's features",
            "Processed and cleaned large financial and news related datasets using pandas",
        ],
    },
];

const leadership = [
    {
        title: "Notre Dame Engineering Summer Abroad Program",
        org: "Rome, Italy",
        role: "Student",
        date: "July – Aug 2025",
        bullets: [
            "Completed coursework in Technical Writing and Ethical and Professional Issues including drafting an app proposal to improve bus arrival time prediction accuracy for the city of Rome",
            "Adapted to new academic and cultural environments, enhancing global perspective and cross-cultural communication",
        ],
    },
    {
        title: "Diabetes Youth Foundation of Indiana",
        org: "Noblesville, Indiana",
        role: "Junior Counselor Team Leader",
        date: "Summers 2022–2024",
        bullets: [
            "Led a team of six other junior counselors to clean and maintain the camp",
            "Assisted campers aged 7–15 in understanding, managing, and improving their personal care for their type 1 diabetes",
        ],
    },
];

function SectionHeader({ title }: { title: string }) {
    return (
        <div className="border-b border-white/10 pb-2 mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {title}
            </h2>
        </div>
    );
}

function BulletList({ bullets }: { bullets: string[] }) {
    return (
        <ul className="space-y-1.5 mt-2">
            {bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                    <span className="shrink-0 mt-0.5">▪</span>
                    <span>{b}</span>
                </li>
            ))}
        </ul>
    );
}

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-black text-white px-6 pt-24 pb-16">
            <div className="max-w-4xl mx-auto">

                {/* Page header */}
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-5xl font-bold">Resume</h1>
                    <a
                        href="/William_Schmidt_Resume.pdf"
                        download
                        className="border border-white/40 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-white hover:text-white transition"
                    >
                        Download PDF
                    </a>
                </div>

                <div className="space-y-12">

                    {/* Identity */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-2">William Schmidt</h2>
                        <p className="text-gray-400 text-sm">
                            (317) 478-3556 · wschmid3@nd.edu ·{" "}
                            <a
                                href="https://www.linkedin.com/in/william-schmidt3"
                                target="_blank"
                                className="underline underline-offset-2 hover:text-white transition"
                            >
                                linkedin.com/in/william-schmidt3
                            </a>
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                            Indianapolis, IN
                        </p>
                    </div>

                    {/* Education */}
                    <section>
                        <SectionHeader title="Education" />
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-lg">University of Notre Dame</p>
                                <p className="text-gray-300 text-sm">Bachelor of Science — College of Engineering</p>
                                <p className="text-gray-400 text-sm">
                                    Major: Computer Science · Minor: Engineering Corporate Practice
                                </p>
                            </div>
                            <div className="text-right text-sm shrink-0 ml-6">
                                <p className="text-gray-400">Notre Dame, IN</p>
                                <p className="text-gray-400">Class of 2028</p>
                                <p className="font-semibold text-white mt-0.5">GPA: 3.898</p>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <SectionHeader title="Experience" />
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-lg">Sonablate Corp.</p>
                                <p className="text-gray-300 text-sm">Software Engineering Intern</p>
                            </div>
                            <div className="text-right text-sm shrink-0 ml-6">
                                <p className="text-gray-400">Indianapolis, IN</p>
                                <p className="text-gray-400">May – July 2025</p>
                            </div>
                        </div>
                        <BulletList bullets={[
                            "Migrated the protected health information (PHI) browser user interface from Java Swing to JavaFX, adding features like encryption, anonymization, and USB export of patient records, while aligning the interface with the main application's look and feel",
                            "Accelerated the adoption of the updated PHI browser from version 6.9 to version 6.8.2",
                            "Utilized ANT build automation to streamline software compilation, testing, and deployment",
                            "Collaborated with the head of Information Technology to incorporate PACS (Picture Archiving and Communication System) server functions to the PHI browser's export feature",
                        ]} />
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <SectionHeader title="Technical Skills" />
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-sm px-3 py-1 border border-white/20 rounded-full text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Coursework & Projects */}
                    <section>
                        <SectionHeader title="Related Coursework & Projects" />
                        <div className="space-y-7">
                            {courseworkAndProjects.map((entry, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold">{entry.title}</p>
                                            <p className="text-gray-400 text-sm">{entry.org}</p>
                                        </div>
                                        {entry.date && (
                                            <span className="text-sm text-gray-500 shrink-0 ml-6">
                                                {entry.date}
                                            </span>
                                        )}
                                    </div>
                                    <BulletList bullets={entry.bullets} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Leadership & Activities */}
                    <section>
                        <SectionHeader title="Leadership & Activities" />
                        <div className="space-y-7">
                            {leadership.map((entry, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold">{entry.title}</p>
                                            <p className="text-gray-300 text-sm">{entry.role}</p>
                                            <p className="text-gray-400 text-sm">{entry.org}</p>
                                        </div>
                                        <span className="text-sm text-gray-500 shrink-0 ml-6">
                                            {entry.date}
                                        </span>
                                    </div>
                                    <BulletList bullets={entry.bullets} />
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
