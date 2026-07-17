export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-16 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-3">Interested in talking?</h2>

                <p className="text-gray-400 mb-6">
                    I&apos;m seeking a Summer 2027 software engineering internship.
                </p>

                <a
                    href="mailto:wschmid3@nd.edu"
                    className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                    wschmid3@nd.edu
                </a>

                <div className="flex gap-6 justify-center mt-8 text-sm text-gray-400">
                    <a
                        href="https://www.linkedin.com/in/william-schmidt3"
                        target="_blank"
                        className="hover:text-white transition underline underline-offset-2"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Land784"
                        target="_blank"
                        className="hover:text-white transition underline underline-offset-2"
                    >
                        GitHub
                    </a>
                    <a
                        href="/William_Schmidt_Resume.pdf"
                        download
                        className="hover:text-white transition underline underline-offset-2"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </footer>
    );
}
