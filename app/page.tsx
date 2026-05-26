export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-6xl font-bold mb-6">
            William Schmidt
          </h1>

          <p className="text-2xl text-gray-300 mb-8">
            CS Student | AI + Embedded Systems
          </p>

          <p className="text-lg text-gray-400 mb-10">
            Building AI systems, CAN bus tools, automation software,
            and infrastructure projects.
          </p>

          <div className="flex gap-4 justify-center">
            <a
                href="https://github.com/Land784"
                target="_blank"
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
            >
              GitHub
            </a>

            <a
                href="#"
                className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Resume
            </a>
          </div>
        </div>
      </main>
  );
}