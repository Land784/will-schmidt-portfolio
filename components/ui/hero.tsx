export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
            <div className="max-w-4xl text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-4">
                    William Schmidt
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                    CS @ Notre Dame • AI • Software Engineering
                </h2>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                    Building AI systems, Raspberry Pi tools,
                    CAN bus telemetry software, and automation pipelines.
                </p>

                <div className="flex gap-4 justify-center">
                    <a
                        href="https://github.com/Land784"
                        target="_blank"
                        className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="#projects"
                        className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
                    >
                        Projects
                    </a>

                    <a
                        href="/resume"
                        className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
                    >
                        Resume
                    </a>

                    <a
                        href="#about"
                        className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
                    >
                        About
                    </a>
                </div>
            </div>
        </section>
    );
}