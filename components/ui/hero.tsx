export default function Hero() {
    return (
        <section className="min-h-[85vh] flex items-center justify-center bg-black text-white px-6 pt-24 pb-12">
            <div className="max-w-4xl text-center">
                {/* Announcement banner */}
                <p className="inline-block text-sm text-gray-300 border border-white/30 rounded-2xl px-4 py-2 mb-8">
                    <span className="font-semibold text-white">Incoming, Summer 2027:</span>{" "}AI &amp; Data Engineering Summer Scholar, Deloitte Government &amp; Public Services (GPS)
                </p>

                <h1 className="text-6xl md:text-8xl font-bold mb-4">
                    William Schmidt
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 mb-2">
                    Computer Science @ University of Notre Dame
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-4">
                    Incoming AI &amp; Data Engineering Summer Scholar @ Deloitte · Previously Software Engineering Intern @ BPN Solutions
                </p>

                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-3">
                    I build software that solves real problems for real clients, from field compliance tools to AI-powered platforms.
                </p>

                <p className="text-base md:text-lg text-gray-400 mb-1">
                    3.88 GPA · Two SWE internships · Open-source contributor (git-cola)
                </p>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                    wschmid3@nd.edu |{" "}
                    <a
                        href="https://www.linkedin.com/in/william-schmidt3"
                        target="_blank"
                        className="hover:text-white transition underline underline-offset-2"
                    >
                        LinkedIn
                    </a>
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    {/* Primary CTAs */}
                    <a
                        href="/resume"
                        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                    >
                        Resume
                    </a>

                    <a
                        href="#projects"
                        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                    >
                        Projects
                    </a>

                    {/* Secondary CTAs */}
                    <a
                        href="https://github.com/Land784"
                        target="_blank"
                        className="border border-white/40 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-white hover:text-white transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="/about"
                        className="border border-white/40 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-white hover:text-white transition"
                    >
                        About
                    </a>
                </div>
            </div>
        </section>
    );
}
