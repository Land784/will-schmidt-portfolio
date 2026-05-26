export default function ResumePage() {
    return (
        <main className="min-h-screen bg-black text-white px-6 pt-24 pb-12">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-5xl font-bold mb-4">
                    Resume
                </h1>

                <p className="text-gray-400 mb-8">
                    View my resume below.
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