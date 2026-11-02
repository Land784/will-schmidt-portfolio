import Link from "next/link";
import StatusBadge from "@/components/ui/status-badge";
import TiltCard from "@/components/ui/tilt-card";
import LastCommit from "@/components/ui/last-commit";
import { cn } from "@/lib/utils";
import { featuredProject, homeProjects, type Project } from "@/lib/projects-data";

// Latest commit date for repos under github.com/Land784; anything else (upstream PRs, private repos) gets none.
async function lastCommitDate(github?: string): Promise<string | null> {
    const repo = github?.match(/^https:\/\/github\.com\/(Land784\/[^/]+)$/)?.[1];
    if (!repo) return null;
    try {
        const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, { next: { revalidate: 3600 } });
        if (!res.ok) return null;
        const [latest] = await res.json();
        return latest?.commit?.committer?.date ?? null;
    } catch {
        return null;
    }
}

function ProjectCard({ project, lastCommit, featured = false }: { project: Project; lastCommit: string | null; featured?: boolean }) {
    return (
        <TiltCard className={cn("border border-white/30 rounded-2xl flex flex-col", featured ? "p-8 mb-8" : "p-6")}>
            {project.underConstruction && (
                // caution-tape stripes framing a yellow label
                <span className="absolute top-3 right-3 rounded p-[3px] bg-[repeating-linear-gradient(-45deg,#facc15_0_6px,#000_6px_12px)]">
                    <span className="block rounded-sm bg-yellow-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                        Under construction
                    </span>
                </span>
            )}

            {featured && (
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
                    Featured
                </span>
            )}

            {/* leave room for the corner tape */}
            <h3 className={cn("font-bold", featured ? "text-3xl mb-2" : "text-xl mb-1", project.underConstruction && "pr-36")}>
                {project.name}
                {project.status && <StatusBadge label={project.status} />}
            </h3>

            <p className={cn("text-gray-300", featured ? "text-lg mb-4" : "text-sm mb-3")}>{project.hook}</p>

            <p className={cn("text-gray-400 leading-relaxed flex-1", featured ? "mb-6" : "text-sm mb-5")}>
                {project.description}
            </p>

            {project.tech.length > 0 && (
                <div className={cn("flex flex-wrap gap-2", featured ? "mb-6" : "mb-5")}>
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-3 py-1 border border-white/20 rounded-full text-gray-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}

            {lastCommit && <LastCommit date={lastCommit} />}

            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-xl w-fit hover:bg-white hover:text-black transition"
                >
                    GitHub →
                </a>
            )}
        </TiltCard>
    );
}

export async function ProjectGrid({ featured, projects }: { featured: Project; projects: Project[] }) {
    const [featuredCommit, ...commits] = await Promise.all([featured, ...projects].map((p) => lastCommitDate(p.github)));

    return (
        <>
            <ProjectCard project={featured} lastCommit={featuredCommit} featured />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={project.name} project={project} lastCommit={commits[i]} />
                ))}
            </div>
        </>
    );
}

// Homepage section: the top three projects plus a link to the full list.
export default function Projects() {
    return (
        <section id="projects" className="bg-black text-white px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-12">Projects</h2>

                <ProjectGrid featured={featuredProject} projects={homeProjects} />

                <div className="mt-8 text-right">
                    <Link href="/projects" className="font-semibold text-gray-300 hover:text-white transition">
                        All projects →
                    </Link>
                </div>
            </div>
        </section>
    );
}
