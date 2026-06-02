import { experience, leadership, skills, courses, projects } from "@/lib/resume-data";

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

                <div className="space-y-10">

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
                        <div className="mt-6">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                                Relevant Coursework
                            </p>
                            <p className="text-sm text-gray-400">
                                {courses.join(" · ")}
                            </p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <SectionHeader title="Experience" />
                        <div className="space-y-7">
                            {experience.map((entry, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold text-lg">{entry.company}</p>
                                            <p className="text-gray-300 text-sm">{entry.title}</p>
                                        </div>
                                        <div className="text-right text-sm shrink-0 ml-6">
                                            <p className="text-gray-400">{entry.location}</p>
                                            <p className="text-gray-400">{entry.date}</p>
                                        </div>
                                    </div>
                                    <BulletList bullets={entry.bullets} />
                                </div>
                            ))}
                        </div>
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

                    {/* Projects */}
                    <section>
                        <SectionHeader title="Projects" />
                        <div className="space-y-7">
                            {projects.map((entry, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold">{entry.title}</p>
                                            <p className="text-gray-400 text-sm">{entry.org}</p>
                                        </div>
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
                                            <p className="text-gray-400 text-sm">{entry.location}</p>
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
