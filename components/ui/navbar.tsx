import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
            <div className="w-full px-6 py-4 flex items-center justify-between">

                {/* Logo / Name */}
                <Link href="/" className="text-white font-bold text-lg">
                    William Schmidt
                </Link>

                {/* Links */}
                <div className="flex gap-6 text-sm text-gray-300">

                    <Link href="https://github.com/Land784" target="_blank" className="hover:text-white transition">
                        GitHub
                    </Link>

                    <Link href="#projects" className="hover:text-white transition">
                        Projects
                    </Link>

                    <Link href="/resume" className="hover:text-white transition">
                        Resume
                    </Link>

                    <Link href="/about" className="hover:text-white transition">
                        About
                    </Link>

                </div>
            </div>
        </nav>
    );
}