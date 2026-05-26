export default function ResumePage() {
    return (
        <main className="min-h-screen bg-black text-white px-6 pt-24 pb-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-5xl font-bold mb-4">
                        Resume
                    </h1>

                    <a
                        href="William_Schmidt_Resume.pdf"
                        download
                        className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
                    >
                        Download
                    </a>
                </div>

                <p className="text-gray-400 mb-6">
                    View my resume below. Updated: 5/26/2026
                </p>


                <div className="w-full h-[900px] border border-white/10 rounded-xl overflow-hidden">
                    <iframe
                        src="/William_Schmidt_Resume.pdf#view=FitH"
                        className="w-full h-full"
                    />
                </div>

            </div>
        </main>
    );
}