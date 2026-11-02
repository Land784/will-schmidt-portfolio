import Link from "next/link";
import StatusBadge from "@/components/ui/status-badge";
import { experience, research } from "@/lib/resume-data";

// Homepage at-a-glance list of roles; full bullets live on /resume.
export default function ExperienceSummary() {
    return (
        <section id="experience" className="bg-black text-white px-6 pt-4 pb-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-12">Experience</h2>

                <ul className="border border-white/20 rounded-2xl divide-y divide-white/10">
                    {[...experience, ...research].map((entry) => (
                        <li key={entry.company} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-6 py-5">
                            <div>
                                <p className="font-semibold text-lg">
                                    {entry.company}
                                    {entry.status && <StatusBadge label={entry.status} />}
                                </p>
                                <p className="text-gray-400 text-sm">{entry.title}</p>
                            </div>
                            <p className="text-gray-500 text-sm shrink-0 sm:ml-6">{entry.date}</p>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 text-right">
                    <Link href="/resume" className="font-semibold text-gray-300 hover:text-white transition">
                        Full resume →
                    </Link>
                </div>
            </div>
        </section>
    );
}
